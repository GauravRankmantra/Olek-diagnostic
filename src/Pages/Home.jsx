import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import HealthCheckupHero from "../components/HealthCheckupHero";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import logo from "../assets/Images/olekLogo.jpg";
import img1 from "../assets/Images/HomeImg11.jpg";
import img2 from "../assets/Images/HomeImg22.jpg";
import img3 from "../assets/Images/HomeImg3.jpg";
import img4 from "../assets/Images/HomeImg4.jpg";
import bloodTest from "../assets/Images/bloodTest.jpg";
import bg from "../assets/Images/bg.jpg";

import lipid from "../assets/Images/lipid.jpg";
import diabetes from "../assets/Images/diabetes.jpg";
import harmon from "../assets/Images/harmon.jpg";

import package1 from "../assets/Images/packages/package1.jpg";
import package2 from "../assets/Images/packages/package2.jpg";
import package3 from "../assets/Images/packages/package3.jpg";
import package4 from "../assets/Images/packages/pregnent.jpg";
import package5 from "../assets/Images/packages/package4.jpg";
import package6 from "../assets/Images/packages/package5.jpg";
import package7 from "../assets/Images/packages/package6.jpg";
import TestimonialSwiper from "../components/TestimonialSwiper";

import { CiBookmark } from "react-icons/ci";
import card1 from "../assets/Images/card1.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ContactForm from "../components/ContactForm";
import { EffectCreative } from "swiper/modules";

import Card from "../components/Card";
import Location from "../components/Location";
import WhyOlekDiagnostics from "../components/WhyOlekDiagnostics";
import OurServices from "../components/OurServices";

const data = [
  {
    img: img1,
    heading: "Advanced Computerized Diagnostic Laboratory",
    subHeading:
      "Experience high-precision testing with our fully automated lab systems for faster and more dependable medical reports.",
  },

  {
    img: img3,
    heading: "All-Inclusive Diagnostic Test Facility",
    subHeading:
      "Offering a complete range of lab tests including pathology, imaging, cardiology, and specialized screenings — all under one roof.",
  },
  {
    img: img2,
    heading: "Special Discounts for In-House Lab Visits",
    subHeading:
      "Avail flat 20% off on all pathology tests. Premium members receive up to 25% off and access to secure QR-coded digital reports.",
  },
  {
    img: img4,
    heading: "Customized Preventive Health Packages",
    subHeading:
      "Choose from our curated health checkup plans for men, women, seniors, and corporate employees — designed for proactive wellness monitoring.",
  },
];

