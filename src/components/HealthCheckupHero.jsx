import React from "react";
import heroImg from "../assets/Images/bg-service.jpg"; // Replace with actual image path
import { MoveRight } from "lucide-react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiHeartOrgan } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";
import { SquareChartGantt } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthCheckupHero = () => {
    const navigate = useNavigate();
  return (
    <section className="w-full font-ralewayB bg-gradient-to-r from-white via-gray-50 to-white py-12 px-4 md:px-10 lg:px-20">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div className="space-y-6 animate-fadeInUp">
          <h1 className="text-3xl md:text-5xl font-bold text-[#a01a5a] leading-tight">
            Prioritize Your Health with Regular Checkups
          </h1>
          <p className="text-gray-600 font-ralewayR text-base md:text-lg leading-relaxed">
            Regular health checkups help detect potential health issues
            early—before they become serious. From monitoring vital organs to
            identifying hidden deficiencies, preventive care plays a key role in
            maintaining a healthy, stress-free life. Stay proactive with our
            tailored health screening packages designed for all age groups and
            lifestyles.
          </p>

          <ul className="space-y-4 border border-[#a01a5a]/20 p-2 mt-4">
            <li className="flex justify-start items-center gap-3 text-gray-700 text-sm md:text-base">
              <MdOutlineHealthAndSafety className="text-green-600 text-xl w-10 h-10 min-w-[24px]" />
              <span>
                Detect chronic diseases early like diabetes, hypertension, and
                heart conditions
              </span>
            </li>
            <li className="flex justify-start items-center gap-3 text-gray-700 text-sm md:text-base">
              <GiHeartOrgan className="text-red-600 text-xl w-7 h-8  " />
              <span>Track vital health markers and organ functions</span>
            </li>
            <li className="flex justify-start items-center gap-3 text-gray-700 text-sm md:text-base">
              <RiMentalHealthLine className="text-indigo-600 text-xl w-10 h-10  " />
              <span>Ensure complete peace of mind for you and your family</span>
            </li>
            <li className="flex justify-start items-center gap-3 text-gray-700 text-sm md:text-base">
              <SquareChartGantt className="text-yellow-600 text-xl w-10 h-10  " />
              <span>
                Boost productivity and mental wellness through preventive care
              </span>
            </li>
          </ul>

          <button  onClick={() => navigate("/packages")}  className="mt-4 inline-flex items-center bg-[#a01a5a] text-white px-6 py-3 rounded-xl shadow cursor-pointer hover:bg-[#66334c] transition duration-300">
            Explore Checkup Packages
            <MoveRight className="ml-2" />
          </button>
        </div>

        {/* Image */}
        <div className="animate-fadeInRight">
          <img
            src={heroImg}
            alt="Regular Health Checkup Illustration"
            className="w-full h-auto rounded shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthCheckupHero;
