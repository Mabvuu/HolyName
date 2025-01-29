import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [dropdown, setDropdown] = useState(null); 
  const [subDropdown, setSubDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
    setSubDropdown(null);
  };
  const toggleSubDropdown = (submenu) => {
    setSubDropdown(subDropdown === submenu ? null : submenu);
  };


  const closeMenu = () => {
    setIsOpen(false);
    setDropdown(null);
    setSubDropdown(null);
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
    <header className="bg-gradient-to-r from-[#BA0021] to-[#005A9C]">
      {/* Top Section */}
      
      <div className="bg-white flex justify-between items-center py-5 px-2 shadow-md">
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#BA0021] to-[#005A9C] text-white flex items-center justify-center">
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
      <nav className="relative bg-gradient-to-r from-[#BA0021] to-[#005A9C]">
        <div className="flex justify-between items-center px-5 py-3 md:justify-center">
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="ml-auto md:hidden focus:outline-none text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
  className="hover:text-red-200 "
>
  About <span className="ml-2">▼</span>
</button>
              {dropdown === "about" && (
                <div
                  className="absolute top-full left-0 bg-white text-black mt-2 shadow-md rounded-md w-max z-50"
                  onClick={(e) => e.stopPropagation()} // Prevents closing on click inside
                >
                  <ul>
                    <li
                      className="px-4 py-2 hover:bg-red-400 relative"
                      onMouseEnter={() => setSubDropdown("adultGuilds")}
                      onMouseLeave={() => setSubDropdown(null)}
                    >
                      <span className="flex justify-between items-center">
                        Adult Guilds <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

                      </span>
                      {subDropdown === "adultGuilds" && (
                        <div className="absolute top-0 left-full bg-white mt-2 shadow-lg rounded-md w-max">
                          <ul>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/about/AboutPage/chemwoyo">MOST SACRED HEART OF JESUS GUILD </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/about/AboutPage/chaMariya">  Mary Queen of Heaven Guild</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-red-400 relative"
                      onMouseEnter={() => setSubDropdown("youthGuilds")}
                      onMouseLeave={() => setSubDropdown(null)}
                    >
                      <span className="flex justify-between items-center ">
                        Youth Guilds <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
                      </span>
                      {subDropdown === "youthGuilds" && (
                        <div className="absolute top-0 left-full bg-white mt-2 shadow-lg rounded-md w-max">
                          <ul>
                            <li className="px-4 py-2 hover:bg-red-400">
                            <Link to="/about/Musande">The Sacred Heart of Jesus Christ</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/about/agnesandalois">Agnes and Alois Guild</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-red-400 relative"
                      onMouseEnter={() => setSubDropdown("sections")}
                      onMouseLeave={() => setSubDropdown(null)}
                    >
                      <span className="flex justify-between items-center ">
                        Sections <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
                      </span>
                      {subDropdown === "sections" && (
                        <div className="absolute top-0 left-full bg-white mt-2 shadow-lg rounded-md w-max">
                          <ul>
                            <li className="px-4 py-2 hover:bg-red-400">
                            <Link to="/sections/parachuteregime">Parachute Regiment</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/avondalew">Avondale West</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/bloom">Bloomingdale</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/meyrick">Meyrick Park</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/costwold">Cotswold Hills</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/malbereign">Mabelreign Central</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/haig">Haig Park</Link>
                            </li>
                           
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-red-400 relative"
                      onMouseEnter={() => setSubDropdown("choir")}
                      onMouseLeave={() => setSubDropdown(null)}
                    >
                      <span className="flex justify-between items-center ">
                        CHOIR <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
                      </span>
                      {subDropdown === "choir" && (
                        <div className="absolute top-0 left-full bg-white mt-2 shadow-lg rounded-md w-max">
                          <ul>
                          <li className="px-4 py-2 hover:bg-red-400">
                          <Link to="/about/choir">English Choir</Link>
                          </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/about/choirshona">Shona Choir</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/about/MainGov">Main Governing Committees</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/about/FamilyApo">
                      Family Apostolate Committee
                      </Link>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-red-400 relative"
                      onMouseEnter={() => setSubDropdown("others")}
                      onMouseLeave={() => setSubDropdown(null)}
                    >
                      <span className="flex justify-between items-center">
                      Support Teams <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
                      </span>
                      {subDropdown === "others" && (
                        <div className="absolute top-0 left-full bg-white mt-2 shadow-lg rounded-md w-max">
                          <ul>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/about/soccom">SOCCOM</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/about/catechisis">Holy Name Catechesis</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                          <Link to="/about/ccr">CATHOLIC CHARISMATIC RENEWAL MOVEMENT (CCR)</Link>
                          </li>
                          
                          <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/events/SpecialEvents">
                        Special Events Committee
                      </Link>
                    </li>
                          </ul>
                        </div>
                      )}
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
                      <Link to="/events/vatican">To Vatican with Love</Link>
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
                    
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to="/gallery"  className="mt-2 p-2 bg-gradient-to-r from-blue-400 to-red-800 rounded-lg shadow-md text-white transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-10 right-0 w-full bg-[#005A9C] text-white shadow-lg z-40 md:hidden">
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
                      <button
                        onClick={() => toggleSubDropdown("adultGuilds")}
                        className="flex justify-between w-full hover:text-red-500"
                      >
                        Adult Guilds <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
                      </button>
                      {subDropdown === "adultGuilds" && (
                        <ul className="mt-2 pl-6 space-y-2">
                          <li className="px-4 py-2 hover:bg-red-400">
                            <Link to="/about/AboutPage/chemwoyo" onClick={closeMenu}>
                            MOST SACRED HEART OF JESUS GUILD 
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-red-400">
                            <Link to="/about/AboutPage/chaMariya" onClick={closeMenu}>
                            Mary Queen of Heaven Guild
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={() => toggleSubDropdown("youthGuilds")}
                        className="flex justify-between w-full hover:text-red-500"
                      >
                        Youth Guilds <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
                      </button>
                      {subDropdown === "youthGuilds" && (
                        <ul className="mt-2 pl-6 space-y-2">
                          <li className="px-4 py-2 hover:bg-red-400">
                          <Link to="/about/Musande">The Sacred Heart of Jesus Christ</Link>
                          
                          </li>
                          <li className="px-4 py-2 hover:bg-red-400">
                          <Link to="/about/agnesandalois">Agnes and Alois Guild</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={() => toggleSubDropdown("sections")}
                        className="flex justify-between w-full hover:text-red-500"
                      >
                        Sections <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
                      </button>
                      {subDropdown === "sections" && (
                        <ul className="mt-2 pl-6 space-y-2">
                          <li className="px-4 py-2 hover:bg-red-400">
                            <Link to="/sections/parachuteregime">Parachute Regiment</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/avondalew">Avondale West</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/bloom">Bloomingdale</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/meyrick">Meyrick Park</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/costwold">Cotswold Hills</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/malbereign">Mabelreign Central</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-red-400">
                              <Link to="/sections/haig">Haig Park</Link>
                              </li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/about/MainGov" onClick={closeMenu}>
                        Main Governing Committees
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/about/FamilyApo" onClick={closeMenu}>
                      Family Apostolate Committee
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => toggleSubDropdown("choir")}
                        className="flex justify-between w-full hover:text-red-500"
                      >
                        Choir <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
                      </button>
                      {subDropdown === "choir" && (
                        <ul className="mt-2 pl-6 space-y-2">
                          <li className="px-4 py-2 hover:bg-red-400">
                          <Link to="/about/choir"> English Choir</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-red-400">
                          <Link to="/about/choirshona">Shona Choir</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={() => toggleSubDropdown("others")}
                        className="flex justify-between w-full hover:text-red-500"
                      >
                         Support Teams <button
        className="p-2 bg-[#BA0021] text-white rounded-1/2 hover:bg-[#85001A] transition-colors"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
                      </button>
                      {subDropdown === "others" && (
                        <ul className="mt-2 pl-6 space-y-2">
                          <li className="px-4 py-2 hover:bg-red-200">
                          <Link to="/about/soccom">SOCCOM</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-red-400">
                            <Link to="/about/catechisis" onClick={closeMenu}>
                            Holy Name Catechesis
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-red-400">
                          <Link to="/about/ccr">CATHOLIC CHARISMATIC RENEWAL MOVEMENT (CCR)</Link>
                          </li>
                          
                          <li className="px-4 py-2 hover:bg-red-400">
                      <Link to="/events/SpecialEvents">
                        Special Events Committee
                      </Link>
                    </li>
                        </ul>
                      )}
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
                      <li className="px-4 py-2 hover:bg-red-100">
                      <Link to="/events/vatican">To Vatican with Love</Link>
                    </li>
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
                 
                  </ul>
                )}
              </li>
              <li>
              <Link to="/gallery"  className="mt-2 p-2 bg-gradient-to-r from-blue-400 to-red-800 rounded-lg shadow-md text-white transition-colors">
                Gallery
              </Link>
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
