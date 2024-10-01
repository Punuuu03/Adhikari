/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddVideo = () => {
  const [videoName, setVideoName] = useState('');
  const [videoFile, setVideoFile] = useState(null); // No need for File type in JS
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState([]); // List of categories
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  // Fetch categories from backend API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data); // Set categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Handle video upload to Cloudinary
  const handleVideoUpload = async () => {
    if (!videoFile) return;

    const formData = new FormData();
    formData.append('file', videoFile);
    formData.append('upload_preset', 'h5ahb6iv'); // Cloudinary upload preset

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dednblbo3/video/upload', formData);
      const uploadedVideoUrl = res.data.secure_url; // Cloudinary URL
      setVideoUrl(uploadedVideoUrl); // Store URL in state
      console.log('Video URL:', uploadedVideoUrl);
      return uploadedVideoUrl;
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Video upload failed. Please try again.');
    }
  };

  // Handle form submission and saving the video data to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const uploadedVideoUrl = await handleVideoUpload(); // Wait for the video to upload

    // Proceed only if the video was successfully uploaded
    if (uploadedVideoUrl) {
      const videoData = {
        name: videoName,
        videoUrl: uploadedVideoUrl, // Use the video URL from Cloudinary
        description,
        price,
        category: selectedCategory, // Send category as the ObjectId string
      };

      try {
        // Send the video data to the backend API to store it in MongoDB
        await axios.post('http://localhost:5000/api/videos', videoData);
        alert('Video added successfully!');
      } catch (error) {
        console.error('Error adding video to the database:', error);
        alert('Failed to add video. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Video</h2>
      <input
        type="text"
        placeholder="Video Name"
        value={videoName}
        onChange={(e) => setVideoName(e.target.value)}
        required
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="file"
        onChange={(e) => setVideoFile(e.target.files ? e.target.files[0] : null)}
        required
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        required
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Add Video
      </button>
    </form>
  );
};

export default AddVideo;
