import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slideshow = () => {
  const images = [
    '/images/111.jpg',
    '/images/15.jpg',
    '/images/13.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const imagesLength = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagesLength);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesLength]);

  return (
    <div className="relative w-full h-100 sm:h-100 md:h-96 lg:h-[500px] xl:h-[600px]">
      {/* Logo Section - Positioned at the left side and with a bigger size */}
      <div className="absolute top-2 left-2 z-10">
        <Link to="/">
          <img src="/images/logo.jpg" alt="Church Logo" className="w-32 h-auto" />
        </Link>
      </div>

      {/* Slideshow */}
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage}`}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Marquee Text */}
      <div className="absolute top-0 left-0 w-full bg-[#BA0021] text-white flex items-center justify-center">
        <div className="overflow-hidden w-full">
        <div
  className="whitespace-nowrap text-lg p-2 flex justify-between"
  style={{
    animation: 'marquee 16s linear infinite',
  }}
>
  <span className="mx-4">Grateful</span>
  <span className="mx-4">Joyful</span>
  <span className="mx-4">Hopeful</span>
</div>

        </div>
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
