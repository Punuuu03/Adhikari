/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/videos/${id}`);
      setVideos(videos.filter((video) => video._id !== id));
    } catch (error) {
      console.error('Error deleting video:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Video List</h1>
      <Link to="/addvideo">
        <button className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Add Video
        </button>
      </Link>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left text-gray-600">Video Name</th>
            <th className="py-2 px-4 text-left text-gray-600">Category</th>
            <th className="py-2 px-4 text-left text-gray-600">Price</th>
            <th className="py-2 px-4 text-left text-gray-600">Video</th>
            <th className="py-2 px-4 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video._id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{video.name}</td>
              <td className="py-2 px-4">{video.category.name}</td>
              <td className="py-2 px-4">{video.price}</td>
              <td className="py-2 px-4">
                <Link to={`/videoplayer/${video._id}`}>
                  <video width="200" controls className="rounded">
                    <source src={video.videoUrl} type="video/mp4" /> {/* Ensure the correct property for video URL */}
                    Your browser does not support the video tag.
                  </video>
                </Link>
              </td>
              <td className="py-2 px-4">
                <Link to={`/editvideo/${video._id}`} className="text-blue-500 hover:underline">
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(video._id)} 
                  className="ml-4 text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoList;
