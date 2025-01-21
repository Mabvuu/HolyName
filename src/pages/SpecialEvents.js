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
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            To Vatican With Love Pilgrimage
          </h2>
          <p className="mb-4">
            Special committee formulated to organize the upcoming pilgrimage. It
            comprises members from the Ministry of Matrimony and Fellow Parishioners.
          </p>
          <ul className="space-y-2 text-lg">
            <li><strong>Chairman:</strong> Mr. Felix Manyimbiri</li>
            <li><strong>Vice Chairman:</strong> Dr. Lawrence Nyika</li>
            <li><strong>Communications:</strong> Mrs. Michelle T. Hombasha</li>
            <li><strong>Secretary:</strong> Mrs. Tafadzwa Chimbetete</li>
            <li><strong>Second Secretary:</strong> Mr. E. Mujera</li>
            <li><strong>Logistics:</strong> Mrs. Chigayo</li>
          </ul>
        </section>

        {/* Ministry of Matrimony */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#BA0021] mb-4">
            Ministry of Matrimony
          </h2>
          <ul className="space-y-2 text-lg">
            <li><strong>Chairperson:</strong> Mr. Felix Manyimbiri</li>
            <li>
              <strong>Committee Members:</strong>
              Mrs. Taona Choto, Mr. Tafadzwa Choto, Mr. E. Mujera, Mrs. Modesta Mujera, 
              Mrs. Michelle T. Hombasha, Mr. Takunda Hombasha, Mr. Mushonga, Mrs. Mushonga, 
              Mr. Sekanevana, Mrs. Sekanevana, Sekuru Moyo, Gogo Moyo, Mr. Hanga, Mrs. Hanga
            </li>
          </ul>
        </section>

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
