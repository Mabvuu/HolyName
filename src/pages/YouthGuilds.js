import React from "react";



const YouthGuilds = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-[#005A9C] text-white text-center py-16 overflow-hidden">
        <div className="animate-marquee">
          <h1 className="text-3xl font-bold uppercase text-white font-extralight mb-4">Youth Guilds</h1>
          <p className="text-lg max-w-1xl mx-auto">
            Learn about our history, mission, goals, and the intention behind everything we do.
          </p>
        </div>
      </header>



      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <div className="relative p-6">
      <h1 className="text-3xl font-medium text-left mb-6 text-gray-800 underline">
  EXECUTIVE
</h1>

  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Column */}
    <div className="space-y-4">
      <p className="text-lg font-semibold text-gray-700">1. Chairperson - <span className="font-normal">Arthur Champiruka</span></p>
      <p className="text-lg font-semibold text-gray-700">2. Vice Chair - <span className="font-normal">Kelvin Kapfunde</span></p>
      <p className="text-lg font-semibold text-gray-700">3. Secretary - <span className="font-normal">Natasha Gurure</span></p>
      <p className="text-lg font-semibold text-gray-700">4. Vice Secretary - <span className="font-normal">Seltina Gore</span></p>
      <p className="text-lg font-semibold text-gray-700">5. Financial Secretary - <span className="font-normal">Evidence Chitongo</span></p>
      <p className="text-lg font-semibold text-gray-700">6. Vice - <span className="font-normal">Tanaka Mukosoro</span></p>
    </div>
    
    {/* Right Column */}
    <div className="space-y-4">
      <p className="text-lg font-semibold text-gray-700">7. Organiser - <span className="font-normal">Daphine Mubaya</span></p>
      <p className="text-lg font-semibold text-gray-700">8. Vice Organ - <span className="font-normal">Panashe Takawira</span></p>
      <p className="text-lg font-semibold text-gray-700">9. Chief Promoter</p>
      <p className="text-lg font-semibold text-gray-700">10. Promoter</p>
      <p className="text-lg font-semibold text-gray-700">11. Committee Members:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-lg font-normal text-gray-600">Tinashe Kurangwa</li>
        <li className="text-lg font-normal text-gray-600">Sarah Jack</li>
        <li className="text-lg font-normal text-gray-600">Tinevimbo Chitani</li>
      </ul>
    </div>
  </div>