const cardData = [
  {
    title: "Haematology Profile",
    description:
      "The Haematology Profile encompasses critical blood tests that analyze red and white blood cells, hemoglobin, platelets, and other parameters essential for diagnosing blood-related conditions.",
    img: img1,
    price: 1500,
    components: [
      "Complete Blood Count (CBC)",
      "Hemoglobin (Hb)",
      "White Blood Cell (WBC) Count",
      "Red Blood Cell (RBC) Count",
      "Platelet Count",
      "Erythrocyte Sedimentation Rate (ESR)",
      "Peripheral Blood Smear",
    ],
    importance:
      "These tests are instrumental in identifying anemia, blood cancers, infections, immune disorders, and clotting abnormalities, making them a core part of routine diagnostics.",
    recommendedWhen:
      "Ideal for patients experiencing fatigue, recurrent infections, easy bruising, or as part of a comprehensive health assessment.",
    patientPreparation:
      "Generally, no fasting is needed. Inform your doctor about any ongoing medications that could influence blood readings.",
    interpretation:
      "• Anemia may reflect low hemoglobin or RBC count.\n• Elevated WBC may suggest infection.\n• Low platelets could signal a bleeding disorder.\n• Abnormal cells on smear might point to serious conditions like leukemia.",
  },
  {
    title: "Comprehensive Liver Function Panel",
    description:
      "This test evaluates key liver enzymes, proteins, and bilirubin levels to monitor liver performance and detect diseases like hepatitis or fatty liver.",
    img: img2,
    price: 2500,
    components: [
      "Alanine transaminase (ALT)",
      "Aspartate transaminase (AST)",
      "Alkaline phosphatase (ALP)",
      "Gamma-glutamyl transferase (GGT)",
      "Total and Direct Bilirubin",
      "Albumin",
      "Prothrombin Time (PT/INR)",
    ],
    importance:
      "Early detection of liver issues is crucial for preventing complications. LFTs help monitor chronic liver disease and evaluate treatment outcomes.",
    recommendedWhen:
      "Advised for those with symptoms like yellowing of eyes, fatigue, unexplained weight loss, or a history of alcohol use or hepatitis.",
    patientPreparation:
      "Fasting may be advised. Always share details of any medication or supplement intake with your healthcare provider.",
    interpretation:
      "High ALT/AST values often indicate liver inflammation. Elevated bilirubin may suggest liver blockage or damage. Low albumin points to impaired liver synthesis.",
  },
  {
    title: "Kidney Health Evaluation (KFT)",
    description:
      "Kidney Function Tests (KFT) assess the kidney’s ability to remove waste, balance fluids, and regulate electrolytes—vital for maintaining health.",
    img: img3,
    price: 2000,
    components: [
      "Serum Creatinine",
      "Blood Urea Nitrogen (BUN)",
      "eGFR (Estimated Glomerular Filtration Rate)",
      "Electrolytes (Sodium, Potassium, Chloride)",
      "Urinalysis",
    ],
    importance:
      "These tests are vital for diagnosing chronic kidney disease, detecting dehydration, and monitoring renal function in patients with diabetes or hypertension.",
    recommendedWhen:
      "Recommended for individuals with high BP, diabetes, swelling in legs, frequent urination, or family history of kidney issues.",
    patientPreparation:
      "Fasting may be suggested. Maintain hydration but avoid excess fluid intake before the test.",
    interpretation:
      "Elevated creatinine or BUN may signal kidney dysfunction. Abnormal eGFR indicates declining filtration ability. Electrolyte imbalances may indicate renal stress.",
  },
  {
    title: "Lipid Panel – Cholesterol & Heart Health",
    description:
      "A complete lipid profile helps assess your risk for heart disease by measuring different types of fats and cholesterol in the blood.",
    img: lipid,
    price: 1800,
    components: [
      "Total Cholesterol",
      "LDL (Bad Cholesterol)",
      "HDL (Good Cholesterol)",
      "Triglycerides",
      "VLDL",
      "Cholesterol/HDL Ratio",
    ],
    importance:
      "Understanding your lipid levels helps predict heart attack and stroke risks, and guide treatment for high cholesterol or metabolic syndrome.",
    recommendedWhen:
      "Essential for adults aged 20+ and those with obesity, diabetes, smoking habits, or a family history of heart disease.",
    patientPreparation:
      "Fasting for 9–12 hours is typically required. Drink only water during this period.",
    interpretation:
      "High LDL and triglycerides increase cardiovascular risk. High HDL is protective. A higher cholesterol/HDL ratio may suggest elevated heart disease risk.",
  },
  {
    title: "Diabetes Monitoring Profile",
    description:
      "This test panel measures blood glucose levels and long-term sugar control indicators to diagnose and manage diabetes effectively.",
    img: diabetes,
    price: 2200,
    components: [
      "Fasting Blood Sugar (FBS)",
      "Post-Meal Blood Sugar (PPBS)",
      "HbA1c (Glycated Hemoglobin)",
      "Random Blood Glucose",
      "Fasting Insulin",
    ],
    importance:
      "Detects early signs of diabetes, evaluates glucose control, and helps prevent complications like neuropathy or kidney disease.",
    recommendedWhen:
      "Recommended for individuals with risk factors like obesity, family history, frequent urination, excessive thirst, or weight loss.",
    patientPreparation:
      "Fasting for at least 8 hours is required. Follow medical instructions for any antidiabetic drugs.",
    interpretation:
      "High FBS or PPBS indicates poor glucose regulation. HbA1c offers an average of glucose levels over 3 months and is crucial for long-term monitoring.",
  },
  {
    title: "FNAC – Fine Needle Aspiration Cytology",
    description:
      "FNAC is a quick and minimally invasive diagnostic technique that examines cellular samples from lumps or swellings to identify infections or malignancies.",
    img: img1,
    price: 3000,
    components: ["Microscopic Cell Analysis", "Cytological Evaluation"],
    importance:
      "Useful for detecting infections, inflammatory conditions, or tumors, especially in the thyroid, breast, or lymph nodes.",
    recommendedWhen:
      "Advised when lumps, nodules, or swellings appear in accessible areas like the neck or breasts for early diagnosis.",
    patientPreparation:
      "Discuss any medication use or bleeding tendencies with your doctor. Preparation may depend on the site of aspiration.",
    interpretation:
      "Results may show normal, benign, or malignant cells. A pathologist will guide the need for further biopsy or imaging.",
  },
  {
    title: "Vitamin D & B12 Status",
    description:
      "This panel evaluates the body's levels of Vitamin D and B12, essential for bone strength, red blood cell formation, and neurological health.",
    img: img2,
    price: 2000,
    components: ["25-Hydroxy Vitamin D", "Vitamin B12 (Cobalamin)"],
    importance:
      "Crucial for diagnosing deficiencies that can lead to fatigue, osteoporosis, numbness, and cognitive changes.",
    recommendedWhen:
      "Recommended for patients with symptoms like tiredness, brittle bones, depression, or frequent illnesses.",
    patientPreparation:
      "Fasting may be advised. Share supplement intake details with your physician.",
    interpretation:
      "Low Vitamin D can lead to rickets or osteoporosis. Low B12 may cause megaloblastic anemia and nerve damage.",
  },
  {
    title: "Hormonal Imbalance Screening",
    description:
      "This comprehensive test panel examines hormone levels to detect issues in thyroid, adrenal, reproductive, or pituitary functions.",
    img: harmon,
    price: 3500,
    components: [
      "TSH, T3, T4",
      "Estrogen & Testosterone",
      "Cortisol",
      "Insulin",
      "Growth Hormone",
    ],
    importance:
      "Hormone fluctuations can affect metabolism, reproduction, mood, and growth. Early detection ensures timely treatment.",
    recommendedWhen:
      "Indicated in cases of infertility, weight gain/loss, mood swings, menstrual irregularities, or fatigue.",
    patientPreparation:
      "Timing of tests may be important. Fasting might be needed. Always follow the physician’s advice on medication timing.",
    interpretation:
      "Abnormal thyroid hormones suggest thyroid dysfunction. Imbalanced sex hormones may indicate PCOS or low testosterone. Elevated cortisol can hint at stress or Cushing’s syndrome.",
  },
  {
    title: "Urine and Sputum Diagnostics",
    description:
      "Urine and sputum tests help detect infections, kidney issues, and respiratory diseases by analyzing fluid samples under a microscope and through cultures.",
    img: img3,
    price: 1600,
    components: [
      "Urinalysis (Physical, Chemical, Microscopic)",
      "Urine Culture & Sensitivity",
      "Sputum Smear (AFB/TB)",
      "Sputum Culture",
    ],
    importance:
      "Essential for diagnosing UTIs, pneumonia, tuberculosis, and monitoring existing conditions affecting the kidneys or lungs.",
    recommendedWhen:
      "Recommended for symptoms like painful urination, blood in urine, persistent cough, or sputum production.",
    patientPreparation:
      "Midstream clean-catch sample for urine. Early morning deep-cough sputum sample is ideal after oral hygiene.",
    interpretation:
      "White blood cells in urine suggest infection. Sputum cultures may detect TB or pneumonia-causing pathogens. Blood or pus cells indicate active inflammation.",
  },
];

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
    tests:
      "CBC, HBA1C, BSF, LFT, KFT, LIPID PROFILE, TFT, URINE ROUTINE EXAMINATION",
    ActualPrice: 3170,
    OfferPrice: 1499,
    rating: 4.0,
  },
  {
    img: package3,
    title: "Annual Preventive Health Package",
    description:
      "Designed for yearly monitoring of vital organs and nutritional levels, this package helps detect deficiencies and chronic conditions early.",
    tests:
      "CBC, BSF, LFT, KFT, LIPID PROFILE, TFT, VITAMIN D3, VITAMIN B12, URINE ROUTINE EXAMINATION",
    ActualPrice: 5070,
    OfferPrice: 2499,
    rating: 4.5,
  },
  {
    img: package5,
    title: "Advanced Annual Health Screening",
    description:
      "A powerful diagnostic combo for yearly health tracking, this package covers diabetes, organ function, and vitamin levels for a comprehensive overview.",
    tests:
      "CBC, HBA1C, BSF, LFT, KFT, LIPID PROFILE, TFT, VITAMIN D3, VITAMIN B12, URINE ROUTINE EXAMINATION",
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

const Slide = ({
  img,
  heading,
  subHeading,
  setShowForm,
  index,
  activeIndex,
}) => {
  const isActive = index === activeIndex;

  return (
    <div className="w-full h-[50rem] bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left Section - Text */}
      <motion.div
        key={heading}
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex py-10 md:py-0 flex-col justify-center px-6 md:px-12 text-white space-y-4"
      >
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          src={logo}
          className="h-full w-full md:w-[22rem] p-2 md:h-44 mb-2 border border-gray-300 shadow-md rounded-md"
          alt="Logo"
        />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-ralewayB text-[#a01a5a] leading-tight">
          {heading}
        </h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl lg:text-2xl text-gray-600"
        >
          {subHeading}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => setShowForm(true)}
          className="mt-4 flex cursor-pointer justify-center items-center hover:bg-black/50 bg-[#a01a5a] px-4 py-2 rounded group"
        >
          <CiBookmark className="w-6 h-6 text-white mr-2" />
          <span className="text-white  font-ralewayB">
            Book Your Appointment
          </span>
        </motion.button>
      </motion.div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-white/90 via-white/10 to-transparent" />
        <img src={img} alt={heading} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      <div className="bg-white">
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay, EffectCreative]}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          className="mySwiper2 w-full h-full"
        >
          {data.map((slideData, index) => (
            <SwiperSlide key={index} className="relative">
              <Slide
                {...slideData}
                setShowForm={setShowForm}
                index={index}
                activeIndex={activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <hr className="text-gray-400"></hr>
        <div>
          <HealthCheckupHero />
        </div>

        <hr className="text-[#a01a5a]"></hr>
        {/* <div className="flex w-[98%] md:w-[80%] mx-auto shadow-2xl rounded-3xl  my-10 md:my-32">
          <div className="space-y-4.5 border rounded-l-3xl p-4 px-5 border-[#e3f4a0]/30 md:w-[50%]">
            <h1 className="text-6xl md:text-7xl font-ralewayB text-[#a01a5a]">
              Olek Diagnostics
            </h1>
            <h1 className="text-2xl  font-ralewayB  text-[#a01a5a]">
              Trusted Pathology Lab in Dehradun
            </h1>
            <div className="w-[100%]">
              <img
                src={bloodTest}
                className="md:hidden w-full md:h-[25rem] object-cover"
                alt="Olek Diagnostics Blood Test"
              />
            </div>

            <p className="font-ralewayM text-gray-600">
              Welcome to Olek Diagnostics — a leading diagnostic center in
              Dehradun, Uttarakhand, dedicated to providing accurate, fast, and
              affordable pathology services. From routine blood tests to
              advanced health screenings, we use cutting-edge technology and
              certified labs to deliver reliable results. Our facility is
              designed for patient comfort, ensuring a hygienic and stress-free
              environment. Whether you're booking a CBC, lipid profile, LFT, or
              full body check-up, your health is always our top priority.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="flex items-center border hover:bg-[rgba(255,164,208,1)] cursor-pointer p-2 rounded border-gray-400 group"
            >
              <CiBookmark className="w-10 h-6 cursor-pointer text-[#a01a5a]" />
              <span className="text-[#a01a5a] font-ralewaySb">Book Now</span>
            </button>
          </div>

          <div className="hidden md:block w-[50%]">
            <img
              src={bloodTest}
              className="w-full h-[25rem] object-cover"
            ></img>
          </div>
        </div> */}
        <div>
          <WhyOlekDiagnostics />
        </div>
        <div>
          <OurServices />
        </div>

        <div>
          <img src={bg} className="w-full h-64 object-cover rotate-180"></img>
        </div>
        <h1 className="text-center z-50  text-4xl font-ralewayB text-[#a01a5a]">
          Health & Wellness Packages
        </h1>
        <h1 className="text-center text-lg  md:text-2xl font-ralewayL my-2 text-[#a01a5a]">
          Get Quality Health Tests at Affordable Prices
        </h1>
        <div className="flex flex-col  space-y-6">
          <div className="text-center py-6 bg-[rgba(255,164,208,0.2)]">
            <div
              className={`flex flex-wrap gap-2 md:gap-8 justify-center overflow-hidden transition-all duration-500 ${
                showAll ? "max-h-[1000rem]" : "max-h-[36rem]"
              }`}
            >
              {packages.map((item, index) => (
                <Card type={"packages"} data={item} key={index} />
              ))}
            </div>

            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="mt-10 px-6 cursor-pointer py-2 flex md:w-2/12 space-x-1.5 m-auto justify-center items-center text-[#a01a5a] bg-[rgba(255,164,208,1)]  transition rounded-md"
            >
              {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
              <span className="font-ralewaySb">
                {" "}
                {showAll ? "Show Less" : "Show More"}
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-20 space-y-6">
          <h1 className="text-center text-4xl font-ralewayB text-[#a01a5a]">
            Our Services
          </h1>
          <div className="text-center py-6 bg-[rgba(255,164,208,0.2)]">
            <div
              className={`flex flex-wrap gap-2 md:gap-8 justify-center overflow-hidden transition-all duration-500 ${
                showAll ? "max-h-[1000rem]" : "max-h-[36rem]"
              }`}
            >
              {cardData.map((item, index) => (
                <Card type={"services"} data={item} key={index} />
              ))}
            </div>

            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="mt-10 px-6 cursor-pointer py-2 flex md:w-2/12 space-x-1.5 m-auto justify-center items-center text-[#a01a5a] bg-[rgba(255,164,208,1)]  transition rounded-md"
            >
              {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
              <span className="font-ralewaySb">
                {" "}
                {showAll ? "Show Less" : "Show More"}
              </span>
            </button>
          </div>
        </div>
        {/* Show only on mobile screens (md and above: hidden) */}
        {/* <div className=" md:hidden  flex justify-center w-full mx-auto">
  <Swiper
    modules={[Autoplay, EffectCreative]}
    effect={"creative"}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    }}
    className="mySwiper2 w-full h-full"
  >
    {packages.map((item, index) => (
      <SwiperSlide key={index}>
        <Card type={"packages"} data={item} />
      </SwiperSlide>
    ))}
  </Swiper>
</div> */}

        <div>
          <TestimonialSwiper />
        </div>
        <div>
          <Location />
        </div>
      </div>
    </>
  );
};

export default Home;
