import { motion } from "framer-motion";
import img1 from "../assets/Images/HomeImg11.jpg";
import img2 from "../assets/Images/HomeImg22.jpg";
import img3 from "../assets/Images/HomeImg3.jpg";
import bg from "../assets/Images/servicesbg.jpg";
import diabetes from "../assets/Images/diabetes.jpg";

import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import { useState } from "react";
import CardDetail from "./CardDetail";
const featuredServices = [
  {
    title: "Unlocking Your Blood's Secrets",
    description:
      "Delve into the essential components of your blood. Our comprehensive Haematology Profile offers a clear snapshot of your overall health.",
    img: img1,
    offerPrice: "₹499",
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
    title: "Evaluating Your Liver Health",
    description:
      "Is your liver functioning optimally? Our Liver Function Test provides critical insights into this vital organ's performance.",
    img: img2,
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
    offerPrice: "₹799",
  },
  {
    title: "Guardians of Your Inner Balance",
    description:
      "Ensure your kidneys, the silent workhorses of your body, are in prime condition with our thorough Kidney Health Check.",
    img: img3,
    offerPrice: "₹649",
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
    title: "Sweet Insights for a Balanced Life",
    description:
      "Take proactive steps in managing your well-being. Our Diabetes Monitoring Profile offers key indicators for effective diabetes management.",
    img: diabetes,
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
    offerPrice: "₹599",
  },
];

const OurServices = () => {
  const navigate = useNavigate();
  const type = "services";
  const [data, setData] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showDetail && (
        <CardDetail
          type={type}
          bookNow={() => setShowForm(true)}
          onClose={() => setShowDetail(false)}
          data={data}
        />
      )}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}

      <section className="relative py-24  px-6 lg:px-20 overflow-hidden">
        {/* Background Image + Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${bg})`,
          }}
        ></div>

        {/* Abstract Shape Overlays */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-200/30 rounded-full filter blur-3xl animate-pulse duration-7000"
            style={{ width: "250px", height: "250px" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-purple-300/30 rounded-full filter blur-3xl animate-pulse duration-5000 "
            style={{ width: "200px", height: "200px" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 transform translate-x-1/3 -translate-y-1/3 bg-green-300/30 rounded-full filter blur-3xl animate-pulse duration-6000"
            style={{ width: "180px", height: "180px" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 transform -translate-x-1/3 translate-y-1/3 bg-yellow-300/30 rounded-full filter blur-3xl animate-pulse duration-8000 "
            style={{ width: "220px", height: "220px" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Hero Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-ralewayB  lg:text-6xl font-extrabold text-white mb-8 leading-tight">
              Embark on Your Wellness Journey with{" "}
              <span className="text-green-500">Precise Insights</span>
            </h2>
            <p className="text-white font-ralewayR text-lg md:text-xl mb-10">
              Discover a new standard in diagnostics at{" "}
              <span className="text-[#a01a5a] bg-white/90 rounded-2xl py-1 px-2 font-semibold">
                Olek Diagnostics
              </span>
              . We're committed to providing you with accurate and affordable
              testing, empowering you to make informed decisions about your
              health. Experience our focused care and reliable results.
            </p>
            <motion.button
              onClick={() => navigate("/services")}
              className="bg-[#a01a5a] cursor-pointer text-white shadow-2xl w-fit rounded-2xl p-4 font-semibold text-lg flex items-center gap-2 overflow-hidden"
              transition={{ duration: 0.2 }}
            >
              Explore Our Services
              <motion.span
                className="inline-block transition-transform duration-300"
                style={{ transformOrigin: "left center" }}
                animate={{ translateX: 0 }}
                whileHover={{ translateX: 8 }}
              >
                <BsArrowRight className="text-xl" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right - Featured Services Grid */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div
                    onClick={() => {
                      setData(service);
                      setShowDetail(true);
                    }}
                    className="cursor-pointer absolute top-0 left-0 bg-blue-400/70 text-white font-semibold px-3 py-2 rounded-tl-xl"
                  >
                    Explore
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    {service.offerPrice && (
                      <p className="text-[#a01a5a] font-semibold text-lg">
                        Special Price:{" "}
                        <span className="text-green-600">
                          {service.offerPrice}
                        </span>
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setShowForm(true)}
                    className="mt-4 bg-[#a01a5a] hover:bg-[#2a141e] cursor-pointer text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 self-start"
                  >
                    Schedule Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
