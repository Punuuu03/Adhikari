/* eslint-disable no-unused-vars */
import React from 'react';
import { FiPhoneCall, FiMessageCircle, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 p-8 lg:p-14 bg-gray-100">
      {/* Left Side - Contact Info */}
      <div className="flex flex-col space-y-6 lg:w-1/2"> {/* Increased width */}
        <div className="flex items-center p-5 bg-white shadow-lg rounded-md transition-transform hover:scale-105 duration-300">
          <FiPhoneCall className="text-orange-500 text-4xl mr-4" />
          <div>
            <p className="text-gray-500">Call us directly at</p>
            <h3 className="text-blue-600 text-xl lg:text-2xl font-semibold">+353 1 512 4400</h3>
            <a href="#" className="text-blue-600 text-sm hover:underline">See all numbers and locations</a>
          </div>
        </div>

        <div className="flex items-center p-5 bg-white shadow-lg rounded-md transition-transform hover:scale-105 duration-300">
          <FiMessageCircle className="text-orange-500 text-4xl mr-4" />
          <div>
            <p className="text-gray-500">Chat with our sales team</p>
            <a href="#" className="text-blue-600 text-sm hover:underline">Start Chat</a>
          </div>
        </div>

        {/* New Email Section */}
        <div className="flex items-center p-5 bg-white shadow-lg rounded-md transition-transform hover:scale-105 duration-300">
          <FiMail className="text-orange-500 text-4xl mr-4" />
          <div>
            <p className="text-gray-500">Email us at</p>
            <h3 className="text-blue-600 text-xl lg:text-2xl font-semibold">sales@example.com</h3>
            <a href="mailto:sales@example.com" className="text-blue-600 text-sm hover:underline">Send an Email</a>
          </div>
        </div>
      </div>

      {/* Right Side - Book a Meeting Form */}
      <div className="mt-10 lg:mt-0 bg-white p-8 lg:p-12 shadow-lg rounded-md lg:w-2/2 transition-transform hover:scale-105 duration-300"> {/* Reduced width */}
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">Book a Meeting</h2>
        <p className="text-gray-500 mb-8">
          To schedule time to speak with one of our sales representatives, complete the form, 
          then click next to choose a date and time that works for you.
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input 
              type="text" 
              placeholder="First Name*" 
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" 
              required 
            />
            <input 
              type="text" 
              placeholder="Last Name*" 
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input 
              type="email" 
              placeholder="Email*" 
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" 
              required 
            />
            <input 
              type="tel" 
              placeholder="Phone Number*" 
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
