import React from 'react';

const AvondaleWestSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="p-4 bg-[#005A9C] text-white text-xl font-medium uppercase">
          Avondale West Section
        </h1>

        {/* Main content */}
        <div className="p-4 rounded-lg shadow-lg mt-6">
        <h2 className="p-4 text-[#005A9C]  text-xl font-medium uppercase">
            Avondale West Section
          </h2>
          <p className="mb-4">
            Avondale West Section started in the late 1980s as a small Rosary prayer group uniting Catholics from St. John’s Parish and Holy Name Parish. Over time, differences in focus led to the group splitting, but its pioneering efforts inspired the formation of other sections within Holy Name Parish.
          </p>
          <p className="mb-4">
            A significant milestone occurred when the Kabasa family hosted a gathering to showcase the group's operations. This event brought parishioners together, sparking the creation of additional sections and fostering a sense of community.
          </p>
          <p className="mb-4">
            The first committee members, who laid the foundation for the group, were:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Mrs. Maliselo: Chair</li>
            <li>Mr. Kabasa: Vice Chair</li>
            <li>Mrs. Mawire: Secretary</li>
          </ul>
          <p className="mb-4">
            Today, Avondale West Section proudly consists of 49 registered households. Many members actively participate in parish events, making the section a vibrant part of the community.
          </p>

          {/* Challenges and Growth */}
          <h3 className="text-xl font-semibold text-[#005A9C] underline">Challenges and Growth</h3>
          <p className="mb-4">
            Despite its success, the section has faced challenges, such as low youth attendance at meetings. To address this, initiatives like Youth Braais and collaborative activities with the Counselling Ministry have been introduced, creating an inviting atmosphere for younger members.
          </p>
          <p className="mb-4">
            Fluctuating adult attendance has also been an issue, tackled through efforts like organizing transport for members in need, ensuring everyone can participate and feel included.
          </p>
          <p>
            With its strong foundation and commitment, Avondale West Section continues to thrive, fostering unity, advancing God’s work, and uplifting its members both spiritually and socially.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvondaleWestSection;
