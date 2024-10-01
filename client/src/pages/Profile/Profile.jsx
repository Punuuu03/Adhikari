/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import CourseGallery from '../CourseGallery/CourseGallery';
// import It from '../CourseGallery/It';

const Profile = () => {
  const [user, setUser] = useState({}); // State to hold user data
  const [userEmail, setUserEmail] = useState(''); // State to hold user email
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = localStorage.getItem('user');
    const email = localStorage.getItem('userEmail');
    
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); // Parse the stored string back into an object
      setUser(parsedUser);
    }
    
    if (email) {
      setUserEmail(email); // Set the user email from local storage
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('userEmail');
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/6 bg-white shadow-lg p-4 rounded-lg"> {/* Added shadow and rounded corners */}
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10 mr-3" />
          <h1 className="text-xl font-bold text-blue-600">Learning Platform</h1>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">Home</a>
          <a href="/my-learning" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">My Learning</a>
          <a href="/completed" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">Completed</a>
          <a href="/upscgallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">UPSC</a>
          <a href="/mpscgallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">MPSC</a>
          <a href="/freegallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">Free</a>
          <a href="/banking" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">Banking</a>
          <a href="/sscgallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">SSC</a>
          <a href="/hsc" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 shadow-md p-2 rounded-md hover:shadow-lg">HSC</a>
        </div>
      </div>

      <div className="flex-1">
        {/* Top Section: Search Bar, Profile */}
        <div className="flex items-center justify-between bg-white p-4 shadow-lg rounded-lg mt-4 mx-4"> {/* Added shadow and rounded corners */}
          <div className="flex items-center w-full max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search courses, categories..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            />
          </div>

          <div className="relative">
            <img
              src="https://via.placeholder.com/40" // Placeholder profile image
              alt="Profile"
              className="h-10 w-10 rounded-full cursor-pointer hover:shadow-md transition-shadow duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <div className="p-4 border-b">
                  {/* Conditionally displaying the email */}
                  {userEmail ? (
                    <p className="text-lg mb-4"><strong>{userEmail}</strong></p> // Show email
                  ) : (
                    <p className="text-lg mb-4">No user logged in.</p> // Fallback if no email
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Course Gallery */}
        <div className="bg-white shadow-lg rounded-lg p-4 mt-4 mx-4">
          {/* <CourseGallery /> */}
          {/* <It /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
