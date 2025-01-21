// SocCom.js
import React from "react";
import { Link } from "react-router-dom";

const SocCom = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-[#005A9C] mb-6">
          Social Communications in the Catholic Church
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          The Catholic Church recognizes the importance of effective communication in spreading the Gospel and promoting the Church's teachings. Our social communications team is committed to using various forms of media to serve others and to spread the Good News of Jesus Christ.
        </p>

        {/* Key Principles */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            Key Principles
          </h2>
          <ul className="list-decimal list-inside space-y-3 text-md text-gray-700">
            <li>
              <strong>Truth and Authenticity:</strong> Communicating the truth of the Gospel and the Church's teachings in a clear and authentic manner.
            </li>
            <li>
              <strong>Respect and Sensitivity:</strong> Showing respect for others' beliefs, cultures, and dignity in all communications.
            </li>
            <li>
              <strong>Service and Evangelization:</strong> Using social communications to serve others and to spread the Good News of Jesus Christ.
            </li>
          </ul>
        </section>

        {/* Forms of Social Communications */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            Forms of Social Communications
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>
              <strong>Print Media:</strong> Newspapers, magazines, and books published by Catholic organizations and individuals.
            </li>
            <li>
              <strong>Digital Media:</strong> Websites, social media platforms, and online publications used by the Church to communicate with the faithful and the wider world.
            </li>
            <li>
              <strong>Broadcasting:</strong> Radio and television stations owned and operated by Catholic organizations, broadcasting Catholic programming and news.
            </li>
            <li>
              <strong>Public Relations:</strong> Official statements, press releases, and media outreach efforts by the Church to communicate its message and teachings.
            </li>
          </ul>
        </section>

        {/* Catholic Social Communications Organizations */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            Catholic Social Communications Organizations
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>
              <strong>Pontifical Council for Social Communications:</strong> A Vatican department responsible for guiding the Church's social communications efforts worldwide.
            </li>
            <li>
              <strong>Catholic News Service (CNS):</strong> A Catholic news agency providing news, features, and analysis on Catholic issues and events.
            </li>
            <li>
              <strong>EWTN (Eternal Word Television Network):</strong> A global Catholic television network broadcasting Catholic programming, news, and devotionals.
            </li>
          </ul>
        </section>

        {/* Catholic Teaching */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            Catholic Teaching on Social Communications
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>
              <strong>Veritatis Splendor (The Splendor of Truth):</strong> A papal encyclical by Pope John Paul II emphasizing the importance of truth and authenticity in social communications.
            </li>
            <li>
              <strong>Inter Mirifica (Among the Wonderful):</strong> A Vatican II decree on social communications, highlighting the Church's commitment to using modern media to spread the Gospel.
            </li>
            <li>
              <strong>Communio et Progressio (Communication and Progress):</strong> A pastoral instruction by the Pontifical Council for Social Communications, outlining the Church's vision for social communications in the modern era.
            </li>
          </ul>
        </section>

        {/* Holy Name Social Communications Team */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            The Holy Name Social Communications Team
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            The Holy Name Social Communications Team is a vibrant and dynamic group responsible for implementing these principles and promoting the Church's teachings through various forms of media. Our team is made up of both vibrant youths who bring fresh ideas and energy, as well as experienced individuals who serve as special advisers and provide valuable guidance and insight.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Together, we strive to create engaging content, promote effective communication, and spread the Good News of Jesus Christ to all. Our team is also responsible for managing and maintaining this website and other social media platforms, serving as a central hub for information about the Holy Name Catholic Church in Mabelreign, Harare, Zimbabwe.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact/ContactPage"
              className="bg-[#005A9C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00427C] transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
    <h1 className="text-4xl font-bold text-center text-[#005A9C] mb-8">
      Holy Name Catechesis
    </h1>
    <div className="space-y-8">
      {/* Holy Name Catechesis Section */}
      <section className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
        <div className="p-4 bg-[#005A9C] text-white text-lg font-medium">
          Holy Name Catechesis
        </div>
        <div className="p-4 bg-gray-50 text-gray-700">
          <p>
            Holy Name Mabelreign Parish has an active catechesis consisting of the following:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>
              <b>Sunday school:</b> From grade one to form six students in Baptism, Holy Communion, Post Communion, and Confirmation classes.
            </li>
            <li>
              <b>Adult Catechesis:</b> Includes Baptism, Communion, and Confirmation classes.
            </li>
            <li>
              <b>Infant Baptism:</b> Held periodically throughout the year.
            </li>
            <li>
              <b>Marriage classes:</b> Couples undergo a three-week training facilitated by experienced couples for diverse learning.
            </li>
          </ul>
          <p className="mt-4">
            <b>Sunday school Masses:</b> Held every Sunday at 8:30 AM after classes that start at 7:30 AM at the Marian Centre.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
        <div className="p-4 bg-[#005A9C] text-white text-lg font-medium">
          Leadership
        </div>
        <div className="p-4 bg-gray-50 text-gray-700">
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Coordinator</li>
            <li>Vice Coordinator</li>
            <li>Secretary</li>
            <li>Treasurer</li>
            <li>Committee Members</li>
          </ul>
          <div className="mt-4">
            <b>Executive Team:</b>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>
                <b>Coordinator:</b> Mr. Felix Manyimbiri
              </li>
              <li>
                <b>Vice-Coordinator:</b> Mr. John Makoni
              </li>
              <li>
                <b>Secretary:</b> Ms. Kuzi Kambasha
              </li>
              <li>
                <b>Treasurer:</b> Mrs. Phoebe Nzombe
              </li>
              <li>
                <b>Committee Member:</b> Mrs. Maria Stella Chaniwa
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Special Events Committee Section */}
      <section className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
        <div className="p-4 bg-[#005A9C] text-white text-lg font-medium">
          Special Events Committee
        </div>
        <div className="p-4 bg-gray-50 text-gray-700">
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <b>Chair:</b> Mrs. Michelle T. Hombasha
            </li>
            <li>
              <b>Vice Chair:</b> Mr. Tapiwa Utete
            </li>
            <li>
              <b>Special Advisor:</b> Mrs. Joyce Letitia Kazembe
            </li>
            <li>
              <b>Secretary:</b> Mr. Gift Dzingiso
            </li>
            <li>
              <b>Vice Secretary:</b> Mrs. Patricia Moyo
            </li>
            <li>
              <b>Committee Members:</b> Mr. Christopher Mamhiwa, Mrs. Pauline Manyaya, Mr. Mpakati, Mrs. Tendai L. Doba
            </li>
          </ul>
        </div>
      </section>

      {/* Vatican Pilgrimage Section */}
      <section className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
        <div className="p-4 bg-[#005A9C] text-white text-lg font-medium">
          To Vatican with Love Pilgrimage
        </div>
        <div className="p-4 bg-gray-50 text-gray-700">
          <p>
            A special committee formulated to organize the upcoming pilgrimage, comprised of members from the Ministry of Matrimony & fellow parishioners.
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>
              <b>Chairman:</b> Mr. Felix Manyimbiri
            </li>
            <li>
              <b>Vice Chairman:</b> Dr. Lawrence Nyika
            </li>
            <li>
              <b>Communications:</b> Mrs. Michelle T. Hombasha
            </li>
            <li>
              <b>Secretary:</b> Mrs. Tafadzwa Chimbetete
            </li>
            <li>
              <b>Second Secretary:</b> Mr. E. Mujera
            </li>
            <li>
              <b>Logistics:</b> Mrs. Chigayo
            </li>
          </ul>
        </div>
      </section>

      {/* Ministry of Matrimony Section */}
      <section className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
        <div className="p-4 bg-[#005A9C] text-white text-lg font-medium">
          Ministry of Matrimony
        </div>
        <div className="p-4 bg-gray-50 text-gray-700">
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <b>Chairperson:</b> Mr. Felix Manyimbiri
            </li>
            <li>
              <b>Committee Members:</b> Mrs. Taona Choto, Mr. Tafadzwa Choto, Mr. E. Mujera, Mrs. Modesta Mujera, Mrs. Michelle T. Hombasha, Mr. Takunda Hombasha, Mr. Mushonga, Mrs. Mushonga, Mr. Sekanevana, Mrs. Sekanevana, Sekuru Moyo, Gogo Moyo, Mr. Hanga, Mrs. Hanga
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</div>

    </div>
  );
};

export default SocCom;
