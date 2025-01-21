import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Section */}
      <header
  className="bg-cover bg-center text-white text-center py-16 overflow-hidden"
  style={{ backgroundImage: "url('/images/10.jpg')" }}
>
  <div className="animate-marquee">
    <h1 className="text-3xl font-bold mb-4">Adult Guilds</h1>
    <p className="text-lg max-w-1xl mx-auto">
      Learn about our history, mission, goals, and the intention behind everything we do.
    </p>
  </div>
</header>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
       

        {/* History Section */}
        <div className="space-y-6 px-4">
  {/* Content section */}
  <h1 className="text-3xl font-medium text-left mb-6 text-gray-800 underline">
  CHITA CHEMWOYO MUSANDE KWAZVO WAYESU (MOST SACRED HEART OF JESUS GUILD)
</h1>
  <p className="text-lg text-gray-700 leading-relaxed">
    Chita cheMwoyo Musande Kwazvo waYesu, Chita chinobatanidza vatenderi ve Katorike kuti vaparidzire uMambo hwaMwari pasi pose. Chita cheMwoyo Musande Kwazvo waYesu chakatangwa naivo Mambo Yesu Kristo pachavo mushure mekuzviratidza kune vapikiri vakasiyana siyana. Mambo Yesu Kristo vakapa basa guru rekuvamba chita kuna Margaret Mary Alacoque. Margaret Mary akaberekwa musiwa 22 July 1647 akazofa musiwa 17 October 1690.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    Chita cheMwoyo Musande Kwazvo waYesu chita chemhuri saka Baba, Amai nevana vane kodzero yekupinda muchita. Munhu ane masakaramende ake akakwana, abvumirwa nababa vezvoMweya anokwanisa kupinda muchita. Zvinangwa zve Chita cheMwoyo Musande Kwazvo waYesu zvinotevera:
  </p>

  {/* List of Objectives */}
  <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
    <li>Kupa rukudzo norutendo kuna Yesu kana tichinamata kuMwoyo wake Musande;</li>
    <li>Kuedza kudzorera rudo rwatakaratidzwa naYesu Kristo zvaakatifira pachipiyaniso, Mwoyo wake ukabaiwa nepfumo;</li>
    <li>Kuparidzira uMambo hwaMwari;</li>
    <li>Kuripira Matadzo edu neevanhu vose.</li>
  </ul>

  <p className="text-lg text-gray-700 leading-relaxed">
    Mazuva makuru anochengetedzwa neChita ndeaya:
  </p>

  {/* List of Special Days */}
  <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
    <li>
      <strong>Zuva reMwoyo Musande:</strong> Rinopembererwa Chishanu chinotevera zuva reMuviri neRopa raKristo, Corpus Christi. Holy Name se Parish inopemberera zuva iri.
    </li>
    <li>
      <strong>Zuva ra Margaret Mary:</strong> Rinopembererwa nevatenderi vose musiwa 16 October gore roga roga.
    </li>
    <li>
      <strong>Zuva ra Kristo Ari Mambo (Christ the King):</strong> Rinopembererwa kupera kwemwedzi wa November svondo rekupedzisiraregore reKirike.
    </li>
    <li>
      <strong>Corpus Christi:</strong> Zuva guru remuviri neropa raKristo.
    </li>
  </ul>

  <p className="text-lg text-gray-700 leading-relaxed">
    Zvakare kunze kwemazuva makuru aya, Chita chinochengetedza zuva reChishanu chekutanga kwemwedzi woga woga apo tinoita Pfugamiro, kuchizopedzisira nemuteuro weMisa.
  </p>
</div>

<div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
  <div className="w-full sm:w-1/2">
    <img src="/images/15.jpg" alt="1" className="w-full h-auto rounded-lg shadow-md" />
  </div>
  <div className="w-full sm:w-1/2">
    <img src="/images/13.jpg" alt="2" className="w-full h-auto rounded-lg shadow-md" />
  </div>
