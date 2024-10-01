/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const MpscGallery = () => {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef({}); // Ref to hold video elements
  const [playingVideoId, setPlayingVideoId] = useState(null); // Track the currently playing video ID
  const [isPlaying, setIsPlaying] = useState(false); // Track if a video is playing

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const mpscCategoryId = '66f7c99cafb3d124ddf98658'; // Replace this with the actual MPSC category ID from your database
        const response = await axios.get(`http://localhost:5000/api/videos/category/${mpscCategoryId}`);
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching MPSC videos:', error);
      }
    };

    fetchVideos();

    // Disable certain key presses (like PrintScreen)
    const handleKeyDown = (event) => {
      if (event.key === 'PrintScreen') {
        event.preventDefault();
        alert("Screenshots are not allowed while watching videos.");
      }
    };

    // Disable right-click to prevent context menu (to discourage screenshots)
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Attach event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleVideoClick = (videoId) => {
    if (videoRefs.current[videoId]) {
      const videoElement = videoRefs.current[videoId];

      // If the clicked video is already playing, just pause it
      if (playingVideoId === videoId) {
        videoElement.pause();
        setPlayingVideoId(null); // Reset playing video ID
        setIsPlaying(false);
      } else {
        // Pause the currently playing video if there is one
        if (playingVideoId !== null && videoRefs.current[playingVideoId]) {
          videoRefs.current[playingVideoId].pause();
        }

        // Play the selected video
        videoElement.play();
        setPlayingVideoId(videoId); // Set the currently playing video ID
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="container mx-auto px-4" onContextMenu={(e) => e.preventDefault()}> {/* Disable right-click */}
      <h2 className="text-2xl font-bold mb-4">MPSC Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div className="video-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" key={video._id}>
            <h3 className="text-lg font-semibold p-4">{video.name}</h3>
            <div className="relative w-full h-48"> {/* Set fixed height for video container */}
              <video
                ref={(el) => (videoRefs.current[video._id] = el)} // Assign video element to ref
                onClick={() => handleVideoClick(video._id)} // Play/Pause on click
                className="w-full h-full object-cover" // Ensure video fits the container
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Play button overlay */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent video click event
                  handleVideoClick(video._id); // Play video on click
                }} 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  bg-white rounded-full p-2 cursor-pointer 
                  ${playingVideoId === video._id ? 'hidden' : 'flex'}`} // Show only if video is paused
              >
                <span className="text-2xl">▶</span> {/* Play icon */}
              </button>
            </div>
            <div className="p-4 flex-grow"> {/* Allow this section to grow to fill space */}
              <p className="text-gray-600">{video.description}</p>
              <p className="text-lg font-semibold">Price: ${video.price}</p>
              <button className="enroll-button mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Display a message if a video is playing */}
      {isPlaying && (
        <div className="fixed bottom-0 left-0 right-0 bg-red-500 text-white text-center p-2">
          Screenshots and recording are not allowed while watching the video.
        </div>
      )}
    </div>
  );
};

export default MpscGallery;
