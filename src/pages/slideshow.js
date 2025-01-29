import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Slideshow = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/111.jpg',
    process.env.PUBLIC_URL + '/images/16.jpg',
    process.env.PUBLIC_URL + '/images/15.jpg', // The image you want to adjust
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const imagesLength = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagesLength);
    }, 5000); // Slideshow interval of 5 seconds

    return () => clearInterval(interval);
  }, [imagesLength]);

  return (
    <div className="relative w-full h-[500px] sm:h-[500px] md:h-[500px] lg:h-[700px] xl:h-[700px]">
      {/* Marquee Text */}
      <div className="absolute top-0 left-0 w-full bg-[#BA0021] text-white flex items-center justify-center z-10">
        <div className="overflow-hidden w-full">
          <div
            className="whitespace-nowrap text-lg p-2 flex justify-between"
            style={{
              animation: 'marquee 20s linear infinite',
            }}
          >
            <span className="mx-3">Grateful</span>
            <span className="mx-3">Joyful</span>
            <span className="mx-3">Hopeful</span>
          </div>
        </div>

        {/* Logo */}
        <div className="absolute top-12 left-0 z-20">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="Church Logo"
              className="w-24 h-auto sm:w-28 md:w-44 lg:w-56" // Responsive logo size
            />
          </Link>
        </div>
      </div>

      {/* Slideshow */}
      <div className="relative w-full h-full">
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          className="w-full h-full object-cover rounded-md object-top" // Adjusted to focus on the top of the image
        />
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Slideshow;
