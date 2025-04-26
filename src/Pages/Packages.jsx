import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../assets/Images/bg-packages.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdLocalHospital, MdHealthAndSafety, MdOutlineScience } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
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
    title: "Essential Health Screening Package",
    description:
      "Ideal for routine health checkups, this package includes vital tests to assess liver, kidney, heart, and thyroid function, along with complete blood and urine analysis.",
    tests: "CBC, BSF, LFT, KFT, LIPID PROFILE, TFT, URINE ROUTINE EXAMINATION",
    ActualPrice: 2620,
    OfferPrice: 1199,
    rating: 4.5,
  },
  {
    img: package2,
    title: "Comprehensive Wellness Checkup",
    description:
      "A perfect package for those looking to monitor chronic conditions like diabetes and thyroid imbalance, with advanced screening and blood glucose monitoring.",
    tests: "CBC, HBA1C, BSF, LFT, KFT, LIPID PROFILE, TFT, URINE ROUTINE EXAMINATION",
    ActualPrice: 3170,
    OfferPrice: 1499,
    rating: 4.0,
  },
  {
    img: package3,
    title: "Annual Preventive Health Package",
    description:
      "Designed for yearly monitoring of vital organs and nutritional levels, this package helps detect deficiencies and chronic conditions early.",
    tests: "CBC, BSF, LFT, KFT, LIPID PROFILE, TFT, VITAMIN D3, VITAMIN B12, URINE ROUTINE EXAMINATION",
    ActualPrice: 5070,
    OfferPrice: 2499,
    rating: 4.5,
  },
  {
    img: package5,
    title: "Advanced Annual Health Screening",
    description:
      "A powerful diagnostic combo for yearly health tracking, this package covers diabetes, organ function, and vitamin levels for a comprehensive overview.",
    tests: "CBC, HBA1C, BSF, LFT, KFT, LIPID PROFILE, TFT, VITAMIN D3, VITAMIN B12, URINE ROUTINE EXAMINATION",
    ActualPrice: 5620,
    OfferPrice: 2699,
    rating: 3.8,
  },
  {
    img: package6,
    title: "Total Body Wellness Package",
    description:
      "Our most detailed package for complete health evaluation. Includes infectious disease screening, hormonal balance, vitamin levels, and organ health.",
    tests:
      "CBC, HBA1C, BSF, LFT, KFT, LIPID PROFILE, TFT, VITAMIN D3, VITAMIN B12, HIV, HCV, HbsAg, URINE ROUTINE EXAMINATION",
    ActualPrice: 7420,
    OfferPrice: 3499,
    rating: 4.5,
  },
  {
    img: package4,
    title: "Antenatal Health Check Package",
    description:
      "Specially designed for expecting mothers, this package ensures comprehensive prenatal screening to support a healthy pregnancy.",
    tests:
      "CBC, BLOOD GROUP, BSR, HIV, HbsAg, HCV, VDRL, TFT, URINE ROUTINE EXAMINATION",
    ActualPrice: 2670,
    OfferPrice: 1399,
    rating: 4.9,
  },
  {
    img: package7,
    title: "Diabetes Care Monitoring Package",
    description:
      "A focused wellness package for individuals with diabetes or those at risk. Helps monitor glucose levels and manage diabetic health.",
    tests: "BSF, BSPP, HBA1C, URINE ROUTINE EXAMINATION",
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
    {/* Hero Section */}
    <div
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/20 bg-opacity-50 w-full h-full absolute top-0 left-0" />
      <h1
        className="text-white text-4xl md:text-6xl font-bold z-10 text-center px-4 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7)]"
        data-aos="fade-down"
      >
        Our Packages
      </h1>
    </div>

    {/* Intro Text */}
    <section
      className="px-4 py-12 my-10 bg-gray-200 max-w-6xl mx-auto text-center"
      data-aos="fade-up"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#a01a5a] mb-4">
        What Our Packages Offer
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        At Olek Diagnostics, our packages are thoughtfully designed to meet your unique healthcare needs.
        Whether you're looking for comprehensive full-body checkups, specialized diagnostic panels, or
        preventive health screenings — our affordable and customizable packages ensure accurate results
        and peace of mind for you and your family.
      </p>
    </section>

    {/* Why Choose Our Packages */}
    <section className="py-10 md:my-10 bg-white max-w-6xl mx-auto px-4" data-aos="fade-up">
      <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#a01a5a] mb-10">
        Why Choose Our Health Packages?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center space-y-2">
          <MdLocalHospital className="text-[#a01a5a] text-5xl" />
          <h4 className="font-bold text-lg">Expert Curated</h4>
          <p className="text-gray-600 text-sm">
            All packages are designed by experienced doctors & health experts.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <MdHealthAndSafety className="text-[#a01a5a] text-5xl" />
          <h4 className="font-bold text-lg">Preventive Focus</h4>
          <p className="text-gray-600 text-sm">
            Early detection of potential health risks with targeted screenings.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <BiCheckShield className="text-[#a01a5a] text-5xl" />
          <h4 className="font-bold text-lg">Accurate & Reliable</h4>
          <p className="text-gray-600 text-sm">
            ISO-certified labs, advanced machines & double verification process.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <MdOutlineScience className="text-[#a01a5a] text-5xl" />
          <h4 className="font-bold text-lg">Wide Test Coverage</h4>
          <p className="text-gray-600 text-sm">
            From routine blood work to specialized hormonal and metabolic panels.
          </p>
        </div>
      </div>
    </section>

    {/* Packages Cards */}
    <div className="flex flex-col space-y-6">
      <div className="text-center py-6 bg-[rgba(255,164,208,0.2)]">
        <div
          className={`flex flex-wrap gap-4 md:gap-8 justify-center overflow-hidden transition-all duration-500 ${
            showAll ? "max-h-[1000rem]" : "max-h-[36rem]"
          }`}
        >
          {packages.map((item, index) => (
            <Card type={"packages"} data={item} key={index} />
          ))}
        </div>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-10 px-6 cursor-pointer py-2 flex md:w-2/12 space-x-1.5 m-auto justify-center items-center text-[#a01a5a] bg-[rgba(255,164,208,1)] transition rounded-md"
        >
          {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
          <span className="font-ralewaySb">
            {showAll ? "Show Less" : "Show More"}
          </span>
        </button>
      </div>
    </div>

    {/* Location Section */}
    <Location />
  </div>
  );
};

export default Packages;
