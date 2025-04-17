import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ data }) => {
  return (
    <div className="md:w-3/12 w-5/12 m-3 rounded-lg overflow-hidden bg-[#dff391] shadow-lg hover:shadow-xl transition-shadow duration-300 card-fade-in">
      <div className="relative space-y-2">
        <img
          className="w-full h-[15rem] object-cover rounded-t-lg"
          src={data.img}
          alt={data.title}
        />
        <div className="flex md:p-4 p-2 items-center">
          <div className="pr-2 space-y-2 w-10/12">
            <h1 className="md:text-2xl text-lg font-ralewayB text-[#005b4c] leading-snug">
              {data.title}
            </h1>
            <p className="font-ralewayM text-[#006a58] text-xs md:text-sm  multiline-ellipsis">
              {data.description}
            </p>
          </div>
          <button className="cursor-pointer rounded-full w-10 h-10 border border-[#005b4c] flex items-center justify-center hover:bg-[#005b4c] transition-colors duration-300">
            <IoIosArrowForward className="text-[#005b4c] hover:text-white transition-colors duration-300 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
