import React, { useState } from "react";
import { faFacebook,  faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactPage = () => {
  const contacts = [
    {
      field: "Contacts",
      subFields: [
        {
          subField: "Parish Office",
          numbers: [
            {
              number: "+263 242 306345",
              email: "holynamemabelreign@gmail.com",
            },
           
          ],
        },
        {
          subField: "Parish Priest",
          numbers: [
            {
              name: "Fr Ndhlalambi",
              number: "+263772402220",
              email: "jndhlalambi@gmail.com",
            },
          ],
        },
        {
          subField: " Assistant Parish Priest",
          numbers: [
            {
              name: "Fr Jingisoni",
              number: "+263772300024",
              email: "giftjingison@gmail.com",
            },
          ],
        },
      ],
    },
    {
      field: "Guilds",
      subFields: [
        {
          subField: "Emily Mari",
          numbers: [
            {
              name: "Emily Mari",
              number: "+263777163212",
            },
           
          ],
        },
        {
          subField: "Sacred Heart Youth Guild:",
          numbers: [
            {
              name: "Chairperson: Arthur Hukama",
              number: "+263 783808377",
            },
           
          ],
        },
        {
          subField: "Hosi Yedenga:",
          numbers: [
            {
              name: "Mrs M Choto",
              number: "+263772847374",
             
            },
            {
              name: "Mrs P Mautsa",
              number: "+263733756454",
             
            },
           
          ],
        },
      ],
    },
    {
      field: "Sections",
      subFields: [
        {
          subField: "Parachute Regiment",
          numbers: [
            {
              name: "Mr V Mudimu",
              number: "+263773382139",
            },
           
          ],
        },
        {
          subField: "Bloomingdale",
          numbers: [
            {
              name: "Mr Chisuro",
              number: "+263781907444",
            },
           
          ],
        },
        {
          subField: "Meyrick Park:",
          numbers: [
            {
              name: "Mrs Thoko Nyandoro",
              number: "+263772423383",
            },
           
          ],
        },
      ],
    },
    {
      field: "Groups",
      subFields: [
        {
          subField: "SOCCOM",
          numbers: [
            {
              name: "Mr D Kunaka",
              number: "+263 775063153",
            },
            {
              name: "Hunter Mupfurutsa",
              number: "+263 789864886",
            },
            
          ],
        },
        {
          subField: "Catechesis",
          numbers: [
            {
              name: "Mr Felix Manyimbiri",
              number: "+263772392965",
            },
            
          ],
        },
        {
          subField: "Ministry of Matrimony:",
          numbers: [
            {
              name: "Mr Felix Manyimbiri",
              number: "+263772392965",
            },
            
          ],
        },
        {
          subField: "Family Apostolate",
          numbers: [
            {
              name: "Ms Leonora Mawire",
              number: "+263 774161458",
            },
            
          ],
        },
      ],
    },
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
                  {contact.subFields.map((subField, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-gray-800 font-semibold text-lg">
                        {subField.subField}
                      </h3>
                      {subField.numbers.map((item, idx) => (
                        <div key={idx} className="py-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">{item.name}</span>
                            <a
                              href={`tel:${item.number}`}
                              className="text-[#BA0021] font-medium hover:underline"
                            >
                              {item.number}
                            </a>
                          </div>
                          <div className="mt-1">
                            <a
                              href={`mailto:${item.email}`}
                              className="text-blue-600 font-medium hover:underline"
                            >
                              {item.email}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="gmap-frame flex flex-col justify-center items-center pt-12">
  <h1 className="text-lg font-semibold mb-8">
    The church is located at 17 Wessex Drive, Mabelreign, Harare
  </h1>
  <div className="bg-gradient-to-r from-blue-400 to-red-200 rounded-lg shadow-md p-6 w-[80%] max-w-md mx-auto h-[20%] mb-8">

    <h2 className="text-xl font-medium text-gray-800 mb-4">Connect with us</h2>
    <div className="flex justify-center space-x-8">
                 <button
                   className="text-2xl hover:scale-110 transition-transform hover:text-red-500"
                   onClick={() => window.open('https://www.facebook.com/holynamezw', '_blank')}
                 >
                   <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                   Facebook
                 </button>
                 <button
                   className="text-2xl hover:scale-110 transition-transform hover:text-red-500"
                   onClick={() =>
                     window.open(
                       'https://www.instagram.com/holy_name.parish?igsh=MTFubWdhb2RzNWo1NA==',
                       '_blank'
                     )
                   }
                 >
                   <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                   Instagram
                 </button>
    </div>
  </div>
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

  {/* Social Media and Email Links */}
  
</div>

    </div>
  );
};

export default ContactPage;
