import React, { useState } from "react";

const Events = () => {
  const events = [
    { number: 1, title: 'Fundraising Car Wash (All Youth Guilds)', date: '12 January ' },
    { number: 2, title: 'Recollection (All Youth Guilds)', date: '18 January' },
    { number: 3, title: 'Guild Reception (All Youth Guilds)', date: '19 January' },
    { number: 4, title: 'Parish Visit', date: '16 February' },
    { number: 5, title: 'Pilgrimage Maria Chitubu (All Youth Guilds)', date: '15-16 March' },
    { number: 6, title: 'Fundraising Traditional Foods', date: '25 May' },
    { number: 7, title: 'CORPUS CHRISTI SACRED HEART FEAST DAY (TBA)', date: '22 June' },
    { number: 8, title: 'THE DAY OF THE MOST SACRED HEART DAY (FEAST TBA)', date: '27 June' },
    { number: 9, title: 'Recollection (All Youth Guilds)', date: '28 June' },
    { number: 10, title: 'Guild Reception (All Youth Guilds)', date: '29 June' },
    { number: 11, title: 'Prayer Day', date: '10 August' },
    { number: 12, title: 'Combined Braai (All Youth Guilds)', date: '11 October' },
    { number: 13, title: 'St Margaret Mary Feast Day (TBA)', date: '16 October' },
    { number: 14, title: 'SHJ Pilgrimage Charlotte Brook', date: '9 November' },
    { number: 15, title: 'CHRIST THE KING SHJ FEAST DAY (TBA)', date: '23 November' },
    { number: 16, title: 'Agnes Day', date: '21 January' },
    { number: 17, title: 'Alois Day', date: '21 January' },
    { number: 18, title: 'Mothers Day', date: '11 May' },
    { number: 19, title: 'Fathers Day', date: '15 June' },
    { number: 20, title: 'International Widows Day', date: '23 June' },
    { number: 21, title: 'Grandparents Day and the Ederly', date: '27 July' },
    { number: 22, title: 'Senior Citizens Day', date: '21 August' },
    { number: 23, title: 'Round Wedding Anniversaries', date: '17 August' },
    { number: 24, title: 'Widows and Widowers requested Day', date: '14 September' },
    { number: 25, title: 'World day of the poor', date: '17 November' },
    { number: 26, title: 'interdenominational gathering', date: '18 May' },
    { number: 27, title: 'Visit to Our Lady of perpetual help shrine in Charlotte Brook ', date: '01 February' },
    { number: 28, title: 'Our Lady of Fatima', date: '15 May' },
    { number: 29, title: 'Visitation of our Lady', date: '31 May' },
    { number: 30, title: 'Retreat', date: '20 June-22 June' },
    { number: 31, title: 'Our lady of Mount Carmel', date: '16 July' },
    { number: 32, title: 'Assumption of Our Lady', date: '15 August ' },
    { number: 33, title: 'Mary Queen of Peace', date: '22 August' },
    { number: 34, title: 'The Nativity of the Blessed Virgin Mary', date: '8 September' },
    { number: 35, title: '15 September', date: 'Our lady of Sorrows' },
    { number: 36, title: 'Our lady of the Rosary.', date: '7 October' },
    { number: 37, title: 'The presentation of the Blessed Virgin Mary', date: '21 Novembe' },
    { number: 38, title: 'Immaculate Conception', date: '8 December' },
    { number: 39, title: 'Guild Christmas party ', date: '7 December' },
    { number: 40, title: 'Solemnity of Mary, the holy mother of God ', date: '1 January' },
    { number: 41, title: 'Saint Basil and Gregory ', date: '2 January' },
    { number: 42, title: 'Most Holy Name of Jesus ', date: '3 January' },
    { number: 43, title: 'The Epiphany of the Lord', date: '5 Janaury' },
    { number: 44, title: 'Saint Anthony', date: '17 January' },
    { number: 45, title: 'The Baptism of the Lord', date: '12 January' },
    { number: 46, title: 'Saint Francis de sales', date: '24 January' },
    { number: 47, title: 'The conversion of Saint Paul', date: '25 January' },
    { number: 48, title: 'Saints Timothy and Titus', date: '26 January' },
    { number: 49, title: 'Saint John Bosco', date: '31 January' },
    { number: 50, title: 'THE PRESENTATION OF THE LORD', date: '2 February' },
    { number: 51, title: 'Saint Agatha', date: '5 February' },
    { number: 52, title: 'Saints Paul Miki and Companions', date: '6 February' },
    { number: 53, title: 'Saint Scholastica', date: '10 February' },
    { number: 54, title: 'Our Lady of Lourdes', date: '11 February' },
    { number: 55, title: 'ASH WEDNESDAY', date: '5 March' },
    { number: 56, title: 'CHAIR OF ST PETER', date: '22 February' },
    { number: 57, title: 'Saint Polycarp (commemoration)', date: '23 February' },
    { number: 58, title: 'Saints Perpetua and Felicity (commemoration)', date: '7 March' },
    { number: 59, title: 'Saint Joseph, Spouse of the Blessed Virgin Mary', date: '19 March' },
    { number: 60, title: 'PASSION SUNDAY (PALM SUNDAY)', date: '13 April' },
    { number: 61, title: 'HOLY THURSDAY', date: '17 April' },
    { number: 62, title: 'GOOD FRIDAY', date: '18 April' },
    { number: 63, title: 'THE EASTER VIGIL', date: '19 April' },
    { number: 64, title: 'EASTER SUNDAY', date: '20 April' },
    { number: 65, title: 'EASTER MONDAY', date: '21 April' },
    { number: 66, title: 'THE ANNUNCIATION OF THE LORD', date: '8 April' },
    { number: 67, title: 'Saint Mark', date: '26 April' },
    { number: 68, title: 'Saint Catherine of Siena', date: '29 April' },
    { number: 69, title: 'Saint Pius V', date: '30 April' },
    { number: 70, title: 'Saint Joseph the Worker', date: '1 May' },
    { number: 71, title: 'Saint Athanasius', date: '2 May' },
    { number: 72, title: 'Saints Philip and James', date: '3 May' },
    { number: 73, title: 'EASTER', date: '5 May' },
    { number: 74, title: 'THE ASCENSION OF THE LORD', date: '1 June' },
    { number: 75, title: 'Our Lady of Fatima', date: '13 May' },
    { number: 76, title: 'Saint Matthias', date: '14 May' },
    { number: 77, title: 'PENTECOST', date: '8 June' },
    { number: 78, title: 'Mary, Mother of the Church', date: '9 June' },
    { number: 79, title: 'OUR LADY, HELP OF CHRISTIANS - BLESSED VIRGIN MARY', date: '24 May' },
    { number: 80, title: 'THE MOST HOLY TRINITY', date: '26 May' },
    { number: 81, title: 'The Visitation of the Blessed Virgin Mary', date: '31 May' },
    { number: 82, title: 'THE MOST HOLY BODY AND BLOOD OF CHRIST', date: '2 June' },
    { number: 83, title: 'THE MOST SACRED HEART OF JESUS', date: '27 JUne' },
    { number: 84, title: 'THE MOST IMMACULATE HEART OF MARY', date: '8 June' },
    { number: 85, title: 'ORDINARY TIME', date: '9 June' },
    { number: 86, title: 'Saint Barnabas', date: '11 June' },
    { number: 87, title: 'Saint Anthony of Padua', date: '13 June' },
    { number: 88, title: 'Saint Aloysius Gonzaga', date: '21 June' },
    { number: 89, title: 'CORPUS CHRISTI', date: '22 June' },
    { number: 90, title: 'THE NATIVITY OF SAINT JOHN THE BAPTIST', date: '24 June' },
    { number: 91, title: 'Saints Peter and Paul', date: '29 June' },
    { number: 92, title: 'Saint Thomas', date: '3 July' },
    { number: 93, title: 'HOLY TRINITY', date: '15 June' },
    { number: 94, title: 'Saint Benedict', date: '11 July' },
    { number: 95, title: 'Saint Bonaventure', date: '15 July' },
    { number: 96, title: 'Our Lady of Mount Carmel', date: '16 July' },
    { number: 97, title: 'Saint Mary Magdalene', date: '22 July' },
    { number: 98, title: 'Saint James', date: '25 July' },
    { number: 99, title: 'Saints Joachim and Anne', date: '26 July' },
    { number: 100, title: 'Saints Martha, Mary and Lazarus', date: '29 July' },
    { number: 101, title: 'Saint Ignatius Loyola', date: '31 July' },
    { number: 102, title: 'Saint Alphonsus Liguori', date: '1 August' },
    { number: 103, title: 'The Transfiguration Of The Lord', date: '6 August ' },
    { number: 104, title: 'Saint Dominic', date: '8 August' },
    { number: 105, title: 'Saint Maximilian Kolbe', date: '14 August' },
    { number: 106, title: 'THE ASSUMPTION OF THE BLESSED VIRGIN MARY', date: '15 August' },
    { number: 107, title: 'Saint Bernard', date: '20 August' },
    { number: 108, title: 'Saint Pius X', date: '21 August' },
    { number: 109, title: 'The Queenship of the Blessed Virgin Mary', date: '22 August ' },
    { number: 110, title: 'Saint Bartholomew', date: '24 August' },
    { number: 111, title: 'Saint Monica', date: '27 August' },
    { number: 112, title: 'Saint Augustine', date: '28 August' },
    { number: 113, title: 'The Passion of Saint John the Baptist', date: '29 August ' },
    { number: 114, title: 'Saint Gregory the Great', date: '3 September' },
    { number: 115, title: 'The Most Holy Name of Mary', date: '12 September' },
    { number: 116, title: 'Saint John Chrysostom', date: '13 September' },
    { number: 117, title: 'THE EXALTATION OF THE HOLY CROSS', date: '14 Septenber' },
    { number: 118, title: 'Saints Cornelius and Cyprian', date: '16 September' },
    { number: 119, title: 'Saints Andrew Kim Taegon and Paul Chong Hasang and companions', date: '20 September' },
    { number: 120, title: 'Saint Matthew', date: '21 September' },
    { number: 121, title: 'Saint Pius of Pietrelcina', date: '23 September' },
    { number: 122, title: 'Saint Vincent de Paul', date: '27 September' },
    { number: 123, title: 'Saint Jerome', date: '30 September' },
    { number: 124, title: 'Saint Therese of the Child Jesus', date: '1 October ' },
    { number: 125, title: 'The Holy Guardian Angels', date: '2 October' },
    { number: 126, title: 'Saint Francis of Assisi', date: '4 October' },
    { number: 127, title: 'Our Lady of the Rosary', date: '7 October' },
    { number: 128, title: 'Saint Teresa of Jesus', date: '15 October' },
    { number: 129, title: 'Saint Margaret Mary Alacoque', date: '16 October' },
    { number: 130, title: 'Saint Ignatius of Antioch', date: '17 October' },
    { number: 131, title: 'Saint Luke', date: '18 October' },
    { number: 132, title: 'Saints Simon and Jude', date: '28 October' },
    { number: 133, title: 'ALL SOULS', date: '1 November ' },
    { number: 134, title: 'ALL SAINTS - COMMEMORATION OF ALL THE FAITHFUL DEPARTED', date: '2 November' },
    { number: 135, title: 'Saint Charles Borromeo', date: '4 November' },
    { number: 136, title: 'The Presentation of the Blessed Virgin Mary', date: '21 November' },
    { number: 137, title: 'Saint Cecilia', date: '22 November' },
    { number: 138, title: 'OUR LORD JESUS CHRIST, KING OF THE UNIVERSE', date: '24 November' },
    { number: 139, title: 'FIRST SUNDAY OF ADVENT', date: '1 December' },
    { number: 140, title: 'Saint Francis Xavier', date: '3 December' },
    { number: 141, title: 'Saint Ambrose', date: '7 December' },
    { number: 142, title: 'THE IMMACULATE CONCEPTION OF THE BLESSED VIRGIN MARY', date: '9 December' },
    { number: 143, title: 'Saint Lucy', date: '13 December' },
    { number: 144, title: 'Saint John of the Cross', date: '14 December' },
    { number: 145, title: 'THIRD SUNDAY OF ADVENT', date: '15 December' },
    { number: 146, title: 'FOURTH SUNDAY OF ADVENT', date: '22 December' },
    { number: 147, title: 'THE NATIVITY OF THE BIRTH OF OUR LORD - CHRISTMASS', date: '25 December' },
    { number: 148, title: 'Saint Stephen', date: '26 December' },
    { number: 149, title: 'Saint John', date: '27 December' },
    { number: 150, title: 'THE HOLY INNOCENTS', date: '28 December' },
    { number: 151, title: 'THE HOLY FAMILY OF JESUS, MARY, AND JOSEPH', date: '29 December' },
    // Add more events here...
  ];

  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredEvents, setFilteredEvents] = useState(events);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = events.filter(
      (event) =>
        event.title.toLowerCase().includes(value) ||
        event.date.toLowerCase().includes(value)
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center text-[#BA0021] mb-6">Events</h1>
      <p className="text-center text-lg font-semibold text-[#005A9C] mb-8">The Events Calendar</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={handleSearch}
        className="border rounded px-4 py-2 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
      />

      {/* Events Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#005A9C] text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <tr key={event.number} className="even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{event.number}</td>
                <td className="border border-gray-300 px-4 py-2">{event.title}</td>
                <td className="border border-gray-300 px-4 py-2">{event.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">
                No events found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Events;
