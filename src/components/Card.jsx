import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";
import ContactForm from "./ContactForm";
import { BiSolidOffer } from "react-icons/bi";

import CardDetail from "./CardDetail";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ data, type }) => {
  const percentageOff =
    data?.ActualPrice && data?.OfferPrice
      ? Math.round(
          ((data.ActualPrice - data.OfferPrice) / data.ActualPrice) * 100
        )
      : null;

  const [showForm, setShowForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      {showDetail && (
        <CardDetail
          type={type}
          bookNow={() => setShowForm(true)}
          onClose={() => setShowDetail(false)}
          data={data}
        />
      )}
      <div className="relative md:w-3/12 w-full md:m-3 my-2 mx-4 rounded-lg overflow-hidden bg-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 card-fade-in">
        {/* {percentageOff && (
          <div className="absolute right-0 z-10 flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-lg space-x-1 px-4 py-1 shadow-lg ">
          <BiSolidOffer className="w-6 h-6"/>
            {percentageOff}% Off
          </div>
        )} */}
        <div className="relative space-y-2">
          <img
            className="w-full md:h-[15rem] h-[10rem] object-cover rounded-t-lg"
            src={data.img}
            alt={data.title}
          />
          <div className="flex md:p-4 p-2 items-center">
            <div className="pr-2 space-y-2 w-10/12">
              <h1
                data-aos="fade-right"
                className="md:text-2xl text-lg font-ralewayB text-[#a01a5a] text-start leading-snug break-words"
              >
                {data.title}
              </h1>

              <p className="font-ralewayM text-[#6e0035a9] text-sm md:text-sm text-start multiline-ellipsis">
                {data.description || data.tests}
              </p>
            </div>
            <button
              onClick={() => setShowDetail(true)}
              className="cursor-pointer rounded-full md:w-10 md:h-10 border border-[#a01a5a] flex items-center justify-center hover:bg-[#a01a5a] transition-colors duration-300"
            >
              <IoIosArrowForward className="text-[#a01a5a] hover:text-white transition-colors duration-300 w-5 h-5" />
            </button>
          </div>

          {data?.ActualPrice && (
            <div className="flex flex-row p-1 md:px-4 px-2 justify-between border border-gray-300 rounded">
              <h1 className="font-ralewayM">
                Actual Price :{" "}
                <span className="text-red-500 font-semibold font-sans">
                  {data.ActualPrice} ₹
                </span>
              </h1>
              {data?.OfferPrice && (
                <h1 className="font-ralewayM">
                  Offer Price :{" "}
                  <span className="text-green-500 font-semibold font-sans">
                    {data.OfferPrice} ₹
                  </span>
                </h1>
              )}
            </div>
          )}
          <button
            onClick={() => setShowForm(true)}
            className="flex border p-1 rounded border-[#a01a5a] cursor-pointer hover:bg-[#a01a5a] group m-auto my-2 md:w-4/12 justify-center items-center space-x-1.5"
          >
            <AiOutlineFileDone className="md:w-6 md:h-6 group-hover:text-[rgba(255,164,208,1)]" />
            <span className="font-ralewaySb text-sm group-hover:text-[rgba(255,164,208,1)]">
              Book Now
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
