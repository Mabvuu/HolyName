import React, { useState } from "react";

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: process.env.PUBLIC_URL + "/images/16.jpg", alt: "1" },
    { src: process.env.PUBLIC_URL + "/images/22.jpg", alt: "2" },
    { src: process.env.PUBLIC_URL + "/images/11.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/8.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/20.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/21.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/13.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/17.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/19.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/18.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/23.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/9.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/10.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/25.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/15.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/112.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/113.jpg", alt: "I 3" },
    // Add more image paths here
    { src: process.env.PUBLIC_URL + "/images/26.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/27.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/28.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/29.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/30.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/31.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/32.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/33.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/34.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/35.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/36.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/37.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/38.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/39.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/40.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/41.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/42.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/43.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/44.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/45.jpg", alt: "I 3" },
    { src: process.env.PUBLIC_URL + "/images/46.jpg", alt: "I 3" },
    
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#BA0021] to-[#005A9C] py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Church Gallery
        </h1>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-sm shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-xl transition-all duration-300 transform group-hover:scale-105"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">View Full Picture</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full image */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full bg-white p-6 rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Full view"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
