import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../assets/Images/bg-packages.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Card from "../components/Card";
import package1 from "../assets/Images/packages/package1.jpg";
import package2 from "../assets/Images/packages/package2.jpg";
import package3 from "../assets/Images/packages/package3.jpg";
import package4 from "../assets/Images/packages/pregnent.jpg";
import package5 from "../assets/Images/packages/package4.jpg";
import package6 from "../assets/Images/packages/package5.jpg";
import package7 from "../assets/Images/packages/package6.jpg";
import Location from "../components/Location";

const Packages = () => {
  const [showAll, setShowAll] = useState(false);
const packages = [
  {
    img: package1,
    title: "BASIC WELLNESS PACKAGE",
    tests: " CBC, BSF, LFT, KFT, LIPID PROFILE, TFT, URINE ROUTINE EXAMINATION",
    ActualPrice: 2620,
    OfferPrice: 1199,
    rating: 4.5,
  },
  {
    img: package2,
    title: "ADVANCE WELLNESS PACKAGE",
    tests:
      "CBC, HBA1C, BSF, LFT, KFT, LIPID PROFILE, TFT, URINE, ROUTINE EXAMINATION",
    ActualPrice: 3170,
    OfferPrice: 1499,
    rating: 4.0,
  },
  {
    img: package3,
    title: "ANNUAL WELLNESS PACKAGE",
    tests:
      "CBC, BSF, LFT, KFT, LIPID PROFILE, TFT, VITAMIN D3, VITAMIN B12,URINE ROUTINE EXAMINATION",
    ActualPrice: 5070,
    OfferPrice: 2499,
    rating: 4.5,
  },
  {
    img: package5,
    title: "ADVANCE ANNUAL WELLNESS PACKAGE",
    tests:
      "CBC, HBA1C,BSF, LFT, KFT, LIPID PROFILE, TFT, VITAMIN D3, VITAMIN B12,URINE ROUTINE EXAMINATION",
    ActualPrice: 5620,
    OfferPrice: 2699,
    rating: 3.8,
  },
  {
    img: package6,
    title: "COMPLETE WELLNESS PACKAGE",
    tests:
      " CBC, HBA1C, BSF, LFT, KFT, LIPID PROFILE, TFT, VITAMIN D3, VITAMIN B12, HIV, HCV, HbsAg, URINE, ROUTINE EXAMINATION",
    ActualPrice: 7420,
    OfferPrice: 3499,
    rating: 4.5,
  },
  {
    img: package4,
    title: "ANTENATAL PACKAGE",
    tests:
      "CBC, BLOOD GROUP, BSR, HIV, HbsAg, HCV, VDRL, TFT, URINE ROUTINE EXAMINATION",
    ActualPrice: 2670,
    OfferPrice: 1399,
    rating: 4.9,
  },
  {
    img: package7,
    title: "DIABETIC WELLNESS PACKAGE",
    tests: "BSF, BSPP, HBA1C, URINE ROUTINE EXAMINATION,",
    ActualPrice: 840,
    OfferPrice: 499,
    rating: 4.8,
  },
];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-black/20 bg-opacity-50 w-full h-full absolute top-0 left-0" />
        <h1
          className="text-white  [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7)] text-4xl md:text-6xl font-bold z-10 text-center px-4"
          data-aos="fade-down"
        >
          Our Packages
        </h1>
      </div>

      <section
        className="px-4 py-12 my-10 bg-gray-200 max-w-6xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#005b4c] mb-4">
          What Our Pacakages Offer
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          At Olek Diagnostics, our packages are thoughtfully designed to meet
          your unique healthcare needs. Whether you're looking for comprehensive
          full-body checkups, specialized diagnostic panels, or preventive
          health screenings — our affordable and customizable packages ensure
          accurate results and peace of mind for you and your family.
        </p>
      </section>
      <div className="flex flex-col  space-y-6">
        <div className="text-center py-6 bg-[#005b4c]">
          <div
            className={`flex flex-wrap gap-4 md:gap-8 justify-center overflow-hidden transition-all duration-500 ${
              showAll ? "max-h-[1000rem]" : "max-h-[36rem]"
            }`}
          >
            {packages.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>

          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-10 px-6 cursor-pointer py-2 flex md:w-2/12 space-x-1.5 m-auto justify-center items-center text-[#005b4c] bg-[#dff391]  transition rounded-md"
          >
            {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
            <span className="font-ralewaySb">
              {" "}
              {showAll ? "Show Less" : "Show More"}
            </span>
          </button>
        </div>
      </div>
      <div>
        <Location />
      </div>
    </div>
  );
};

export default Packages;