</div>



        {/* Goals Section */}
        <div className="space-y-6 px-4">
  {/* Content section */}
  <p className="text-lg text-gray-700 leading-relaxed">
    Chita cheMwoyo Musande Kwazvo waYesu, Chita chinobatanidza vatenderi ve Katorike kuti vaparidzire uMambo hwaMwari pasi pose. Chita cheMwoyo Musande Kwazvo waYesu chakatangwa naivo Mambo Yesu Kristo pachavo mushure mekuzviratidza kune vapikiri vakasiyana siyana. Mambo Yesu Kristo vakapa basa guru rekuvamba chita kuna Margaret Mary Alacoque. Margaret Mary akaberekwa musiwa 22 July 1647 akazofa musiwa 17 October 1690.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    Chita cheMwoyo Musande Kwazvo waYesu chita chemhuri saka Baba, Amai nevana vane kodzero yekupinda muchita. Munhu ane masakaramende ake akakwana, abvumirwa nababa vezvoMweya anokwanisa kupinda muchita. Zvinangwa zve Chita cheMwoyo Musande Kwazvo waYesu zvinotevera:
  </p>

  {/* List of Objectives */}
  <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
    <li>Kupa rukudzo norutendo kuna Yesu kana tichinamata kuMwoyo wake Musande;</li>
    <li>Kuedza kudzorera rudo rwatakaratidzwa naYesu Kristo zvaakatifira pachipiyaniso, Mwoyo wake ukabaiwa nepfumo;</li>
    <li>Kuparidzira uMambo hwaMwari;</li>
    <li>Kuripira Matadzo edu neevanhu vose.</li>
  </ul>

  <p className="text-lg text-gray-700 leading-relaxed">
    Mazuva makuru anochengetedzwa neChita ndeaya:
  </p>

  {/* List of Special Days */}
  <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
    <li>
      <strong>Zuva reMwoyo Musande:</strong> Rinopembererwa Chishanu chinotevera zuva reMuviri neRopa raKristo, Corpus Christi. Holy Name se Parish inopemberera zuva iri.
    </li>
    <li>
      <strong>Zuva ra Margaret Mary:</strong> Rinopembererwa nevatenderi vose musiwa 16 October gore roga roga.
    </li>
    <li>
      <strong>Zuva ra Kristo Ari Mambo (Christ the King):</strong> Rinopembererwa kupera kwemwedzi wa November svondo rekupedzisiraregore reKirike.
    </li>
    <li>
      <strong>Corpus Christi:</strong> Zuva guru remuviri neropa raKristo.
    </li>
  </ul>

  <p className="text-lg text-gray-700 leading-relaxed">
    Zvakare kunze kwemazuva makuru aya, Chita chinochengetedza zuva reChishanu chekutanga kwemwedzi woga woga apo tinoita Pfugamiro, kuchizopedzisira nemuteuro weMisa.
  </p>
