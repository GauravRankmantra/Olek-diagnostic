import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import logo from "../assets/Images/olekLogo.jpg";
import img1 from "../assets/Images/HomeImg1.jpg";
import img2 from "../assets/Images/HomeImg2.jpg";
import img3 from "../assets/Images/HomeImg3.jpg";
import img4 from "../assets/Images/HomeImg4.jpg";
import bloodTest from "../assets/Images/bloodTest.jpg";
import bg from "../assets/Images/bg.jpg";

import lipid from "../assets/Images/lipid.jpg"
import diabetes from "../assets/Images/diabetes.jpg"
import harmon from "../assets/Images/harmon.jpg"

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
import  ContactForm from "../components/ContactForm"

import Card from "../components/Card";
import Location from "../components/Location";

const data = [
  {
    img: img1,
    heading: "Fully Automated Computerized Lab",
    subHeading: "Accurate, Fast & Reliable Reports at Affordable Prices",
  },
  {
    img: img2,
    heading: "Special Discount for Walk-in Patients",
    subHeading:
      "Get a 20% discount on all tests. Premium members enjoy a 25% discount with QR code enabled reports.",
  },
  {
    img: img3,
    heading: "Wide Range of Diagnostic Tests",
    subHeading:
      "Comprehensive testing menu including pathology, radiology, cardiology, and more.",
  },
  {
    img: img4,
    heading: "Exclusive Health Checkup Packages",
    subHeading:
      "Explore our tailored health checkup packages designed for different age groups and health needs.",
  },
];
const cardData = [
  {
    title: "Haematology",
    description:
      "Haematology is the branch of medicine that deals with the study of blood, the blood-forming organs, and blood-related diseases. It encompasses a wide range of tests that help diagnose conditions such as anemia, infections, clotting disorders, and blood cancers.",
    img: img1, // Replace with actual image path or import
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
      "Haematology tests are vital for diagnosing a wide array of disorders including anemia, leukemia, infections, clotting issues, and immune system dysfunctions. These tests form the basis of routine health assessments.",
    recommendedWhen:
      "These tests are recommended for general health checkups, unexplained fatigue, frequent infections, bruising or bleeding, or to monitor ongoing treatment for blood disorders.",
    patientPreparation:
      "No specific preparation is usually required. However, it’s advised to inform the healthcare provider about any medications being taken as they may affect blood parameters.",
    interpretation:
      "• Low hemoglobin or RBC may indicate anemia. \n• High WBC count could suggest an infection. \n• Low platelet count might indicate a bleeding disorder. \n• Abnormal cells in the blood smear may be a sign of leukemia or other bone marrow diseases.\n\nA comprehensive interpretation should always be done by a physician based on symptoms and medical history.",
  },
  {
    title: "Liver Function Test (LFT)",
    description:
      "LFTs assess the health and functionality of your liver by measuring enzymes, proteins, and substances produced or excreted by the liver.",
    img: img2,
    price: 2500,
    components: [
      "Alanine transaminase (ALT)",
      "Aspartate transaminase (AST)",
      "Alkaline phosphatase (ALP)",
      "Gamma-glutamyl transferase (GGT)",
      "Total and direct bilirubin",
      "Albumin",
      "Prothrombin time (PT/INR)",
    ],
    importance:
      "LFTs help detect liver infections, monitor the progression of liver diseases, and evaluate the effectiveness of treatments.",
    recommendedWhen:
      "Advised for individuals with symptoms like jaundice, fatigue, or abdominal pain, and those with a history of liver disease or alcohol abuse.",
    patientPreparation:
      "Fasting may be required. Inform your doctor about any medications you're taking.",
    interpretation:
      "Elevated ALT and AST levels may indicate liver damage. High bilirubin can suggest bile duct issues or liver dysfunction.",
  },
  {
    title: "Kidney Function Test (KFT)",
    description:
      "KFTs evaluate how well your kidneys are filtering waste from your blood and maintaining fluid and electrolyte balance.",
    img: img3,
    price: 2000,
    components: [
      "Serum creatinine",
      "Blood urea nitrogen (BUN)",
      "Estimated glomerular filtration rate (eGFR)",
      "Electrolytes (sodium, potassium, chloride)",
      "Urinalysis",
    ],
    importance:
      "Essential for detecting kidney diseases, monitoring kidney function, and guiding treatment decisions.",
    recommendedWhen:
      "Recommended for individuals with high blood pressure, diabetes, or symptoms like swelling, fatigue, or frequent urination.",
    patientPreparation:
      "Fasting might be necessary. Stay hydrated but avoid excessive fluid intake before the test.",
    interpretation:
      "High creatinine and BUN levels can indicate impaired kidney function. Abnormal electrolyte levels may suggest kidney-related issues.",
  },
  {
    title: "Lipid Profile",
    description:
      "A lipid profile measures the levels of specific fats in your blood to assess your risk of cardiovascular disease.",
    img: lipid,
    price: 1800,
    components: [
      "Total cholesterol",
      "Low-density lipoprotein (LDL)",
      "High-density lipoprotein (HDL)",
      "Triglycerides",
      "Very low-density lipoprotein (VLDL)",
      "Cholesterol/HDL ratio",
    ],
    importance:
      "Helps in evaluating the risk of heart disease and guiding dietary and lifestyle interventions.",
    recommendedWhen:
      "Advised for adults over 20 years old, especially those with risk factors like smoking, obesity, or a family history of heart disease.",
    patientPreparation:
      "Fasting for 9–12 hours is typically required. Only water is permitted during the fasting period.",
    interpretation:
      "High LDL and triglyceride levels increase heart disease risk, while high HDL levels are protective.",
  },
  {
    title: "Diabetes Profile",
    description:
      "This profile assesses blood sugar control and helps in diagnosing and monitoring diabetes.",
    img: diabetes,
    price: 2200,
    components: [
      "Fasting blood glucose",
      "Postprandial blood glucose",
      "Hemoglobin A1c (HbA1c)",
      "Random blood sugar",
      "Insulin levels",
    ],
    importance:
      "Crucial for diagnosing diabetes, monitoring blood sugar control, and preventing complications.",
    recommendedWhen:
      "Recommended for individuals with symptoms like increased thirst, frequent urination, or unexplained weight loss, and those with risk factors like obesity or a family history of diabetes.",
    patientPreparation:
      "Fasting for at least 8 hours is required for certain tests. Follow your doctor's instructions regarding medication intake.",
    interpretation:
      "Elevated fasting glucose and HbA1c levels indicate poor blood sugar control and a higher risk of diabetes-related complications.",
  },
  {
    title: "Fine Needle Aspiration Cytology (FNAC)",
    description:
      "FNAC is a diagnostic procedure where a thin needle is used to extract cells from a lump or mass for microscopic examination.",
    img: img1,
    price: 3000,
    components: ["Cellular morphology assessment", "Cytopathological analysis"],
    importance:
      "Helps in diagnosing infections, inflammatory conditions, and cancers with minimal invasiveness.",
    recommendedWhen:
      "Suggested when a patient has a palpable lump or mass in areas like the neck, breast, or thyroid.",
    patientPreparation:
      "Inform your doctor about any medications or bleeding disorders. Specific preparation may vary based on the biopsy site.",
    interpretation:
      "Results can indicate benign conditions, infections, or malignancies, guiding further management.",
  },
  {
    title: "Vitamin D and B12 Tests",
    description:
      "These tests measure the levels of Vitamin D and Vitamin B12 in your blood, essential nutrients for bone health and nerve function.",
    img: img2,
    price: 2000,
    components: ["25-hydroxyvitamin D", "Vitamin B12 (cobalamin)"],
    importance:
      "Detects deficiencies that can lead to bone disorders, fatigue, neurological issues, and anemia.",
    recommendedWhen:
      "Advised for individuals with symptoms like fatigue, bone pain, or tingling sensations, and those at risk of deficiencies.",
    patientPreparation:
      "Fasting may be required. Inform your doctor about any supplements you're taking.",
    interpretation:
      "Low Vitamin D levels can lead to bone disorders, while low B12 levels can cause anemia and neurological problems.",
  },
  {
    title: "Hormone Tests",
    description:
      "Hormone tests evaluate the levels of various hormones in your body to assess endocrine function.",
    img: harmon,
    price: 3500,
    components: [
      "Thyroid hormones (TSH, T3, T4)",
      "Sex hormones (estrogen, testosterone)",
      "Cortisol",
      "Insulin",
      "Growth hormone",
    ],
    importance:
      "Helps in diagnosing hormonal imbalances, thyroid disorders, adrenal issues, and reproductive problems.",
    recommendedWhen:
      "Recommended for individuals with symptoms like fatigue, weight changes, menstrual irregularities, or infertility.",
    patientPreparation:
      "Fasting may be required for certain tests. Timing of the test may be crucial; follow your doctor's instructions.",
    interpretation:
      "Abnormal hormone levels can indicate various endocrine disorders requiring medical intervention. For example, elevated TSH may suggest hypothyroidism, while high cortisol could indicate Cushing’s syndrome.",
  },
  {
    title: "Urine and Sputum Examinations",
    description:
      "These tests help detect infections, kidney issues, and respiratory conditions by analyzing urine and sputum samples for abnormal cells, bacteria, or chemical substances.",
    img: img3,
    price: 1600,
    components: [
      "Urinalysis (physical, chemical, and microscopic analysis)",
      "Urine culture and sensitivity",
      "Sputum smear microscopy (for tuberculosis and infections)",
      "Sputum culture",
    ],
    importance:
      "Essential for diagnosing urinary tract infections (UTIs), kidney disorders, tuberculosis, pneumonia, and other respiratory diseases.",
    recommendedWhen:
      "Suggested for individuals showing symptoms like painful urination, frequent urination, blood in urine, chronic cough, or sputum production.",
    patientPreparation:
      "For urine test: Collect midstream clean-catch urine in a sterile container. For sputum: Best collected early morning before eating or drinking, after rinsing the mouth.",
    interpretation:
      "Presence of bacteria, white or red blood cells in urine indicates infection or inflammation. In sputum, detection of Mycobacterium tuberculosis confirms TB; presence of neutrophils or pathogens suggests respiratory infections.",
  },
];
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

