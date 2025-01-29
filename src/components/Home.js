import React from 'react';
import Slideshow from "../pages/slideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';

const Home = () => {
  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal scrolling */}
      <Slideshow />
      <section id="connected" className="bg-[#005A9C] text-white py-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4 font-cinzel">Stay Connected</h2>
          <div className="flex justify-center items-center gap-4">
            <button
              className="text-2xl hover:scale-110 transition-transform hover:text-red-500"
              onClick={() => window.open('https://www.facebook.com/holynamezw', '_blank')}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </button>

            <button
              className="text-2xl hover:scale-110 transition-transform hover:text-red-500"
              onClick={() => window.open('https://www.instagram.com/holy_name.parish?igsh=MTFubWdhb2RzNWo1NA==', '_blank')}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 text-center mt-8">
  <div className="mass-times flex flex-col items-center justify-center text-center  p-6 ">
    
    <h3 className="text-2xl font-extrabold text-white-800 mb-4">
      Mass Times
    </h3>
    <p className="text-lg font-medium text-white mb-6">
      Join us for daily and weekend services.
    </p>
    <div className="bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg shadow-md p-4 w-full">
      <h4 className="text-xl font-bold text-blue-600 mb-2">
        Weekday Masses
      </h4>
      <p className="text-gray-800 mb-4">Tuesday to Friday at 6:30 AM</p>
      <h4 className="text-xl font-bold text-blue-600 mb-2">
        Saturday Schedule
      </h4>
      <ul className="text-gray-900 mb-4 list-disc list-inside">
        <li>Adoration at 7:00 AM</li>
        <li>Mass at 8:00 AM</li>
      </ul>
      <h4 className="text-xl font-bold text-blue-600 mb-2">
        Sunday Masses
      </h4>
      <ul className="text-gray-800 list-disc list-inside">
        <li>English Mass at 7:30 AM</li>
        <li>Shona Mass at 10:00 AM</li>
      </ul>
    </div>
  </div>



          <div className="live-stream-buttons flex flex-col gap-8 text-center max-w-[400px] mx-auto pt-12">

          <img
      src={process.env.PUBLIC_URL + "/images/logo.jpg"}
      alt="Mass Times"
      className="h-[300px] w-auto mb-6 rounded-lg shadow-md"
    />
            <Link to="/events">
              <button className="btn bg-white text-[#005A9C] border border-[#005A9C] py-2 px-6 rounded-lg text-lg hover:bg-[#005A9C] hover:text-white hover:border-red-500 transition-all">
                View Events
              </button>
            </Link>

            <Link to="/contact/ContactPage">
              <button className="btn bg-white text-[#005A9C] border border-[#005A9C] py-2 px-6 rounded-lg text-lg hover:bg-[#005A9C] hover:text-white hover:border-red-500 transition-all">
                Reach Out To Us
              </button>
            </Link>
        
          </div>

          <div className="christmas-giving flex flex-col items-center justify-center text-center">
            <img src={process.env.PUBLIC_URL + '/images/112.jpg'} alt="Christmas Giving" className="h-[300px] w-auto mb-4 rounded-lg" />
            <div className="bg-gradient-to-r from-blue-400 to-blue-100 rounded-lg shadow-md p-6 w-[90%] max-w-md mx-auto h-auto">
  <h4 className="text-lg font-bold text-blue-600 mb-4">
    Every Friday of the month there is adoration from 7:00 AM, Benediction at 5:30 PM, followed by Mass at 6:00 PM.
  </h4>
  <h5 className="text-gray-700">
    Reconciliation every second Saturday of the month after the Mass at 8:00 AM.
  </h5>
</div>

          </div>
        </div>
      </section>

      <section className="text-center py-8 bg-white">
        <div className="bg-[#BA0021] text-white p-6 rounded-lg shadow-lg text-center w-full">
          <p className="text-lg sm:text-xl font-light">
          “But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach
          you all things and will remind you of everything I have said to you.”
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
          {/* Item 1 */}
          <div className="flex justify-center py-6">
  <figure className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
    <img
      src={process.env.PUBLIC_URL + "/images/12.jpg"} // Adjust with your image path
      alt="Sacred Heart Guild"
      className="w-full h-auto rounded-lg shadow-lg"
    />
    <figcaption className="text-center mt-2 text-m text-gray-600">
    Parish Priest FR J.Ndhlalambi and Assistant Parish Priest FR. G.F.P Jingisoni
    </figcaption>
  </figure>
