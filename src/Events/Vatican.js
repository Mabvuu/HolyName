import React from 'react';

const VaticanPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#BA0021] to-[#005A9C] py-10 px-5 flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-10 text-center transform transition-all hover:scale-105">
      <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            To Vatican With Love Pilgrimage
          </h2>
          <p className="mb-4">
            Special committee formulated to organize the upcoming pilgrimage. It
            comprises members from the Ministry of Matrimony and Fellow Parishioners.
          </p>
        
        </section>
        <p className="text-xl text-gray-800 font-semibold mb-4">
          We are preparing something special for you!
        </p>
        <p className="text-lg text-gray-600 italic">
          Information to be shared soon. Stay tuned!
        </p>
        <div className="mt-6">
          <div className="bg-[#005A9C] text-white text-lg py-2 px-6 rounded-full inline-block shadow-lg hover:bg-[#003e6b] transition-colors cursor-pointer">
            Stay Tuned
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaticanPage;
