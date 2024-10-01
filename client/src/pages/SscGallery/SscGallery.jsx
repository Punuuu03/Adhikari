/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SscGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/videos/category/sscId'); // Replace 'sscId' with the actual category ID
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching SSC videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-gallery">
      <h2>SSC Videos</h2>
      <div className="gallery-grid">
        {videos.map((video) => (
          <div className="video-card" key={video._id}>
            <h3>{video.name}</h3>
            <video width="300" controls>
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.description}</p>
            <p>Price: ${video.price}</p>
            <button className="enroll-button">Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SscGallery;
