import React from "react";

const Chemwoyo = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* History Section */}
        <div className="space-y-6 px-4">
        <h1 className="p-4 bg-[#005A9C] text-white text-lg font-medium">
        MOST SACRED HEART OF JESUS GUILD (CHITA CHEMWOYO MUSANDE
          KWAZVO WAYESU)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
          The Sacred Heart of Jesus Guild is a Catholic organization that brings together
Catholic faithful to spread the love of God everywhere. The Sacred Heart of Jesus
devotion was introduced by Jesus Christ Himself to various saints after He had
revealed Himself to them. Jesus Christ entrusted the mission of spreading the
devotion to Margaret Mary Alacoque. Margaret Mary was born on 22 July 1647 and
died on 17 October 1690.
The Sacred Heart of Jesus Guild is a family guild consisting of fathers, mothers, and
children who wish to join. Any person with a good heart, who has received the
sacraments and is approved by the spiritual director, can join the guild. The
objectives of the Sacred Heart of Jesus Guild are:</p>

          {/* List of Objectives */}
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>To give love and devotion to Jesus through devotion to His Sacred Heart</li>
            <li>To return love for the love shown to us by Jesus Christ who was pierced for
            our transgressions, and His heart was wounded by a lance</li>
            <li>To spread the love of God;</li>
            <li>To atone for our sins and those of all people</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">
          Major Feast Days celebrated by the Guild
          </p>

          {/* List of Special Days */}
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>
              <strong>Sacred Heart Day:</strong> Celebrated on the Friday after the Feast of the Body and
              Blood of Christ, Corpus Christi. The Holy Name Parish celebrates this day.
            </li>
            <li>
              <strong>Margaret Mary Day:</strong> Celebrated by all members on 16 October every year.
            </li>
            <li>
              <strong>Christ the King Day:</strong> Celebrated on the last Sunday of November every year.
            </li>
            <li>
              <strong>Corpus Christi:</strong> A major feast of the Body and Blood of Christ.
            </li>
          </ul>

         
        </div>

        {/* Image Section */}
        <div className="flex justify-center py-6">
  <figure className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <img
      src={process.env.PUBLIC_URL + "/images/10.jpg"} // Adjust with your image path
      alt="Sacred Heart Guild"
      className="w-full h-auto rounded-lg shadow-lg"
    />
    <figcaption className="text-center mt-2 text-m text-gray-600">
    Moyo Musande – Adult Guild Members
    </figcaption>
  </figure>
</div>


        {/* Mission Section */}
        <div className="space-y-6 px-4">
          <h2 className="text-3xl font-bold text-[#005A9C]">Members and Positions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-left text-gray-700">
              <thead className="bg-[#005A9C] text-white">
                <tr>
                  <th className="px-4 py-2">Member</th>
                  <th className="px-4 py-2">Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Mrs A. Magejo</td>
                  <td className="px-4 py-2">Chairperson</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Ms M. Chigwaza</td>
                  <td className="px-4 py-2">Vice Chairperson</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Mrs S. Tigere</td>
                  <td className="px-4 py-2">Promoter</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Mr. P. Paratema</td>
                  <td className="px-4 py-2">Vice Promoter</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Ms P. Mashiri</td>
                  <td className="px-4 py-2">Secretary</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Mrs P. Makina</td>
                  <td className="px-4 py-2">Vice Secretary</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Mrs S. Nkomo</td>
                  <td className="px-4 py-2">Treasurer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Mrs E. Musosa</td>
                  <td className="px-4 py-2">Finance Secretary</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Mr M. Sekanevana</td>
                  <td className="px-4 py-2">Committee Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Mr E. Dumbura</td>
                  <td className="px-4 py-2">Committee Member</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Mr E. Chitsuwa</td>
                  <td className="px-4 py-2">Committee Member</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Intention Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#005A9C]">Formators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="space-y-2 text-lg text-gray-700">
              <li>Mrs G. Chakamba</li>
              <li>Mrs V. Mutukwa</li>
              <li>Mr C. Sekanevana</li>
            </ul>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>Mrs M. Chitsuwa</li>
              <li>Mrs E.N. Paradzai</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
          The Sacred Heart of Jesus Guild operates under the guidance of the priests and the
leadership of the spiritual directors. The priests provide their time and support
whenever needed. Members who wish to join the guild are encouraged to learn more
about the guild.</p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vatenderi vanoda kuvewo nhengo dze Chita vanogamuchirwa chaizvo, tinovakurudzira kutanga kudzidzira kuva nhengo dzechita.
          </p>
        </div>
        <div className="space-y-6">
 
</div>
      </section>
    </div>
  );
};

export default Chemwoyo;