</div>


        {/* Mission Section */}
        <div className="space-y-6">
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
    Chita cheMwoyo Musande Kwazvo waYesu chinopa kutenda nerutsigiro nekutungamirirwa kwachinoitwa nana baba vezvomweya. Ana Baba vanopa nguva yavo pose pangadiwa rubatsiro rwavo.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    Vatenderi vanoda kuvewo nhengo dze Chita vanogamuchirwa chaizvo, tinovakurudzira kutanga kudzidzira kuva nhengo dzechita.
  </p>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg mt-8">
  <h2 className="text-3xl font-semibold text-[#005A9C] mb-6">Chita Cha Mariya Hosi YeDenga</h2>

  <p className="text-gray-700 mb-4">
    Chita chaMariya Hosi yeDenga, chita chevatendenderi vaKatorike vanozvipira kutevera Jesu Kristo nokugara upenyu hunofadza Mwari, vachirevererwa nokutevera muenzaniso wa Mariya Musande, Amai vaJesu Kristo, Hosi yeDenga. Vanozvipirawo kushandira Kirike vachiparidzira chitendero. Muchengeti nomurevereri we Chita ichi ndi MARIYA MUSANDE.
  </p>

  <p className="text-gray-700 mb-4">
    Chita ichi chakatangwa kare naFr Leunis kuRome mugore ra 1553. Chikonzero chiri chokuda kupindutsa vapanduki nenzira yechiratidzo chakanaka chenhengo dzeChita kuti vagodzokera muSangano raKristo.
  </p>

  <p className="text-gray-700 mb-4">
    Muno muZimbabwe chakatangwa kuma 1940 navanaBaba vezvomweya, maJesuits. Chakatangwa seboka reSodality yaMariya Musande iyo yanga yatekeshera muDiocese re Bulawayo.
  </p>

  <p className="text-gray-700 mb-4">
    Muno muDunhu reHarare, chakazovambwa naBaba Alois Nyanhete vakabatsirawo kuti chinyatsodzika midzi munzvimbo dzavaishanda dzinoti Mbare, Highfields neMabvuku.
  </p>

  <p className="text-gray-700 mb-4">
    Chinangwa nechido chavo chikuru chokuvamba chita ichi chiri chekuti michato yevatenderi inyatsosimbiswa nokutsigirwa nokugara upenyu hwechiKristo nguva dzose (semhuri yaJesu, Mariya naJoseph).
  </p>

  <p className="text-gray-700 mb-4">
    Zita reChita rakazosandurwa mumakore mashoma aitevera rodaidzwa kunzi <strong>Mariya Hosi YeDenga</strong>.
  </p>

  <h3 className="text-2xl font-semibold text-[#005A9C] mb-4">Zvinangwa zvikuru zvechita:</h3>
  <ul className="list-disc pl-6 text-gray-700 mb-4">
    <li>Kuyamura nhengo imwe neimwe kuti ive tsvene nokugara upenyu hunofadza Mwari</li>
    <li>Kuziva chitendero nokuchiparidzira nemagariro akanaka</li>
    <li>Kushandira Kirike vachiribatsira nokuridzivirira</li>
    <li>Kuparidzira chitendero sezvinotevera:</li>
    <ul className="list-disc pl-6 text-gray-700">
      <li>Kunamata zuva roga roga, minanato yemazuva ose, Rusariro, neyepa vhiki</li>
      <li>Kuziva chitendero nokuchirwira</li>
      <li>Kuzvipira kudzidzisa Catechism</li>
      <li>Kudzidzisa vadzidzi vechitendero kuti vave nhengo dzizere</li>
      <li>Kugara upenyu hunowirirana neShoko raMwari</li>
      <li>Kuita mabasa etsitsi</li>
      <li>Kubatsira nekushanyira vakarasa chitendero</li>
    </ul>
  </ul>

  <h3 className="text-2xl font-semibold text-[#005A9C] mb-4">Mitemo yeChita:</h3>
  <ul className="list-disc pl-6 text-gray-700 mb-4">
    <li>Amai kana baba vakachata muKatorike vanozvipira kunaMariya Musande</li>
    <li>Amai kana baba vanogaroenda kumisangano yose inorongwa neChita, sokuti misangano yesvondo roga roga</li>
    <li>Amai kana baba vanogaropinda Misa Sande (Holy Eucharist) nokugamuchira Komminioni Sande (Holy Communion)</li>
    <li>Amai kana baba vanowanzopenengura hana nokuita Rupinduko (Confession)</li>
    <li>Kuenda kuhurukuro (Talks) dzinobatsira kukura mumweya</li>
    <li>Amai kana baba vanopinda Runyararo (Retreat/Recollection) gore roga roga</li>
    <li>Amai kana baba vanoteerera nokuremekedza vapikiri nevatungamiriri</li>
    <li>Amai kana baba vanobvisa migove inenge yatemwa kana yokuzvipira, yokutsigira mabasa eChita neeKirike mukuparidzira chitendero paParish, Deanery neDunhu</li>
    <li>Kubvuma kutumwa mabasa akasiyana, sekuva mutungamiri</li>
    <li>N'anga kana masvikiro havabvumidzwe kupinda muchita</li>
  </ul>

  <h3 className="text-2xl font-semibold text-[#005A9C] mb-4">Mazuva Makuru aMariya Musande:</h3>
  <ul className="list-disc pl-6 text-gray-700 mb-4">
    <li><strong>23 January:</strong> Chita opening meetings at 1 PM</li>
    <li><strong>25 January 2025:</strong> Opening meeting at 7 AM</li>
    <li><strong>1 February 2026:</strong> Combined Chita theme "Rebuilding the Walls of Jerusalem"</li>
    <li><strong>11 February 2025:</strong> Our Lady of Lourdes - Attend mass and information sharing</li>
    <li><strong>25 March 2025:</strong> Annunciation of the Lord - Attend Tuesday morning mass and Chita meeting on 27 March 2025</li>
  </ul>
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

export default AboutPage;
