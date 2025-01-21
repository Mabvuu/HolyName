// Home.js
import React from 'react';
import Slideshow from "../pages/slideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import Collage from '../pages/Collage';
import Form from '../pages/Form';



const Home = () => {
  return (
    <div>
      <Slideshow />
      <section id="connected" className="bg-[#005A9C] text-white py-6"> {/* Reduced padding */}
  <div className="text-center">
    <h2 className="text-3xl font-extrabold mb-4 font-cinzel">Stay Connected</h2>
    <div className="flex justify-center items-center gap-4">
      <button className="text-2xl hover:scale-110 transition-transform hover:text-red-500">
        <FontAwesomeIcon icon={faFacebook} />
      </button>
      <button className="text-2xl hover:scale-110 transition-transform hover:text-red-500">
        <FontAwesomeIcon icon={faTwitter} />
      </button>
      <button className="text-2xl hover:scale-110 transition-transform hover:text-red-500">
        <FontAwesomeIcon icon={faInstagram} />
      </button>
      <button className="text-2xl hover:scale-110 transition-transform hover:text-red-500">
        <FontAwesomeIcon icon={faTiktok} />
      </button>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 text-center mt-8"> {/* Adjusted grid */}
    <div className="mass-times flex flex-col items-center justify-center text-center">
      <img src="/images/logo.jpg" alt="Mass Times" className="h-[300px] w-auto mb-4 rounded-lg" /> {/* Image centered */}
      <h3 className="text-xl font-bold">Mass Times</h3>
      <p>Join us for daily and weekend services.</p>
    </div>

    <div className="live-stream-buttons flex flex-col gap-8 text-center max-w-[400px] mx-auto pt-12">
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
<Link to="/events">
  <button className="btn bg-white text-[#005A9C] border border-[#005A9C] py-2 px-6 rounded-lg text-lg hover:bg-[#005A9C] hover:text-white hover:border-red-500 transition-all">
    Watch Past Sermons
  </button>
</Link>
    </div>

    <div className="christmas-giving flex flex-col items-center justify-center text-center">
      <img src="/images/5.jpg" alt="Christmas Giving" className="h-[300px] w-auto mb-4 rounded-lg" /> {/* Image centered */}
      <h3 className="text-xl font-bold">Christmas Giving</h3>
      <p>Spread joy this season by supporting our giving initiative.</p>
    </div>
  </div>
</section>


      <section className="text-center py-8 bg-white">
      <div className="bg-[#BA0021] text-white p-6 rounded-lg shadow-lg text-center w-full">
  <p className="text-lg sm:text-xl font-light">
    Let every Youth who wishes To Suffer, Love, and Save Souls for Christ's sake come and Join The Most Sacred Heart Of Jesus Christ.
  </p>
</div>


    


<div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
  {/* Item 1 */}
  <div className="text-center max-w-[350px] flex flex-col items-center">
    <img
      src="/images/12.jpg"
      alt="Parish Priest"
      className="w-full h-[350px] object-cover rounded-lg shadow-lg"
    />
    <p className="mt-4 text-base text-gray-700">
      Parish Priest FR J.Ndhlalambi and Assistant Parish Priest FR. G.F.P Kingisoni
    </p>
  </div>

  {/* Item 2 */}
  <div className="text-center max-w-[350px] flex flex-col items-center">
    <img
      src="/images/16.jpg"
      alt="Assistant Parish Priest"
      className="w-full h-[350px] object-cover rounded-lg shadow-lg"
    />
    <p className="mt-4 text-base text-gray-700">
      Assistant Parish Priest during the event
    </p>
  </div>
</div>



      </section>

      <section className="py-8 bg-white text-center border border-gray-300 rounded-lg shadow-lg max-w-[1200px] mx-auto my-8 sm:py-6 sm:text-sm sm:max-w-[90%]">
  <h2 className="text-2xl mb-6 text-[#005A9C] sm:text-xl sm:mb-4">NEWS</h2>
  <div className="flex flex-col gap-8 max-w-[800px] mx-auto sm:gap-4">
    <div className="text-left border-b-2 border-[#005A9C] pb-4 sm:pb-2">
      <h3 className="text-xl text-[#005A9C] mb-2 sm:text-lg sm:mb-1">Retired Religious Donations</h3>
      <p className="text-base text-gray-600 leading-relaxed sm:text-sm sm:leading-normal">
        The Retirement Fund for Religious collection will take place at all Masses on the weekend of January 11-12, 2024. Support those who have given a lifetime. Women and men religious have dedicated their lives to service - praying, teaching, and caring for those in need – usually for little to no pay. Today, their religious communities do not have enough retirement savings. Your donation provides for the essential care, medicine, and daily needs of thousands of senior women and men religious. This year Salesian Sister Maryann will speak at all the Masses. Thanks for your care and concern for those who have served the Church so faithfully. You can also donate online by clicking here.
      </p>
    </div>

    <div className="text-left border-b-2 border-[#005A9C] pb-4 sm:pb-2">
      <h3 className="text-xl text-[#005A9C] mb-2 sm:text-lg sm:mb-1">Christmas Giving</h3>
      <p className="text-base text-gray-600 sm:text-sm">Thank you for your generosity.</p>
    </div>

    <div className="text-left border-b-2 border-[#005A9C] pb-4 sm:pb-2">
      <h3 className="text-xl text-[#005A9C] mb-2 sm:text-lg sm:mb-1">Jubilee Year of Hope 2025</h3>
      <p className="text-base text-gray-600 leading-relaxed sm:text-sm sm:leading-normal">
        Pope Francis warmly invites everyone to join in the special Jubilee “Year of Hope,” which begins in Rome on December 24, 2024, and in every diocese worldwide on December 29, the Feast of the Holy Family. Locally, on December 29, in the spirit of the Jubilee and to receive the plenary Jubilee indulgence, Bishop Kevin Sweeney will lead a short pilgrimage. The journey will start at 3pm from the Fr. English Center to the Cathedral of St. John the Baptist, followed by the Opening Jubilee Mass. Click here for more details!
      </p>
    </div>

    <button className="inline-block px-6 py-3 bg-[#005A9C] text-white rounded-md text-lg transition-all hover:bg-[#004b7c] transform hover:translate-y-1 sm:px-4 sm:py-2 sm:text-sm">
      Read More
    </button>
  </div>
</section>

<section>
  <Collage />
</section>


      <section className="bg-gray-100 py-12 font-sans">
  <div className="max-w-screen-xl mx-auto flex flex-col gap-8 md:flex-row justify-between">
    {/* Contact Form (Left) */}
    <div className="w-full bg-white p-8 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-center text-3xl mb-6 text-[#005A9C] font-bold sm:text-2xl">Contact Us</h2>
      <Form />
    </div>

    {/* Contact Details (Right) */}
    <div className="p-8 bg-[#BA0021] text-white rounded-xl shadow-2xl max-w-md mx-auto my-8 border-4 border-white bg-gradient-to-r from-[#BA0021] to-[#FF5C8D]">
    <div className="bg-gradient-to-r from-white to-[#005A9C] py-6 mt-12 text-center border-t border-gray-100">
    <p className="text-xl font-serif text-gray-700">
      "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you a hope and a future." — Jeremiah 29:11
    </p>
  </div>
  <div className="bg-gradient-to-r from-white to-[#005A9C] py-6 mt-12 text-center border-t border-gray-300">
    <p className="text-xl font-serif text-gray-800">
      Hail Mary, full of grace,<br />
      The Lord is with thee;<br />
      Blessed art thou among women,<br />
      And blessed is the fruit of thy womb, Jesus.<br />
      Holy Mary, Mother of God,<br />
      Pray for us sinners,<br />
      Now and at the hour of our death. Amen.
    </p>
  </div>
</div>


  </div>
</section>


     
    </div>
  );
}

export default Home;
