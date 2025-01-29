import React from "react"; // Removed the extra comma

const Gallery = () => {
  return (
    <div className="gallery-container max-w-[1200px] mx-auto py-8 px-4">
      <div className="flex justify-center py-6">
        <figure className="w-full max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg">
          <img
            src={process.env.PUBLIC_URL + "/images/15.jpg"} // Adjust with your image path
            alt="Sacred Heart Guild"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <figcaption className="text-center mt-2 text-m text-gray-600">
          The Bishop of the Archdiocese of Harare Rev Robert Christopher Ndlovu, Fr J Ndhlalambi, Fr G Jingisoni and the

Mass Servers
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
