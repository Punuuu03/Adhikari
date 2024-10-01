/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import marketing from '../../assets/marketing.png';
import development from '../../assets/development.png';
import design from '../../assets/design.avif';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000, // Time in milliseconds for each slide (2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Handle image click to navigate to CourseGallery
  const handleImageClick = () => {
    navigate('/coursegallery'); // Navigate to the CourseGallery page
  };

  return (
    <>
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Slider {...settings}>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img 
              src={development} 
              alt="Development" 
              className="w-full h-40 object-cover rounded-md mb-4" 
              onClick={handleImageClick} // Handle click
              style={{ cursor: 'pointer' }} // Change cursor to pointer
            />
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-600">Learn web, mobile, and software development with our expert-led courses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img 
              src={design} 
              alt="Design" 
              className="w-full h-40 object-cover rounded-md mb-4" 
              onClick={handleImageClick} // Handle click
              style={{ cursor: 'pointer' }} // Change cursor to pointer
            />
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-gray-600">Master design principles, UX/UI, and graphic design with practical lessons.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img 
              src={marketing} 
              alt="Marketing" 
              className="w-full h-40 object-cover rounded-md mb-4" 
              onClick={handleImageClick} // Handle click
              style={{ cursor: 'pointer' }} // Change cursor to pointer
            />
            <h3 className="text-xl font-semibold mb-2">Marketing</h3>
            <p className="text-gray-600">Become a digital marketing pro with strategies for SEO, social media, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img 
              src={development} 
              alt="Development" 
              className="w-full h-40 object-cover rounded-md mb-4" 
              onClick={handleImageClick} // Handle click
              style={{ cursor: 'pointer' }} // Change cursor to pointer
            />
            <h3 className="text-xl font-semibold mb-2">Advanced Web Development</h3>
            <p className="text-gray-600">Take your web development skills to the next level with hands-on projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img 
              src={design} 
              alt="Design" 
              className="w-full h-40 object-cover rounded-md mb-4" 
              onClick={handleImageClick} // Handle click
              style={{ cursor: 'pointer' }} // Change cursor to pointer
            />
            <h3 className="text-xl font-semibold mb-2">Advanced UX/UI Design</h3>
            <p className="text-gray-600">Learn advanced techniques in UX/UI to design better, user-friendly products.</p>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Courses;
