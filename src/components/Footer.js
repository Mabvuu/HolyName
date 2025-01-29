import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const [isAdultDropdownOpen, setIsAdultDropdownOpen] = useState(false);
  const [isYouthDropdownOpen, setIsYouthDropdownOpen] = useState(false);
  const [isOthersDropdownOpen, setIsOthersDropdownOpen] = useState(false);
  const [isSectionsDropdownOpen, setIsSectionsDropdownOpen] = useState(false);
  const [isChoirDropdownOpen, setIsChoirDropdownOpen] = useState(false);

  return (
    <footer className="w-full text-white py-8 bg-gradient-to-r from-[#BA0021] to-[#005A9C]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16">
        {/* Navigation Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 order-1 md:order-none">
          {/* About Us Section */}
          <div className="flex flex-col space-y-2 text-left">
  <span className="font-normal text-xl underline">About Us</span>
  
  {/* Adult Guilds */}
  <button
  onClick={() => setIsAdultDropdownOpen(!isAdultDropdownOpen)}
  className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left"
>
  Adult Guilds
</button>

  {isAdultDropdownOpen && (
    <div className="flex flex-col space-y-1">
      <Link to="/about/AboutPage/chemwoyo" className="hover:text-[#BA0021] hover:bg-white">
        MOST SACRED HEART OF JESUS GUILD 
      </Link>
      <Link to="/about/AboutPage/chaMariya" className="hover:text-[#BA0021] hover:bg-white">
        Mary Queen of Heaven Guild
      </Link>
    </div>
  )}

  {/* Youth Guilds */}
  <button
    onClick={() => setIsYouthDropdownOpen(!isYouthDropdownOpen)}
   className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left"
  >
    Youth Guilds
  </button>
  {isYouthDropdownOpen && (
    <div className="flex flex-col space-y-1">
      <Link to="/about/Musande" className="hover:text-[#BA0021] hover:bg-white">
        The Sacred Heart of Jesus Christ
      </Link>
      <Link to="/about/agnesandalois" className="hover:text-[#BA0021] hover:bg-white">
        Agnes and Alois Guild
      </Link>
    </div>
  )}

  {/* Sections */}
  <button
    onClick={() => setIsSectionsDropdownOpen(!isSectionsDropdownOpen)}
    className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left"
  >
    Sections
  </button>
  {isSectionsDropdownOpen && (
    <div className="flex flex-col space-y-1">
      <Link to="/sections/parachuteregime" className="hover:text-[#BA0021] hover:bg-white">Parachute Regiment</Link>
      <Link to="/sections/avondalew" className="hover:text-[#BA0021] hover:bg-white">Avondale West</Link>
      <Link to="/sections/bloom" className="hover:text-[#BA0021] hover:bg-white">Bloomingdale</Link>
      <Link to="/sections/meyrick" className="hover:text-[#BA0021] hover:bg-white">Meyrick Park</Link>
      <Link to="/sections/costwold" className="hover:text-[#BA0021] hover:bg-white">Cotswold Hills</Link>
      <Link to="/sections/malbereign" className="hover:text-[#BA0021] hover:bg-white">Malbereign Central</Link>
      <Link to="/sections/haig" className="hover:text-[#BA0021] hover:bg-white">Haig Park</Link>
    </div>
  )}

  {/* Choir */}
  <button
    onClick={() => setIsChoirDropdownOpen(!isChoirDropdownOpen)}
    className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left"
  >
    Choir
  </button>
  {isChoirDropdownOpen && (
    <div className="flex flex-col space-y-1">
      <Link to="/about/choir" className="hover:text-[#BA0021] hover:bg-white">English Choir</Link>
      <Link to="/about/choirshona" className="hover:text-[#BA0021] hover:bg-white">Shona Choir</Link>
    </div>
  )}

  {/* Others */}
  <button
    onClick={() => setIsOthersDropdownOpen(!isOthersDropdownOpen)}
    className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left"
  >
    Support Teams
  </button>
  {isOthersDropdownOpen && (
    <div className="flex flex-col space-y-1">
      <Link to="/about/soccom" className="hover:text-[#BA0021] hover:bg-white">SOCCOM</Link>
      <Link to="/about/catechisis" className="hover:text-[#BA0021] hover:bg-white">Holy Name Catechesis</Link>
      <Link to="/about/ccr" className="hover:text-[#BA0021] hover:bg-white">Catholic Charismatic Renewal Movement (CCR)</Link>
    </div>
  )}

            <Link to="/about/MainGov" className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left">
              Main Governing Committee
            </Link>
            <Link to="/about/FamilyApo" className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left">
              Family Apostolate Committee
            </Link>
            <Link to="/events/SpecialEvents" className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left">
              Special Events Committee
            </Link>
          </div>

          {/* Events Section */}
          <div className="flex flex-col space-y-1">
  <span className="font-normal text-xl underline">Events</span>
  <Link to="/events" className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1text-left">
    Upcoming Events
  </Link>
  <Link to="/events/vatican" className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1 text-left">To Vatican with Love</Link>
</div>


          {/* Contact Section */}
          <div className="flex flex-col space-y-2">
            <span className="font-normal text-xl underline">Contact</span>
            <Link to="/contact/ContactPage" className="hover:text-[#005A9C] border-b-2 border-transparent hover:border-white hover:pb-1">
              Get in Touch
            </Link>
           
          </div>

          {/* Home Button */}
          <div className="flex justify-center items-center space-x-6 py-4">
  <Link to="/" className="text-2xl font-semibold hover:text-[#005A9C] uppercase  border-b-2 border-transparent hover:border-white hover:pb-1">
    Home
  </Link>
  <Link to="/gallery" className="text-2xl font-semibold hover:text-[#005A9C] uppercase border-b-2 border-transparent hover:border-white hover:pb-1">

    Gallery
  </Link>
</div>

        </div>

        {/* Email Section */}
        <div className="flex flex-col space-y-6 order-2 md:order-none">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.jpg"}
              alt="Logo"
              className="w-30 h-20 rounded-full"
            />
          </div>

          {/* Email Insertion with Send Button */}
          <div className="flex flex-col items-center">
  <a
    href="mailto:catholicchurchholyname@gmail.com"
    className="mt-2 p-2 bg-gradient-to-r from-blue-400 to-red-800 rounded-lg shadow-md text-white transition-colors"
  >
    Contact Us via Email
  </a>
</div>


          {/* Follow Us (Social Media Links) */}
          <div className="flex flex-col items-center space-y-2">
            <span className="font-semibold">Follow Us</span>
            <button
              className="text-2xl hover:scale-110 transition-transform hover:text-red-500"
              onClick={() => window.open('https://www.facebook.com/holynamezw', '_blank')}
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </button>
            <button
              className="text-2xl hover:scale-110 transition-transform hover:text-red-500"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/holy_name.parish?igsh=MTFubWdhb2RzNWo1NA==',
                  '_blank'
                )
              }
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </button>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-sm">
            <p>&copy; 2025 Holy Name Catholic Church. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
