/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditVideo = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState({
    name: '',
    videoUrl: '',
    description: '',
    price: '',
    category: '',
  });
  const [categories, setCategories] = useState([]);
  const [videoFile, setVideoFile] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/videos/${id}`);
        setVideoData(response.data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchVideo();
    fetchCategories();
  }, [id]);

  const handleVideoUpload = async () => {
    if (!videoFile) return videoData.videoUrl; // Keep the current video URL if no new file is uploaded

    const formData = new FormData();
    formData.append('file', videoFile);
    formData.append('upload_preset', 'h5ahb6iv');

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dednblbo3/video/upload', formData);
      return res.data.secure_url;
    } catch (error) {
      console.error('Error uploading video:', error);
      return videoData.videoUrl; // Fallback to current video URL on error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoUrl = await handleVideoUpload();

    const updatedVideoData = {
      ...videoData,
      videoUrl,
      // No need to change category since it should not be editable
    };

    try {
      await axios.put(`http://localhost:5000/api/videos/${id}`, updatedVideoData);
      alert('Video updated successfully!');
    } catch (error) {
      console.error('Error updating video:', error);
      alert('Failed to update video.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Video</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Video Name" 
            value={videoData.name} 
            onChange={(e) => setVideoData({ ...videoData, name: e.target.value })} 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input 
            type="file" 
            accept="video/*" 
            onChange={(e) => setVideoFile(e.target.files[0])} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <textarea 
            placeholder="Description" 
            value={videoData.description} 
            onChange={(e) => setVideoData({ ...videoData, description: e.target.value })} 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input 
            type="number" 
            placeholder="Price" 
            value={videoData.price} 
            onChange={(e) => setVideoData({ ...videoData, price: e.target.value })} 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          {/* Display the selected category name */}
          {/* <div className="border rounded w-full py-2 px-3 text-gray-700"> */}
            {/* {videoData.category && categories.find(cat => cat._id === videoData.category)?.name} */}
          {/* </div> */}
        {/* </div> */} 

        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Video
        </button>
      </form>
    </div>
  );
};

export default EditVideo;
