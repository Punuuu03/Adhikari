/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,mr', // English and Marathi only
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    };

    addGoogleTranslateScript();

    // Apply custom styling to remove "Select Language" text and extra options
    const removeSelectLanguageText = () => {
      const observer = new MutationObserver(() => {
        const selectLanguageElement = document.querySelector('.goog-te-combo');
        if (selectLanguageElement) {
          // Remove "Select Language" text
          selectLanguageElement.previousSibling?.remove();
          // Remove other options except English and Marathi
          const options = selectLanguageElement.querySelectorAll('option');
          options.forEach(option => {
            if (option.value !== 'en' && option.value !== 'mr') {
              option.remove();
            }
          });
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    };

    removeSelectLanguageText();
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">
            <a href="/">EduPlatform</a>
          </div>

          {/* Language Selector and Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Google Translate Language Dropdown */}
            <div id="google_translate_element" className="mr-4 relative" />

            <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-500">Courses</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
            <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</a>
            <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Signup</a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            {/* Google Translate Language Dropdown for Mobile */}
            <div id="google_translate_element_mobile" className="my-2 relative" />
            
            <a href="/" className="block py-2 text-gray-700 hover:text-blue-500">Home</a>
            <a href="/courses" className="block py-2 text-gray-700 hover:text-blue-500">Courses</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-500">Contact</a>
            <a href="/login" className="block py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</a>
            <a href="/signup" className="block py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Signup</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