</div>



        

        {/* History Section */}
        <div className="space-y-6 px-4">
  {/* Heading with reduced boldness and left-aligned */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-left mb-4">
    Moyo musande kwazvo waYesu (Most Sacred Heart of Jesus)
  </h2>

  {/* First Paragraph */}
  <p className="text-lg text-gray-700 leading-relaxed">
    Chita cheMwoyo Musande Kwazvo waYesu chakatangwa naivo Mambo Yesu Kristo pachavo, Chita chinobatanidza vatenderi kut vaparidze uMambo hwaMwari pasi pose.  Chita chakatanga Mushure mekuzviratidza kune vapikiriri vakasiyana siyana vanosanganisira St. Lutgarde(1182-1286) ku Belgium; St Gertrude the Great (1256-1301) ku Germany; St Mechtilde(1240-1298) ku Germany; St Catherine (1347-1380) kuSiena na St Margaret Mary Alacoque (1647-1690) kuFrance. Vapikiri vose ava vaigaro namata nekupfugamira Sakaramende Sande kwenguva refu, Inova ndiyo nguva yaizviratidza Mambo Yesu Kristo kwavari, asi Mambo Yesu Kristo vakapa basa guru rokuvamba Chita kuna Margaret Mary
  </p>

  {/* Second Paragraph */}
  <p className="text-lg text-gray-700 leading-relaxed">
    MuZimbabwe, maPriste echiJesuit ndiwo akatanga kudzidzisa nezveMwoyo Musande Kwazvo waYesu muzvikoro zvemamisheni..Chita chakazotambirwa mu Salisbury yava kunzi Harare, mugore ra1966 chichitungamirirwa naMr. Stanislae Nyagomo vari Promoter nevamwe wavo. Mugore ra2006, mushure mokunge zvaonekwa kuti Chita chava muma diocese mazhinji MuZimbabwe, Bishop Patrick Mutume vakapa zano kudare ravatungamiri vechita myArchdiocese yeHarare kuti vabatanidze kufambiswa kwechita muma diocese..
  </p>
</div>



        {/* Goals Section */}
        <div className="space-y-6 px-4">
  {/* Heading with light font and left-aligned */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-center uppercase underline">
    Objectives
  </h2>

  {/* Objectives List */}
  <ul className="list-disc list-inside space-y-4 text-gray-700 text-md max-w-3xl mx-auto">
    <li>
      Kupa rukudzo nerutendo kuna Yesu kana kana tichinamata kuMwoyo wake Musande.
    </li>
    <li>
      Kuedza kudzorera rudo kurudo rwatakaratidzwa naYesu Kristo zvaakatifira pachipiyaniso, mwoyo wake ukabaiwa nepfumo.
    </li>
    <li>
      Kuparidza uMambo hwaMwari.
    </li>
    <li>
      Kuripira matadzo edu neevanhu vose (zvikurusei mweya irimupurigatoriyo).
    </li>
  </ul>
</div>





<div className="space-y-6 px-4">
  {/* Heading with light font and left-aligned */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-left uppercase underline">
    Additional Information
  </h2>

  {/* Information Paragraph */}
  <p className="text-lg text-gray-700 leading-relaxed">
    1. Guild session Sunday After 1000hrs Mass or Friday 1800hrs with Mwoyo Musande Adults
    <br />
    2. Meeting place at Football behind Hall
    <br />
    3. Who Joins The Guild-Wese akabapatidzwa achigamuchira Muviri neRopa raKristo..
    <br />
    4. Zvidzidzo kune vanoda kubatana nesu contact Arthur Hukama +263783 808 377 or Natasha Gurure +263 77 268 7366
    <br />
    5. It takes a period of 1 year 3 months or more to become a full member yechita CheMwoyo Musande Kwazvo waYesu; 9 months kuti upfeke ku purple side and 6 months kuti uzopfeka ku red side.
    <br />
    <br />
   
  </p>
</div>

<div className="flex justify-center py-8">
  <img
    src={process.env.PUBLIC_URL + '/images/15.jpg'} // Replace with the correct image path
    alt="Description of the "
    className="max-w-full h-auto rounded-lg"  // Ensures it's responsive
  />
</div>



        {/* NHOROO NDO YEMATANGIRO AKAITA C HITA */}
        <div className="space-y-6 px-4">
  {/* Heading with light font and left-aligned */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-left uppercase underline">
    Nhorondo Yematangiro Akaita Chita
  </h2>

  {/* Paragraph Styling */}
  <p className="text-lg text-gray-700 leading-relaxed">
    Vakomana navasikana vainge vorasa chitendero, vachiita mabasa erima mumusha
    weMbare. Vachiona izvi muna 1954, Baba Alois Nyanhete vakaona zvakanaka kuti vaumbe
    boka rinoita kuti vana vatize miteyo ya Satani vachichengetedza zvikuru utsvene hwavo. Pa
    St Peters, Mbare vachibatsirwa naBaba Henry Swift, vakatanga neboka revakomana avo
    vaifundisa kubatidza Misa. Nekufamba kwenguva, vakaunganidza zvevasikana vopa boka iri
    zita rokuti Agnes na Alois. Chita chazotanga kutekeshera kune imwe misha yakadai
    seMabvuku, Mufakose, Mtoko, Musami, Makumbi, Old neNew Highfield, Glen Norah
    neZengeza.
  </p>
</div>


        {/* Intention Section */}
        <div className="space-y-6 px-4">
  {/* Heading with light font and left-aligned */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-left uppercase underline">
    Vision
  </h2>

  {/* Paragraph Styling */}
  <p className="text-lg text-gray-700 leading-relaxed">
    Vakomana navasikana vanoziva Mwari, vadi navarwiri voutsvene, nhengo dzakasimba
    dzeKirike nevegari venyika vanozova vabereki navapikiri vakanaka vamangwana, vozopinda
    denga vachiva vasande sa Agnes na Alois.
  </p>
</div>


<div className="space-y-6 px-4">
  {/* Heading with light font and left-aligned */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-left uppercase underline">
    Mission
  </h2>

  {/* Paragraph Styling */}
  <p className="text-lg text-gray-700 leading-relaxed">
    Kuunganidza nekubatsira vasikana navakomana vanoda zvekunamata, Vana vakagamuchira
    Yesu muhupenyu hwavo, kubvira pahuduku hwavo kuti vave vanamati chaivo vechokwadi
    vanonamata Mwari mumweya nomuzvokwadi.
  </p>
</div>

<div className="space-y-6 px-4">
  {/* Heading with left-alignment and styling */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-left uppercase underline">
    Values
  </h2>

  {/* Values List with 3 rows for mobile-friendly layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700 leading-relaxed">
    <div>
      <p>1. Kuteerera</p>
      <p>2. Utsvene</p>
      <p>3. Kutsunga</p>
    </div>
    <div>
      <p>4. Rudo</p>
      <p>5. Kuzvinipisa</p>
      <p>6. Kuzvidzora</p>
    </div>
    <div>
      <p>7. Moyo murefu</p>
      <p>8. Rukudzo</p>
      <p>9. Mutsa</p>
    </div>
  </div>
</div>

<div className="space-y-6 px-4">
  {/* Heading with left-alignment and styling */}
  <h2 className="text-2xl font-medium text-[#005A9C] text-left uppercase underline">
    For our contacts under youth guilds, visit the contact page
  </h2>

  {/* Button to navigate to the contact page */}
  <a 
    href="/contact/ContactPage"
    className="block text-center py-3 px-6 mt-4 text-white bg-[#005A9C] rounded-md hover:bg-[#004a7c] transition duration-300"
  >
    Visit Contact Page
  </a>

  {/* Optional description or content */}
  <p className="text-lg text-gray-700 leading-relaxed mt-4">
  Let every Youth who wishes To Suffer, Love and Save Souls for Christ's sake come and Join The Most Sacred Heart Of Jesus Christ.
  </p>
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

export default YouthGuilds;




























