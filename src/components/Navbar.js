import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [dropdown, setDropdown] = useState(null); // Active dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav")) {
        setDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header>
      {/* Top Section */}
      <div className="bg-white flex justify-between items-center py-5 px-2 shadow-md">
        <div className="absolute top-0 left-0 w-full bg-[#BA0021] text-white flex items-center justify-center">
          <div className="overflow-hidden w-full">
            <div
              className="whitespace-nowrap text-lg p-2"
              style={{
                animation: "marquee 15s linear infinite",
              }}
            >
              Our Eyes Have Seen Your Salvation
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative" style={{ backgroundColor: "#005A9C" }}>
        <div className="flex justify-between items-center px-5 py-3 md:justify-center">
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 items-center text-white">
            <li>
              <Link to="/" className="hover:text-red-700">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="hover:text-red-200 focus:outline-none"
              >
                About <span className="ml-2">▼</span>
              </button>
              {dropdown === "about" && (
                <div
                  className="absolute top-full left-0 bg-white text-black mt-2 shadow-md rounded-md w-max z-50"
                  onClick={(e) => e.stopPropagation()} // Prevents closing on click inside
                >
                  <ul>
                    <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/about/AboutPage">Adult Guilds</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/about/YouthGuilds">Youth Guilds</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/about/MainGov">Main Governing Committees</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/about/FamilyApo">
                        Family Apostelete Committee
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("events")}
                className="hover:text-red-200 focus:outline-none"
              >
                Events <span className="ml-2">▼</span>
              </button>
              {dropdown === "events" && (
                <div
                  className="absolute top-full left-0 bg-white text-black mt-2 shadow-md rounded-md w-max z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul>
                    <li className="px-4 py-2 hover:bg-red-100">
                      <Link to="/events">Upcoming Events</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-100">
                      <Link to="/events/SpecialEvents">
                        Special Events Committee
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-100">
                      <Link to="/events/SocCom">Groups and Other Committees</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown("contact")}
                className="hover:text-red-200 focus:outline-none"
              >
                Contact <span className="ml-2">▼</span>
              </button>
              {dropdown === "contact" && (
                <div
                  className="absolute top-full left-0 bg-white text-black mt-2 shadow-md rounded-md w-max z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul>
                    <li className="px-4 py-2 hover:bg-red-100">
                      <Link to="/contact/ContactPage">Contacts</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-100">
                      <Link to="/contact/Sections">Sections</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-10 left-0 w-full bg-[#005A9C] text-white shadow-lg z-40 md:hidden">
            <ul className="flex flex-col space-y-6 p-6 text-lg">
              <li>
                <Link to="/" onClick={closeMenu} className="hover:text-red-700">
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex justify-between w-full hover:text-red-500"
                >
                  About <span>▼</span>
                </button>
                {dropdown === "about" && (
                  <ul className="mt-2 pl-4 space-y-2">
                    <li>
                      <Link to="/about/AboutPage" onClick={closeMenu}>
                        Adult Guilds
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/YouthGuilds" onClick={closeMenu}>
                        Youth Guilds
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/MainGov" onClick={closeMenu}>
                        Main Governing Committees
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/FamilyApo" onClick={closeMenu}>
                        Family Apostelete Committee
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("events")}
                  className="flex justify-between w-full hover:text-red-500"
                >
                  Events <span>▼</span>
                </button>
                {dropdown === "events" && (
                  <ul className="mt-2 pl-4 space-y-2">
                    <li>
                      <Link to="/events" onClick={closeMenu}>
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <Link to="/events/SpecialEvents" onClick={closeMenu}>
                        Special Events Committee
                      </Link>
                    </li>
                    <li>
                      <Link to="/events/SocCom" onClick={closeMenu}>
                        Groups and Other Committees
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("contact")}
                  className="flex justify-between w-full hover:text-red-500"
                >
                  Contact <span>▼</span>
                </button>
                {dropdown === "contact" && (
                  <ul className="mt-2 pl-4 space-y-2">
                    <li>
                      <Link to="/contact/ContactPage" onClick={closeMenu}>
                        Contacts
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact/Sections" onClick={closeMenu}>
                        Sections
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
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
    </header>
  );
};

export default Navbar;
