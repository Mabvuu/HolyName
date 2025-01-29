import React from 'react';

const ParachuteRegiment = () => {
  return (
    <div className="bg-blue-50 min-h-screen font-sans text-gray-800">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Header */}
        <header className="text-center mb-10">
        <h1 className="p-4 bg-[#005A9C] text-white text-xl font-medium uppercase">PARACHUTE REGIMENT</h1>
          <p className="mt-4 text-lg text-gray-600">A close-knit community under Holy Name Parish</p>
        </header>

        {/* History Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="p-4 text-[#005A9C]  text-xl font-medium uppercase">History</h2>
          <p className="mt-4 text-gray-700">
            The Parachute Regiment of the Roman Catholic Church is a small, close-knit community under Holy Name Parish,
            consisting of around 30 members from different Guilds. The group emphasizes a strong sense of fellowship and
            shared faith, often engaging in regular worship, services, community activities, religious education, charitable
            initiatives, and various Sacraments such as Baptism, Confirmation, and Marriage. The members support one another
            spiritually and socially, fostering a welcoming environment.
          </p>
          <p className="mt-4 text-gray-700">
            The Parachute Regiment Section also focuses on maintaining traditional practices and teachings of the church
            while adapting to the needs of its members and the local community.
          </p>
          <p className="mt-4 text-gray-700">
            Holy Name Parish, our mother parish, has a special significance for us. Our first Mass was celebrated in April
            2023 by Father Mhepo, marking a historic breakthrough after many years of struggle. Despite its small size, the
            Parachute Regiment plays a vital role in nurturing spiritual growth and community ties. The section has a rich
            history, dating back to the early 1980s, shortly after Zimbabwe's independence.
          </p>
        </section>

        {/* Executive Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="p-4 text-[#005A9C]  text-xl font-medium ">Executive</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li><strong>Chairperson:</strong> Mr V Mudimu - 0773382139</li>
            <li><strong>Vice Chairperson:</strong> Mr T Goto - 0778905569</li>
            <li><strong>Secretary:</strong> Mrs J Goto - 0773087499</li>
            <li><strong>Treasurer:</strong> Mrs Hlomayi - 0776 562 599</li>
            <li><strong>Catechism:</strong> Mrs Ben - 0785914130</li>
            <li><strong>Vice Secretary:</strong> Mrs Homodza - 0773196875</li>
            <li><strong>Committee Members:</strong> Mr P Chigumbura, Mr C Hlomayi, Mrs P Mudimu</li>
          </ul>
        </section>

        {/* Upcoming Event Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="p-4 text-[#005A9C]  text-xl font-medium ">Main Upcoming Event</h2>
          <p className="mt-4 text-gray-700">
            Parachute Regiment to host an Interdenominational gathering at Parachute Regiment Chapel on the 18th of May 2025.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ParachuteRegiment;
