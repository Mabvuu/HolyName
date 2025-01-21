import React from 'react';

const Collage = () => {
  return (
    <div className="py-10 px-5">
      <h2 className="text-2xl font-bold text-center text-[#BA0021] mb-6">Holy Name Family</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {/* Image 1 */}
        <div className="w-full h-72">
          <img src="/images/10.jpg" alt=" 1" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Image 2 */}
        <div className="w-full h-72">
          <img src="/images/11.jpg" alt=" 2" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Image 3 */}
        <div className="w-full h-72">
          <img src="/images/9.jpg" alt="3" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Image 4 */}
        <div className="w-full h-72">
          <img src="/images/8.jpg" alt="4" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Image 5 */}
        <div className="w-full h-72">
          <img src="/images/13.jpg" alt="5" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Image 6 */}
        <div className="w-full h-72">
          <img src="/images/15.jpg" alt="6" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Collage;
