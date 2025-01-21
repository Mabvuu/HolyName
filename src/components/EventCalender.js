import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const EventCalendar = () => {
  const events = [
    { date: '2025-01-12', title: 'Fundraiser Car wash', link: '/events' },
    { date: '2025-01-18', title: 'Recollection (All Youth Guilds)', link: '/events' },
    { date: '2025-01-19', title: 'Guild reception', link: '/events' },
    { date: '2025-01-21', title: 'Agnes and Alois Day', link: '/events' },
    { date: '2025-02-16', title: 'Parish Visit', link: '/events' },
    { date: '2025-03-15', title: 'Pilgrimage Maria Chitubu (All Youth Guilds)', link: '/events' },
    { date: '2025-03-16', title: 'Pilgrimage Maria Chitubu (All Youth Guilds)', link: '/events' },
    { date: '2025-05-25', title: 'Fundraising Traditional Foods', link: '/events' },
    { date: '2025-06-22', title: 'CORPUS CHRISTI SACRED HEART FEAST DAY', link: '/events' },
    { date: '2025-06-27', title: 'THE DAY OF THE MOST SACRED HEART DAY (FEAST TBA)', link: '/events' },
    { date: '2025-06-28', title: 'Recollection (All Youth Guilds)', link: '/events' },
    { date: '2025-06-29', title: 'Guild Reception (All Youth Guilds)', link: '/events' },
    { date: '2025-08-10', title: 'Prayer Day', link: '/events' },
    { date: '2025-10-11', title: 'Combined Braai (All Youth Guilds)', link: '/events' },
    { date: '2025-10-16', title: 'St. Margaret Mary Feast Day', link: '/events' },
    { date: '2025-11-09', title: 'SHJ Pilgrimage Charlotte Brook', link: '/events' },
    { date: '2025-11-23', title: 'CHRIST THE KING SHJ FEAST DAY', link: '/events' },
    { date: '2025-05-11', title: 'Mothers Day', link: '/events' },
    { date: '2025-06-15', title: 'Fathers Day', link: '/events' },
    { date: '2025-06-23', title: 'International Widows Day', link: '/events' },
    { date: '2025-07-27', title: 'Grandparents Day and the elderly', link: '/events' },
    { date: '2025-08-17', title: 'Round Wedding Anniversaries', link: '/events' },
    { date: '2025-08-14', title: 'Widows & Widowers', link: '/events' },
    { date: '2025-11-17', title: 'World Day of the Poor', link: '/events' },
    { date: '2025-08-21', title: 'Senior Citizens Day', link: '/events' },
    { date: '2025-05-18', title: 'interdenominational gathering', link: '/events' },
    { date: '2025-12-07', title: 'Guilds Christmas Party', link: '/events' },
    { date: '2025-12-08', title: 'Immaculate Conception', link: '/events' },
    { date: '2025-11-21', title: 'The presentation of the Blessed Virgin Mary', link: '/events' },
    { date: '2025-10-07', title: 'Our lady of the Rosary.', link: '/events' },
    { date: '2025-09-15', title: 'Our lady of Sorrows', link: '/events' },
    { date: '2025-09-08', title: 'The Nativity of the Blessed Virgin Mary', link: '/events' },
    { date: '2025-09-11', title: 'The Nativity of the Blessed Virgin Mary Feast', link: '/events' },
    { date: '2025-08-22', title: 'Mary Queen of Peace', link: '/events' },
    { date: '2025-08-15', title: 'Assumption of Our Lady', link: '/events' },
    { date: '2025-07-16', title: 'Our lady of Mount Carmel', link: '/events' },
    { date: '2025-06-20', title: 'Start of Retreat', link: '/events' },
    { date: '2025-06-22', title: 'End of Retreat', link: '/events' },
    { date: '2025-05-31', title: 'Visitation of our Lady', link: '/events' },
    { date: '2025-05-13', title: 'Our Lady of Fatima', link: '/events' },
    { date: '2025-03-25', title: 'Annunciation of the Lord', link: '/events' },
    { date: '2025-02-01', title: 'COMBINED CHITA-THEME REBUILDING THE WALLS OF JERUSALE', link: '/events' },
    { date: '2025-02-11', title: 'Our lady of Lourdes', link: '/events' },
  ];

  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    const clickedDate = date.toLocaleDateString('en-CA'); // Correct date formatting
    const event = events.find((e) => e.date === clickedDate);
    if (event) {
      navigate(event.link);
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <a
        href="#mass-times"
        onClick={(e) => {
          e.preventDefault();
          setShowCalendar(!showCalendar);
        }}
        className="fixed bottom-4 right-4 flex items-center space-x-2 bg-[#005A9C] text-white text-lg px-3 py-2 rounded-full shadow-lg hover:bg-[#00457a] transition"
      >
        <FontAwesomeIcon icon={faCalendarDays} />
        <span>Events Calender</span>
      </a>

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-60">
          <div className="bg-[#BA0021] p-6 rounded-lg shadow-lg relative w-[90%] sm:w-[60%] md:w-[40%]">
            {/* Close Button */}
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-2 right-2 text-lg text-white"
            >
              ×
            </button>

            {/* Calendar */}
            <Calendar
              onChange={setDate}
              value={date}
              tileClassName={({ date }) => {
                const formattedDate = date.toLocaleDateString('en-CA');
                return events.some((event) => event.date === formattedDate)
                  ? 'highlighted'
                  : null;
              }}
              onClickDay={handleDateClick}
              tileContent={({ date }) => {
                const formattedDate = date.toLocaleDateString('en-CA');
                const event = events.find((e) => e.date === formattedDate);
                return event ? (
                  <div className="event-notification" title={event.title}>
                    <span role="img" aria-label="event" className="text-white">✨</span>
                  </div>
                ) : null;
              }}
            />

            {/* Highlight Style */}
            <style>
              {`
                .react-calendar {
                  background-color: #BA0021 !important;
                  color: black !important;
                }

                .react-calendar__tile {
                  color: black !important;
                }

                .highlighted {
                  background-color: #005A9C !important;
                  color: white !important;
                }

                .event-notification {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 14px;
                  background-color: #FFD700;
                  border-radius: 50%;
                  padding: 2px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }

                .event-notification:hover {
                  background-color: #FFB800;
                  cursor: pointer;
                }
              `}
            </style>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
