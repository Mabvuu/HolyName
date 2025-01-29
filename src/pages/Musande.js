import React from "react";

const MoyoMusandeGuild = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-10">
        {/* Page Header */}
        <h1 className="text-2xl font-bold text-center text-[#B22222]">
          The Sacred Heart of Jesus Christ – Youth Guild
        </h1>

        {/* Executive Table */}
        <section>
          <h2 className="p-4 bg-[#B22222] text-white text-lg font-medium rounded-t-lg">
            Executive Members
          </h2>
          <table className="w-full bg-gray-50 rounded-b-lg text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 font-semibold">Role</th>
                <th className="p-3 font-semibold">Name</th>
              </tr>
            </thead>
            <tbody className="text-lg text-gray-700">
              <tr>
                <td className="p-3">Chairperson</td>
                <td className="p-3">Arthur Hukama</td>
              </tr>
              <tr>
                <td className="p-3">Vice Chairperson</td>
                <td className="p-3">Kelvin Kapfunde</td>
              </tr>
              <tr>
                <td className="p-3">Secretary</td>
                <td className="p-3">Natasha Gurure</td>
              </tr>
              <tr>
                <td className="p-3">Vice Secretary</td>
                <td className="p-3">Seltina Gore</td>
              </tr>
              <tr>
                <td className="p-3">Financial Secretary</td>
                <td className="p-3">Evidence Chitongo</td>
              </tr>
              <tr>
                <td className="p-3">Vice Financial Secretary</td>
                <td className="p-3">Tanaka Mukosoro</td>
              </tr>
              <tr>
                <td className="p-3">Organising Secretary</td>
                <td className="p-3">Daphine Mubaya</td>
              </tr>
              <tr>
                <td className="p-3">Vice Organising Secretary</td>
                <td className="p-3">Panashe Takawira</td>
              </tr>
              <tr>
                <td className="p-3">Committee Members</td>
                <td className="p-3">Tinashe Kurangwa, Kudzai Nyaruwe, Sarah Jack, Tinevimbo Chitani</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* History Section */}
        <section>
          <h2 className="p-4 bg-[#B22222] text-white text-lg font-medium rounded-t-lg">
            A Brief History of The Sacred Heart of Christ Youth Guild
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed p-4 bg-gray-50 rounded-b-lg">
            The Sacred Heart of Christ Guild was formed by Christ, bringing together believers
            to preach the word of God and the goodness of Christ to the world. The guild was
            formed after Christ showed himself to different members of the clergy, including St. Lutgarde,
            St. Gertrude the Great, St. Mechtilde, St. Catherine of Siena, and St. Margaret Mary Alacoque.
            They all had one thing in common—staying in prayer before the Blessed Sacrament when Christ showed Himself to them. 
            The task of starting the guild was given to St. Margaret Mary.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed p-4 bg-gray-50 rounded-b-lg">
            In Zimbabwe, Jesuit Priests introduced the Mwoyo Musande Guild in missionary schools. 
            It was officially accepted in Salisbury (Harare) in 1966, led by Mr. Stanislae Nyagomo, 
            a dedicated promoter. By 2006, under the guidance of Bishop Patrick Mutume, the guild's 
            activities were coordinated across dioceses in Zimbabwe.
          </p>
        </section>

        {/* Objectives Section */}
        <section>
          <h2 className="p-4 bg-[#B22222] text-white text-lg font-medium rounded-t-lg">
            Objectives
          </h2>
          <ul className="list-decimal list-inside space-y-3 text-lg text-gray-700 p-4 bg-gray-50 rounded-b-lg">
            <li>To establish and cultivate a deep devotion to the Sacred Heart of Jesus.</li>
            <li>To make reparation for the ingratitude and indifference of men towards the love of Jesus Christ.</li>
            <li>To promote the honor and glory of the Sacred Heart and to spread its devotion throughout the world.</li>
            <li>To practice the virtues of charity, humility, and meekness, in imitation of the Sacred Heart.</li>
          </ul>
        </section>
      </div>

      <div className="flex justify-center py-6">
  <figure className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <img
      src={process.env.PUBLIC_URL + "/images/9.jpg"} // Adjust with your image path
      alt="Sacred Heart Guild"
      className="w-full h-auto rounded-lg shadow-lg"
    />
    <figcaption className="text-center mt-2 text-m text-gray-600">
      The Sacred Heart of Jesus Christ – Youth Guild Members
    </figcaption>
  </figure>
</div>


        <div className="mb-8 text-center">
          <p className="text-xl font-semibold text-gray-700">
            Let every Youth who wishes To Suffer, Love and Save Souls for Christ's sake come and Join The Most Sacred Heart Of Jesus Christ.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MoyoMusandeGuild;
