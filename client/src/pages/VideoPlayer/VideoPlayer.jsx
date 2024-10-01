/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoPlayer = () => {
  const { id } = useParams(); // Get the video ID from the URL
  const [videoUrl, setVideoUrl] = React.useState('');

  React.useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/videos/${id}`);
        setVideoUrl(response.data.videoUrl); // Assuming the field is named 'videoUrl'
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };
    
    fetchVideo();
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Video Player</h1>
        {videoUrl ? (
          <video width="600" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
