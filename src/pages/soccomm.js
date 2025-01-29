import React from "react";

const SoccomPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-10">
        {/* Page Header */}
        <h1 className="text-2xl font-bold text-center text-[#005A9C]">
          Holy Name Social Communications (SOCCOM)
        </h1>

        {/* Introduction */}
        <section>
          <h2 className="p-4 bg-[#005A9C] text-white text-lg font-medium rounded-t-lg">
            Social Communications in the Catholic Church
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed p-4 bg-gray-50 rounded-b-lg">
            The Catholic Church recognizes the importance of effective communication in spreading the Gospel and promoting the Church's teachings. Our social communications team is committed to using various forms of media to serve others and to spread the Good News of Jesus Christ.
          </p>
        </section>

        {/* Key Principles */}
        <section>
          <h2 className="p-4 bg-[#005A9C] text-white text-lg font-medium rounded-t-lg">
            Key Principles
          </h2>
          <ul className="list-decimal list-inside space-y-3 text-lg text-gray-700 p-4 bg-gray-50 rounded-b-lg">
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
        <section>
          <h2 className="p-4 bg-[#005A9C] text-white text-lg font-medium rounded-t-lg">
            Forms of Social Communications
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 p-4 bg-gray-50 rounded-b-lg">
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

        {/* Team Responsibilities */}
        <section>
          <h2 className="p-4 bg-[#005A9C] text-white text-lg font-medium rounded-t-lg">
            The Holy Name Social Communications Team
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed p-4 bg-gray-50 rounded-b-lg">
            The Holy Name Social Communications Team is a dynamic and innovative group dedicated to promoting the Church's teachings through various media channels. Our diverse team combines the enthusiasm and creativity of young members with the valuable guidance and expertise of experienced advisors. 
            The team’s responsibilities include:
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 p-4 bg-gray-50">
            <li>Managing the church's sound system to ensure seamless Mass celebrations</li>
            <li>Capturing memorable moments for parish records</li>
            <li>Designing the parish bulletin, flyers, and other visual materials</li>
            <li>Maintaining and updating this website and other social media platforms</li>
          </ul>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="p-4 bg-[#005A9C] text-white text-lg font-medium rounded-t-lg">
            Leadership
          </h2>
          <table className="min-w-full bg-gray-50 rounded-lg text-left">
            <tbody className="text-lg text-gray-700">
              <tr>
                <td className="p-2 font-medium">Chairperson:</td>
                <td className="p-2">Panashe Takawira</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Vice Chairperson:</td>
                <td className="p-2">Rumbidzai Nziramasanga</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Treasurer:</td>
                <td className="p-2">Hunter Mupfurutsa</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Financial Secretary:</td>
                <td className="p-2">Celine Tsekwende</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Secretary:</td>
                <td className="p-2">Zuva Mutimba</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Vice Secretary:</td>
                <td className="p-2">Ricardo Mlambo</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Organising Secretary:</td>
                <td className="p-2">Tinotenda Munyoro</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Committee Members:</td>
                <td className="p-2">Thabo Dube, Credence Mutevani</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Advisor:</td>
                <td className="p-2">Mr. D Kunaka</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default SoccomPage;
