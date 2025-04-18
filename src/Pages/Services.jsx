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
import lipid from "../assets/Images/lipid.jpg"
import diabetes from "../assets/Images/diabetes.jpg"
import harmon from "../assets/Images/harmon.jpg"
import bloodTest from "../assets/Images/bloodTest.jpg";
import Location from "../components/Location";


const Services = () => {
      const [showAll, setShowAll] = useState(false);
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

      <section className="px-4 py-12 my-10 bg-gray-200 max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-[#005b4c] mb-4">What We Offer</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          At Olek Diagnostics, we offer a wide range of healthcare services to ensure early diagnosis,
          prevention, and long-term well-being. From accurate blood tests and full-body checkups to
          convenient home sample collections and corporate wellness programs — our expert team is
          committed to your health.
        </p>
      </section>
      <div className="flex flex-col space-y-6">

        <div className="text-center py-6 bg-[#005b4c]">
          <div
            className={`flex flex-wrap gap-4 md:gap-8 justify-center overflow-hidden transition-all duration-500 ${
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
        <Location/>
      </div>
    </div>
  );
};

export default Services;
