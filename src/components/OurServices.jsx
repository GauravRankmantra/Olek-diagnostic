import { motion } from "framer-motion";
import img1 from "../assets/Images/HomeImg11.jpg";
import img2 from "../assets/Images/HomeImg22.jpg";
import img3 from "../assets/Images/HomeImg3.jpg";
import bg from "../assets/Images/servicesbg.jpg";
import diabetes from "../assets/Images/diabetes.jpg";

import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const featuredServices = [
  {
    title: "Unlocking Your Blood's Secrets",
    description:
      "Delve into the essential components of your blood. Our comprehensive Haematology Profile offers a clear snapshot of your overall health.",
    img: img1,
    offerPrice: "₹499",
  },
  {
    title: "The Health of Your Body's Filter",
    description:
      "Is your liver functioning optimally? Our Liver Function Test provides critical insights into this vital organ's performance.",
    img: img2,
    offerPrice: "₹799",
  },
  {
    title: "Guardians of Your Inner Balance",
    description:
      "Ensure your kidneys, the silent workhorses of your body, are in prime condition with our thorough Kidney Health Check.",
    img: img3,
    offerPrice: "₹649",
  },
  {
    title: "Sweet Insights for a Balanced Life",
    description:
      "Take proactive steps in managing your well-being. Our Diabetes Monitoring Profile offers key indicators for effective diabetes management.",
    img: diabetes,
    offerPrice: "₹599",
  },
];


const OurServices = () => {
    const navigate = useNavigate();
  return (
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
                <div className="absolute top-0 left-0 bg-blue-400/70 text-white font-semibold px-3 py-2 rounded-tl-xl">
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
                <button className="mt-4 bg-[#a01a5a] hover:bg-[#2a141e] cursor-pointer text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 self-start">
                  Schedule Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
