/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../Navbar/Navbar';
import marketing from '../../assets/marketing.png';
import development from '../../assets/development.png';
import design from '../../assets/design.avif';
import Courses from '../Courses/Courses';
import Contact from '../Contact/Contact';
import Explore from '../Explore/Explore';
import FreeGallery from '../FreeGalley/FreeGallery';


const Home = () => {
  return (
    <>
      <Navbar />
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to EduPlatform</h1>
          <p className="text-lg mb-8">
            The best place to enhance your skills and unlock your potential. Join now to access world-class courses!
          </p>
          <a href="/courses" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Explore Courses
          </a>
        </div>
      </header>
      <Explore/>
<Courses/>
      

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Learn with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry leaders with real-world experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace, on any device, anytime, anywhere.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Wide Range of Courses</h3>
              <p className="text-gray-600">Choose from hundreds of courses across a wide variety of topics.</p>
            </div>
          </div>
        </div>
      </section>
      <FreeGallery/>

      {/* <section className="container mx-auto px-1 py-16 text-center"> */}
        {/* <h2 className="text-3xl font-bold mb-8">Join Over 100,000 Learners Today</h2> */}
        {/* <p className="text-lg mb-8">Start learning and get certified in the most sought-after skills in the industry.</p> */}
        {/* <a href="/login" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"> */}
          {/* Get Started for Free */}
        {/* </a> */}
        
      {/* </section> */}

<br></br>
      <section className="cta-section text-center py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4 animate__animated animate__fadeInUp">
          Join Thousands of Learners Today
        </h2>
        <p className="text-lg text-gray-700 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          Upgrade your knowledge with our premium courses. Subscribe now and start your learning journey!
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 animate__animated animate__pulse animate__infinite">
          Subscribe Now
        </button>
      </section>

      <Contact/>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EduPlatform. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
