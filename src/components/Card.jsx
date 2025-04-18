import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";
import ContactForm from "./ContactForm"

const Card = ({ data }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      <div className="md:w-3/12 w-5/12 m-3 rounded-lg overflow-hidden bg-[#dff391] shadow-lg hover:shadow-xl transition-shadow duration-300 card-fade-in">
        <div className="relative space-y-2">
          <img
            className="w-full md:h-[15rem] h-[10rem] object-cover rounded-t-lg"
            src={data.img}
            alt={data.title}
          />
          <div className="flex md:p-4 p-2 items-center">
            <div className="pr-2 space-y-2 w-10/12">
            <h1 className="md:text-2xl text-lg font-ralewayB text-[#005b4c] text-start leading-snug truncate">
  {data.title}
</h1>

              <p className="font-ralewayM text-[#006a58] text-xs md:text-sm text-start multiline-ellipsis">
                {data.description || data.tests}
              </p>
            </div>
            <button className="cursor-pointer rounded-full md:w-10 md:h-10 border border-[#005b4c] flex items-center justify-center hover:bg-[#005b4c] transition-colors duration-300">
              <IoIosArrowForward className="text-[#005b4c] hover:text-white transition-colors duration-300 w-5 h-5" />
            </button>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex border p-1 rounded border-gray-600 cursor-pointer hover:bg-[#005b4c] group m-auto my-2 md:w-4/12 justify-center items-center space-x-1.5"
          >
            <AiOutlineFileDone className="md:w-6 md:h-6 group-hover:text-[#dff391]" />
            <span className="font-ralewaySb text-xs md:text-sm group-hover:text-[#dff391]">
              Book Now
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
