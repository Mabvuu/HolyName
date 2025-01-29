// SpecialEvents.js
import React from "react";
import { useNavigate } from "react-router-dom";

const SpecialEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-[#005A9C] mb-6">
          Special Events Committee
        </h1>

        {/* Main Committee */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            Main Committee
          </h2>
          <ul className="space-y-2 text-lg">
            <li><strong>Chair:</strong> Mrs. Michelle T Hombasha</li>
            <li><strong>Vice:</strong> Mr. Tapiwa Utete</li>
            <li><strong>Special Advisor:</strong> Mrs. Joyce Letitia Kazembe</li>
            <li><strong>Secretary:</strong> Mr. Gift Dzingiso</li>
            <li><strong>Vice Secretary:</strong> Mrs. Patricia Moyo</li>
            <li>
              <strong>Committee Members:</strong> 
              Mr. Christopher Mamhiwa, Mrs. Pauline Manyaya, Mr. Mpakati, Mrs. Tendai L. Doba
            </li>
          </ul>
        </section>

        {/* Pilgrimage Committee */}
       
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-800 space-y-6">
  <h2 className="text-3xl font-semibold text-center text-[#005A9C]">About the Committee</h2>
  <p className="text-lg leading-relaxed">
    The Special Events Committee plays a vital role in the parish, responsible for planning and coordinating special celebrations and events that bring the community together. This committee is instrumental in organizing feast celebrations, anniversaries, and other significant events that mark important milestones in the life of the parish.
  </p>
  <p className="text-lg leading-relaxed">
    One of the committee's notable annual traditions is coordinating with the Pope's office to obtain special signed marriage certificates from the Pope for couples celebrating round wedding anniversaries. This thoughtful gesture adds a touching and personal element to the couples' celebrations.
  </p>
  <p className="text-lg leading-relaxed">
    In recent years, the Special Events Committee has successfully organized several high-profile events. In 2017, they spearheaded the parish's 60th-anniversary celebrations, which were a resounding success. More recently, in 2023, they organized a memorable anniversary celebration for Fr. Ndhlalambi, marking a significant milestone in his ministry.
  </p>
  <p className="text-lg leading-relaxed">
    Most recently, the committee organized the activities for the celebration of the Holy Name Feast Day, held on February 2, 2025. This event brought the parish community together to honor the Holy Name of Jesus and to reflect on the parish's patronage.
  </p>
  <p className="text-lg leading-relaxed">
    Through their hard work and dedication, the Special Events Committee continues to create lasting memories for the parish community, fostering a sense of unity, joy, and celebration.
  </p>
</div>

        

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => navigate("/events")}
            className="bg-[#005A9C] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#00457a] transition"
          >
            Visit Events Page
          </button>
          <button
            onClick={() => navigate("/contact/ContactPage")}
            className="bg-[#BA0021] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#97001a] transition"
          >
            Go to Contact Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialEvents;
