/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Import images from the assets folder
import Image1 from '../../assets/design.avif';
import Image2 from '../../assets/development.png';
import Image3 from '../../assets/marketing.png';
import Image4 from '../../assets/development.png';

// Array of imported images
const images = [Image1, Image2, Image3, Image4];

// Corresponding text for each image
const descriptions = [
  {
    title: "Creative Design",
    text: "Our design services help you create a strong visual identity that captures your audience's attention.",
  },
  {
    title: "Expert Development",
    text: "We provide robust development solutions tailored to your business needs, ensuring optimal performance.",
  },
  {
    title: "Effective Marketing",
    text: "Our marketing strategies are designed to maximize your reach and engage your target audience effectively.",
  },
  {
    title: "Comprehensive Support",
    text: "We offer ongoing support and consultation to help you navigate challenges and seize opportunities.",
  },
];

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex w-full h-[350px]"> {/* Reduced height for the overall container */}
      <div className="relative w-2/3 h-full overflow-hidden mt-8 ml-8 mb-8"> {/* Margin for outside spacing */}
        <div className="absolute inset-0 p-4"> {/* Padding for inner spacing */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg" // Rounded corners for aesthetics
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col items-start justify-center bg-gray-100 p-4 m-8"> {/* Adjusted to 1/3 width for proper alignment */}
        <h2 className="text-2xl font-bold">{descriptions[currentIndex].title}</h2>
        <p className="mt-2 text-gray-700">
          {descriptions[currentIndex].text}
        </p>
      </div>
    </div>
  );
};

export default Explore;
