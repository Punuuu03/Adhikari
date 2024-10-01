/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaVideo } from 'react-icons/fa'; // Add FaVideo icon

const AdminDashboard = () => {
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

  // Function to navigate to Category List
  const navigateToCategoryList = () => {
    navigate('/categorylist'); // Adjust this path according to your routing
  };

  // Function to navigate to Video List
  const navigateToVideoList = () => {
    navigate('/videolist'); // Adjust this path according to your routing
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/6 bg-white shadow-lg p-4"> {/* Added shadow-lg */}
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10 mr-3" />
          <h1 className="text-xl font-bold text-blue-600">Admin Dashboard</h1>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="px-6 py-2 hover:bg-gray-600 flex items-center shadow-sm hover:shadow-md transition-shadow duration-200"> {/* Added shadow effect */}
              <FaHome className="mr-3" /> Dashboard
            </li>
            <li 
              className="px-6 py-2 hover:bg-gray-600 flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer" 
              onClick={navigateToCategoryList} // Add onClick to navigate
            >
              <FaSignOutAlt className="mr-3" /> Category
            </li>
            {/* New Video Menu Item */}
            <li 
              className="px-6 py-2 hover:bg-gray-600 flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer" 
              onClick={navigateToVideoList} // Add onClick to navigate to VideoList
            >
              <FaVideo className="mr-3" /> Video
            </li>
            <li className="px-6 py-2 hover:bg-gray-600 flex items-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <FaUser className="mr-3" /> Students
            </li>
            <li className="px-6 py-2 hover:bg-gray-600 flex items-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <FaCog className="mr-3" /> Transaction
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1">
        {/* Top Section: Search Bar, Profile */}
        <div className="flex items-center justify-between bg-white p-4 shadow-md">
          <div className="flex items-center w-full max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search courses, categories..."
              className="flex-1 p-2 border-t border-b border-r border-gray-200 rounded-lg shadow-sm" // Added shadow-sm
            />
          </div>

          <div className="relative">
            <img
              src="https://via.placeholder.com/40" // Placeholder profile image
              alt="Profile"
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10"> {/* Added shadow-lg */}
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
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 mt-4"> {/* Adjusted margin-top */}
          <h1 className="text-3xl font-bold mb-6">Dashboard Content</h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white shadow-lg p-6 rounded-lg"> {/* Added shadow-lg */}
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p>Some details about this card</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg"> {/* Added shadow-lg */}
              <h2 className="text-xl font-semibold">Card 2</h2>
              <p>Some details about this card</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg"> {/* Added shadow-lg */}
              <h2 className="text-xl font-semibold">Card 3</h2>
              <p>Some details about this card</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminDashboard;
