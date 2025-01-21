import React from "react";

const FamilyApo = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-[#005A9C] text-white text-center py-16 overflow-hidden">
        <div className="animate-marquee">
          <h1 className="text-3xl font-bold mb-4">Family Apostelete Committee</h1>
          <p className="text-lg max-w-1xl mx-auto">
            Learn about our history, mission, goals, and the intention behind everything we do.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Image */}
        <div className="space-y-6">
  <h2 className="text-3xl font-bold text-[#005A9C]">Executive Members</h2>
  
  <table className="min-w-full table-auto border-collapse">
    <thead>
      <tr>
        <th className="border-b-2 border-gray-300 text-left py-2 px-4">Position</th>
        <th className="border-b-2 border-gray-300 text-left py-2 px-4">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border-b border-gray-200 py-2 px-4 font-semibold">Chairperson</td>
        <td className="border-b border-gray-200 py-2 px-4">Ms Leonora Mawire</td>
      </tr>
      <tr>
        <td className="border-b border-gray-200 py-2 px-4 font-semibold">Vice Chairperson</td>
        <td className="border-b border-gray-200 py-2 px-4">Mrs Eunice Mahenga</td>
      </tr>
      <tr>
        <td className="border-b border-gray-200 py-2 px-4 font-semibold">Secretary</td>
        <td className="border-b border-gray-200 py-2 px-4">Ms Alice Chirenje</td>
      </tr>
      <tr>
        <td className="border-b border-gray-200 py-2 px-4 font-semibold">Vice Secretary</td>
        <td className="border-b border-gray-200 py-2 px-4">Miss Kathleen Chari</td>
      </tr>
      <tr>
        <td className="border-b border-gray-200 py-2 px-4 font-semibold">Committee Member</td>
        <td className="border-b border-gray-200 py-2 px-4">Mr E.R. Gambe</td>
      </tr>
      <tr>
        <td className="border-b border-gray-200 py-2 px-4 font-semibold">Committee Member</td>
        <td className="border-b border-gray-200 py-2 px-4">Mrs Linda N Dziva</td>
      </tr>
      <tr>
        <td className="border-b border-gray-200 py-2 px-4 font-semibold">Committee Member</td>
        <td className="border-b border-gray-200 py-2 px-4">Mrs Lindisi Doba</td>
      </tr>
    </tbody>
  </table>
</div>


        {/* History Section */}
        <div className="space-y-6">
  <h2 className="text-3xl font-bold text-[#005A9C]">Brief History/Background</h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    The Family Apostolate Committee serves as a dedicated group focused on supporting, enriching, and nurturing families within our parish. It aims to guide families to live a true Christian life. The family is the primary agent of socialization from which the Catholic congregation emanates. Hence, the Family Apostolate Committee aims to promote prayerfulness and enhance the understanding of Catholicism within families.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    The Family Apostolate was inspired by the need to promote spirituality and prayer in the family. The Committee engages in pastoral care, promotes prayer life and regular reception of the sacraments, imparts catechesis, offers opportunities for family get-togethers, and connects families with the church and with one another.
  </p>

  <h2 className="text-3xl font-bold text-[#005A9C]">Mission</h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    The mission of the Family Apostolate Committee is to promote the spiritual, emotional, and physical well-being of families within the Catholic Church, helping them to grow in faith, love, and unity according to the teachings of the Church.
  </p>

  <h2 className="text-3xl font-bold text-[#005A9C]">Family Apostolate- Membership</h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    The Family Apostolate Committee is open to all parishioners: married couples, widows/widowers, singles, young adults, youths, single parents, separated parents, as well as sisters and brothers; all of whom will represent the various sections and interest groups of the Parish.
  </p>

  <h3 className="text-2xl font-semibold text-[#005A9C]">The following Family groups/committees are in existence or formation:</h3>
  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
    <li>Widows/widowers</li>
    <li>Young Couples</li>
    <li>Single Parents</li>
    <li>Young Adults</li>
    <li>Catering committee</li>
  </ul>
</div>


        {/* Goals Section */}
        <div className="space-y-6 px-4">
  {/* Heading with left-alignment and styling */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-left uppercase underline">
    For our contacts under Family Apostolate Committee guilds, visit the contact page
  </h2>

  {/* Button to navigate to the contact page */}
  <a 
    href="/contact/ContactPage"
    className="block text-center py-3 px-6 mt-4 text-white bg-[#005A9C] rounded-md hover:bg-[#004a7c] transition duration-300"
  >
    Visit Contact Page
  </a>
</div>
      </section>

    

      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default FamilyApo;