const Slide = ({ img, heading, subHeading,setShowForm }) => {
 
  return (
  <>

    <div className="relative w-full h-[35rem]">
      <img src={img} className="w-full h-full object-cover" alt={heading} />
      <div className="absolute space-y-4 inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 text-center z-10">
        <img src={logo} className=" h-10"></img>
        <h1 className="text-4xl md:text-7xl font-ralewayB mb-2 text-[#f0ffb6] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7)]">
          {heading}
        </h1>

        <p className="text-lg md:text-xl">{subHeading}</p>

        <button   onClick={() => setShowForm(true)} className="flex items-center hover:bg-black/80 bg-white cursor-pointer p-2 rounded border-gray-400 group">
          <CiBookmark className="w-10 h-6 cursor-pointer group-hover:text-white text-black" />
          <span className="group-hover:text-white font-ralewayB text-black">
            Book Your AppointMent
          </span>
        </button>
      </div>
    </div>
    </>
  );
};

const Home = () => {
  const [showAll, setShowAll] = useState(false);
    const [showForm, setShowForm] = useState(false);
  return (
    <>
          {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    <div className="bg-white">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {data.map((slideData, index) => (
          <SwiperSlide key={index} className="relative">
            <Slide {...slideData} setShowForm={setShowForm} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex w-[98%] md:w-[80%] mx-auto shadow-2xl rounded-3xl  my-10 md:my-32">
        <div className="space-y-4.5 border rounded-l-3xl  p-4 px-5 border-[#e3f4a0]/30 md:w-[50%]">
          <h1 className="text-6xl md:text-7xl font-ralewayB text-[#005b4c]">
            Olek Diagnostics
          </h1>
          <h1 className=" text-2xl md:text-3xl font-ralewayB md:font-ralewaySb text-[#005b4c]">
            Your Health, Our Priority
          </h1>
          <div className=" w-[100%]">
            <img
              src={bloodTest}
              className="md:hidden w-full  md:h-[25rem] object-cover"
            ></img>
          </div>

          <p className="font-ralewayM text-gray-600">
            At Olek Diagnostics in Dehradun, Uttarakhand, your comfort is
            paramount. Our state-of-the-art clinic is thoughtfully designed with
            modern equipment and an ergonomic layout. We are dedicated to
            providing the best diagnostic services in a relaxed and hygienic
            atmosphere, ensuring a stress-free experience. Trust our rich
            expertise for quality healthcare that’s both thorough and
            simplified.
          </p>
          <button   onClick={() => setShowForm(true)} className="flex items-center border hover:bg-[#dff391] cursor-pointer p-2 rounded border-gray-400 group">
            <CiBookmark className="w-10 h-6 cursor-pointer text-[#005b4c] " />
            <span className="text-[#005b4c] font-ralewaySb ">
              Book Now
            </span>{" "}
          </button>
        </div>
        <div className="hidden md:block w-[50%]">
          <img src={bloodTest} className="w-full h-[25rem] object-cover"></img>
        </div>
      </div>

      <div className="flex flex-col mt-20 space-y-6">
        <h1 className="text-center text-4xl font-ralewayB text-[#005b4c]">
          Our Services
        </h1>
        <div className="text-center py-6 bg-[#005b4c]">
          <div
            className={`flex flex-wrap gap-2 md:gap-8 justify-center overflow-hidden transition-all duration-500 ${
              showAll ? "max-h-[1000rem]" : "max-h-[36rem]"
            }`}
          >
            {cardData.map((item, index) => (
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
        <img src={bg} className="w-full h-72 object-cover rotate-180"></img>
      </div>
      <h1 className="text-center  text-4xl font-ralewayB text-[#005b4c]">
        Health & Wellness Packages
      </h1>
      <div className="flex flex-col  space-y-6">
        <div className="text-center py-6 bg-[#005b4c]">
          <div
            className={`flex flex-wrap gap-2 md:gap-8 justify-center overflow-hidden transition-all duration-500 ${
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
