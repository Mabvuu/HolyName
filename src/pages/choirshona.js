import React from "react";

const ChoirShona = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-[#005A9C] text-white text-center py-16 overflow-hidden">
        <div className="animate-marquee">
          <h1 className="text-3xl font-bold uppercase text-white font-extralight mb-4">Shona Choir</h1>
          <p className="text-lg max-w-1xl mx-auto">
            Learn about our history, mission, goals, and the intention behind everything we do.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <section className="max-w-2xl mx-auto px-6 py-12 space-y-16">


        {/* History Section */}
        <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white p-6 rounded-lg shadow-md text-center max-w-m mx-auto">
  <h2 className="text-3xl font-semibold mb-2">More Information to Come</h2>
  <p className="text-md">We’re working hard to bring you more! Stay tuned!</p>
</div>

       
      </section>

      
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default ChoirShona;
