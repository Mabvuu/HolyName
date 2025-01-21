import React from "react";

const MainGov = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-[#005A9C] text-white text-center py-16 overflow-hidden">
        <div className="animate-marquee">
          <h1 className="text-3xl font-bold mb-4">Main Governing Committee</h1>
          <p className="text-lg max-w-1xl mx-auto">
            Learn about our history, mission, goals, and the intention behind everything we do.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Image */}
        <div className="relative">
          <img
            src="/images/3.jpg"
            alt="Team working together"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* History Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#005A9C]">Our History</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our journey began over a decade ago, driven by a passion to make a difference.
          </p>
        </div>

        {/* Goals Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#005A9C]">Our Goals</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We strive to create innovative solutions that empower individuals and communities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#005A9C]">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to bring positive change by focusing on integrity, excellence, and collaboration.
          </p>
        </div>

        {/* Intention Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#005A9C]">Our Intention</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The intention behind our work is simple: to inspire, innovate, and make a lasting difference.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#005A9C] text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Your Organization. All Rights Reserved.</p>
      </footer>

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

export default MainGov;
