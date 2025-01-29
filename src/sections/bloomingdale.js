import React from 'react';

const BloomingdaleSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="p-4 bg-[#005A9C] text-white text-xl font-medium uppercase">
          Bloomingdale Section
        </h1>

        {/* Contact Information */}
        <section className=" p-4 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-medium text-[#005A9C]">Contact Information</h2>
          <p className="mt-2 text-gray-700">
            <strong>Chairman:</strong> Mr. Chisuro +263781907444
          </p>
        </section>

        {/* Executive Members */}
        <section className="bg-white p-4 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-medium text-[#005A9C] underline">Executive Members</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li><strong>Chairman:</strong> Mr Z. Chisuro - 0781907444</li>
            <li><strong>Vice Chairperson:</strong> Mai S. Mangwiro - Jowa - 0772928442</li>
            <li><strong>Secretary:</strong> P. Mukahlera - 0773630285</li>
            <li><strong>Vice Secretary:</strong> Rachel Matopodzi - 0774134745</li>
            <li><strong>Treasurer:</strong> R. Choto - 0772573414</li>
            <li><strong>Committee Members:</strong></li>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Hannah:</strong> Mai Chaza - 0772116180</li>
              <li><strong>Maranatha:</strong> Mrs. Chipunza - 0772930061</li>
              <li><strong>Emmaus:</strong> Mai Nhandara - 0772408934</li>
              <li><strong>Galilee:</strong> Mai Chazanga - 0773064516</li>
              <li><strong>Health Committee:</strong> Mai Musundire - 0772125227</li>
              <li><strong>SSVP:</strong> Mr Nhandara - 0771490894, Mr Jowa - 0779317324, Tanya Mutukwa - 0776974118</li>
              <li><strong>CCJP:</strong> Mai Magama - 0776799159</li>
            </ul>
          </ul>
        </section>

        {/* Brief History */}
        <section className=" p-4 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-medium text-[#005A9C]">Brief History</h2>
          <p className="mt-2 text-gray-700">
            Bloomingdale section was accorded section status in 2006.
          </p>
        </section>

        {/* Objectives Section */}
        <section className="bg-white p-4 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-medium text-[#005A9C] underline">Objectives</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Meeting Properly and effectively meet and conduct community prayer meetings and share scriptural and motivational ideology.</li>
            <li>Catholic Identity to promote understanding of Catholicism and educate our families and children.</li>
            <li>Emotional & Spiritual Development to socialize, counsel, teach, and assist each other in spiritual activities.</li>
            <li>Scriptural Development to help each other understand the Bible and live by it.</li>
            <li>God’s Love to promote faith and foster an environment of love and acceptance.</li>
            <li>Youth involvement at all levels in church activities.</li>
            <li>Physical & Healthy Lifestyle to promote physical development and a healthy lifestyle through parish-level activities.</li>
            <li>Morality to promote good moral behavior among children, youths, and adults.</li>
            <li>Works of Mercy to assist the needy in and around our community, offering financial, material, and spiritual support.</li>
          </ul>
        </section>

        {/* Projects/Events Section */}
        <section className=" p-4 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-medium text-[#005A9C] underline">Projects / Events</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Supporting the needy in the community with food handouts and visiting the sick.</li>
            <li>Ladies planned upgrading of section utensils including plates, spoons, forks, knives, and cooking pots.</li>
            <li>Planned section retreat (no date yet).</li>
            <li>Planned charity event to an orphanage or Mutemwa leprosy center (date to be set).</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BloomingdaleSection;
