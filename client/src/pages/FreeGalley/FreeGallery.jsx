/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Importing navigation and pagination for Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'animate.css'; // Import animate.css for animations

const FreeGallery = () => {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef({});
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const freeCategoryId = '66fa481048bb74803def4434'; // Replace with actual Free category ID
        const response = await axios.get(`http://localhost:5000/api/videos/category/${freeCategoryId}`);
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching free videos:', error);
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

      if (playingVideoId === videoId) {
        videoElement.pause();
        setPlayingVideoId(null);
        setIsPlaying(false);
      } else {
        if (playingVideoId !== null && videoRefs.current[playingVideoId]) {
          videoRefs.current[playingVideoId].pause();
        }

        videoElement.play();
        setPlayingVideoId(videoId);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="container mx-auto px-4" onContextMenu={(e) => e.preventDefault()}>
      {/* Dynamic Header with animation */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 text-center mb-10">
        <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">
          Discover Free Learning Videos
        </h1>
        <p className="mt-4 text-lg animate__animated animate__fadeInUp">
          Watch our curated collection of educational content anytime, anywhere.
        </p>
      </header>

      {/* Swiper Slider with animations */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper animate__animated animate__fadeIn animate__delay-1s"
        modules={[Navigation, Pagination]}
      >
        {videos.map((video) => (
          <SwiperSlide key={video._id}>
            <div className="video-card group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-lg transition duration-500 ease-in-out">
              <h3 className="text-lg font-semibold p-4 group-hover:text-indigo-600 transition-colors">
                {video.name}
              </h3>
              <div className="relative w-full h-48">
                <video
                  ref={(el) => (videoRefs.current[video._id] = el)}
                  onClick={() => handleVideoClick(video._id)}
                  className="w-full h-full object-cover rounded-t-lg cursor-pointer"
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Play Button Overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick(video._id);
                  }}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-white rounded-full p-2 shadow-lg cursor-pointer animate-bounce 
                    ${playingVideoId === video._id ? 'hidden' : 'flex'}`}
                >
                  <span className="text-2xl">▶</span>
                </button>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-4">{video.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick(video._id);
                  }}
                  className="enroll-button px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:bg-gradient-to-l transform transition duration-300"
                >
                  Watch for Free
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
<br></br>
      {/* Call-to-action Section */}
      {/* <section className="cta-section text-center py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4 animate__animated animate__fadeInUp">
          Join Thousands of Learners Today
        </h2>
        <p className="text-lg text-gray-700 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          Upgrade your knowledge with our premium courses. Subscribe now and start your learning journey!
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 animate__animated animate__pulse animate__infinite">
          Subscribe Now
        </button>
      </section> */}

      {/* Screenshots/Recording Warning Overlay */}
      {isPlaying && (
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white text-center py-3 animate__animated animate__fadeInUp">
          Screenshots and recording are not allowed while watching the video.
        </div>
      )}
    </div>
  );
};

export default FreeGallery;
