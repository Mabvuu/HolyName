import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-white py-8 bg-gradient-to-r from-[#BA0021] to-[#005A9C]">

     <div className="grid grid-cols-2 gap-8 px-16">
        {/* Left Side */}
        <div className="flex flex-col space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <img src="/images/logo.jpg" alt="Logo" className="w-30 h-20 rounded-full" />
          </div>

          {/* Email Insertion with Send Button */}
          <div className="flex flex-col items-center">
            <label className="text-sm">Write an email:</label>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 p-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
              />
              <button
                type="submit"
                className="mt-2 p-2 bg-[#005A9C] text-white rounded-r-md hover:bg-[#003e6b] transition-colors"
              >
                Send
              </button>
            </div>
          </div>

          {/* Follow Us (Social Media Links) */}
          <div className="flex flex-col items-center space-y-2">
            <span className="font-semibold">Follow Us</span>
            <a
              href="https://facebook.com"
              className="text-lg hover:text-[#005A9C] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              className="text-lg hover:text-[#005A9C] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-sm">
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-8">
          {/* About Us Section */}
          <div className="flex flex-col text-m space-y-2">
          <span className="font-normal text-xl underline">About Us</span>

            <a href="/about/AboutPage" className="text-m hover:text-[#005A9C] transition-colors">
              Adult Guilds
            </a>
           
            <a href="/about/YouthGuilds" className="text-m hover:text-[#005A9C] transition-colors">
              Youth Guilds
            </a>
            <a href="/about/MainGov" className="text-m hover:text-[#005A9C] transition-colors">
              Main Governing Committees
            </a>
            <a href="/about/FamilyApo" className="text-m hover:text-[#005A9C] transition-colors">
            Family Apostelete Committee
            </a>
          </div>

          {/* Events Section */}
          <div className="flex flex-col space-y-2">
          <span className="font-normal text-xl underline">Events</span>

            <a href="/events" className="text-m hover:text-[#005A9C] transition-colors">
              Upcoming Events
            </a>
            <a href="/events/SpecialEvents" className="text-m hover:text-[#005A9C] transition-colors">
             Special Events Committee
            </a>
            <a href="/events/SocCom" className="text-m hover:text-[#005A9C] transition-colors">
             Groups and Other Committees
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-2">
          <span className="font-normal text-xl underline">Contact</span>

            <a href="/contact/ContactPage" className="text-m hover:text-[#005A9C] transition-colors">
              Get in Touch
            </a>
            <a href="/contact/Sections" className="text-m hover:text-[#005A9C] transition-colors">
              Sections
            </a>
          </div>

          {/* Home Button */}
          <div className="flex justify-center items-center">
            <a
              href="/"
              className="text-2xl font-semibold hover:text-[#005A9C] transition-colors"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