</div>

          {/* Item 2 */}
          <div className="flex justify-center py-6">
  <figure className="w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
    <img
      src={process.env.PUBLIC_URL + "/images/16.jpg"} // Adjust with your image path
      alt="Sacred Heart Guild"
      className="w-full h-auto rounded-lg shadow-lg"
    />
    <figcaption className="text-center mt-2 text-m text-gray-600">
    From left Fr G Jingisoni , The Bishop of the Archdiocese of Harare Rev Robert Christopher Ndlovu and Fr J
Ndhlalambi,
    </figcaption>
  </figure>
</div>
        </div>
      </section>

      <section className="py-8 bg-white text-center border border-gray-300 rounded-lg shadow-lg max-w-[900px] mx-auto my-8 px-4 sm:py-6 sm:text-sm sm:max-w-[95%]">
        <h2 className="text-2xl mb-6 text-[#005A9C] sm:text-xl sm:mb-4">NEWS</h2>
        <div className="flex flex-col gap-8 max-w-[700px] mx-auto sm:gap-4">
          <div className="text-left border-b-2 border-[#005A9C] pb-4 sm:pb-2">
            <h3 className="text-xl text-[#005A9C] mb-2 sm:text-lg sm:mb-1">Retired Religious Donations</h3>
            <p className="text-base text-gray-600 leading-relaxed sm:text-sm sm:leading-normal">
              The Retirement Fund for Religious collection will take place at all Masses on the weekend of January 11-12, 2024. Support those who have given a lifetime...
            </p>
          </div>

          <div className="text-left border-b-2 border-[#005A9C] pb-4 sm:pb-2">
            <h3 className="text-xl text-[#005A9C] mb-2 sm:text-lg sm:mb-1">Christmas Giving</h3>
            <p className="text-base text-gray-600 sm:text-sm">Thank you for your generosity.</p>
          </div>

          <div className="text-left border-b-2 border-[#005A9C] pb-4 sm:pb-2">
            <h3 className="text-xl text-[#005A9C] mb-2 sm:text-lg sm:mb-1">Jubilee Year of Hope 2025</h3>
            <p className="text-base text-gray-600 leading-relaxed sm:text-sm sm:leading-normal">
              Pope Francis warmly invites everyone to join in the special Jubilee “Year of Hope,” which begins in Rome on December 24, 2024...
            </p>
          </div>

          <button className="inline-block px-6 py-3 bg-[#005A9C] text-white rounded-md text-lg transition-all hover:bg-[#004b7c] transform hover:translate-y-1 sm:px-4 sm:py-2 sm:text-sm">
            Read More
          </button>
        </div>
      </section>

      <section>
        <Gallery />
      </section>

      <section className="bg-gray-100 py-12 font-sans">
        <div className="max-w-screen-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-center text-3xl mb-6 text-[#BA0021] font-bold">Contact Us</h2>
          
          {/* Clickable Email */}
          <div className="text-center mb-8">
  <p className="text-lg font-semibold">Send us an email:</p>
  <a
    href="mailto:catholicchurchholyname@gmail.com"
    className="text-2xl font-bold text-[#BA0021] underline hover:text-[#85001A] transition-colors"
  >
    catholicchurchholyname@gmail.com
  </a>
</div>

          
          {/* Scripture Quote */}
          <div className="bg-gray-50 py-6 px-4 rounded-lg text-center border border-gray-400 mb-6">
            <p className="text-lg font-serif text-gray-700">
            We continue to give back all Glory to the HOLY TRINITY for seeing us through these great
years in our endeavours to deepen our relationship with the LORD through living life guided by
the HOLY SPIRIT - John 14:26

            </p>
          </div>

          
        </div>
      </section>
    </div>
  );
}

export default Home;
