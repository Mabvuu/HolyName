import React, { useState } from "react";

const ContactPage = () => {
  const contacts = [
    {
      field: "Youth Guilds",
      numbers: [
        { name: "Chairperson: Emily Mari", number: "+263 777163212" },
        { name: "Vice: Rutendo", number: "+263 714123246" },
        { name: "Secretary: Serah Kuipa", number: "+263 776134320" },
        { name: "Advisor: Tete Nyamadzawo", number: "+263 719256270" },
        { name: "Sekuru: Bitirinyu", number: "+263 774744631" },
        { name: "Chairperson: Arthur Champiruka", number: "+263 783808377" },
        { name: "Secretary: Natasha Gurure", number: "+263 772687366" },
      ],
    },
    {
      field: "Family Apostolate Committee",
      numbers: [
       
      ],
    },
    {
      field: "Special Events Committee",
      numbers: [{ name: "Mr Felix Manyimbiri", number: "+263 772392965" }],
    },
    {
      field: "Sections",
      numbers:[
      {name: "Ms.C.Marange", number:"+263 772915882"},
     ]
    },
     {
      field: "Groups and Other Committees",
      numbers:[{name: "Panashe Takawira", number:"+263 773134303"},
     {name: "Mr Felix Manyimbiri", number:"+263 775063153"},
      {name: "Mr Felix Manyimbiri", number:"+263 789864886"}]
    },
    {
      field: "Adult Guild",
      numbers:[]
    }


    
  ];

  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (index) => {
    setVisibleSection(visibleSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-[#005A9C] mb-8">
          Contact Us
        </h1>
        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Section Header */}
              <div
                className="flex justify-between items-center p-4 bg-[#005A9C] text-white font-medium cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <span>{contact.field}</span>
                <span className="text-xl">
                  {visibleSection === index ? "▲" : "▼"}
                </span>
              </div>

              {/* Collapsible Section */}
              {visibleSection === index && (
                <div className="p-4 bg-gray-50 divide-y divide-gray-200">
                  {contact.numbers.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between py-3 items-center"
                    >
                      <span className="text-gray-700 font-semibold">
                        {item.name}
                      </span>
                      <a
                        href={`tel:${item.number}`}
                        className="text-[#BA0021] font-medium hover:underline"
                      >
                        {item.number}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="gmap-frame flex flex-col justify-center items-center pt-12">
  <h1 className="text-xl font-semibold mb-8">Here is where we are located</h1>
  <iframe
    title="Google Map - Holy Name Catholic Church"
    className="w-full sm:w-80 md:w-96 lg:w-1/2 h-56 sm:h-64 md:h-80 lg:h-96"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=17%20Wessex%20Dr%20Harare+(Holy%20Name%20Catholic%20Church)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
    <a href="https://www.gps.ie/">gps vehicle tracker</a>
  </iframe>
</div>


    </div>
  );
};

export default ContactPage;
