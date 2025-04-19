import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../assets/Images/bg-service.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Card from "../components/Card";
import img1 from "../assets/Images/HomeImg1.jpg";
import img2 from "../assets/Images/HomeImg2.jpg";
import img3 from "../assets/Images/HomeImg3.jpg";
import img4 from "../assets/Images/HomeImg4.jpg";
import lipid from "../assets/Images/lipid.jpg";
import diabetes from "../assets/Images/diabetes.jpg";
import harmon from "../assets/Images/harmon.jpg";
import bloodTest from "../assets/Images/bloodTest.jpg";
import Location from "../components/Location";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
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
          Our Services
        </h1>
      </div>

      <section
        className="px-4 py-12 my-10 bg-gray-200 max-w-6xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#a01a5a] mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          At Olek Diagnostics, we offer a wide range of healthcare services to
          ensure early diagnosis, prevention, and long-term well-being. From
          accurate blood tests and full-body checkups to convenient home sample
          collections and corporate wellness programs — our expert team is
          committed to your health.
        </p>
      </section>
      <div className="flex flex-col space-y-6">
        <div className="text-center py-6 bg-[rgba(255,164,208,0.2)]">
          <div
            className={`flex flex-wrap gap-4 md:gap-8 justify-center overflow-hidden transition-all duration-500 ${
              showAll ? "max-h-[1000rem]" : "max-h-[36rem]"
            }`}
          >
            {cardData.map((item, index) => (
             <Card type={'services'} data={item} key={index} />
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
      <div>
        <Location />
      </div>
    </div>
  );
};

export default Services;
