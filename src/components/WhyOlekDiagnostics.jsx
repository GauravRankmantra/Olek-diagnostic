import {
    FaVial,
    FaMicroscope,
    FaUserMd,
    FaGlobe,
    FaUsers,
    FaCheckCircle,
    FaRegClock,
    FaUser
  } from "react-icons/fa";
  import { motion } from "framer-motion";
  import bg from "../assets/Images/whyolek.jpg";
  
  const stats = [
    {
      icon: <FaVial />,
      value: "10k+",
      label: "Tests Conducted",
      color: "#a01a5a", // stays same
    },
    {
      icon: <FaRegClock />,
      value: "8AM - 8PM",
      label: "Opening Hours",
      color: "#3b82f6", // blue-ish to represent time (changed from yellow)
    },
    {
      icon: <FaCheckCircle />,
      value: "100%",
      label: "Safe & Hygienic Procedures",
      color: "#16a34a", // green for hygiene/safety (good)
    },
    {
      icon: <FaUsers />,
      value: "5K+",
      label: "Happy Patients",
      color: "#f59e0b", // stays yellow/orange for happiness
    },
    {
      icon: <FaVial />,
      value: "10k+",
      label: "Safe & Reliable Sample Collection",
      color: "#6366f1", // violet for variety (good for quality)
    },
    {
      icon: <FaUser />,
      value: "10+",
      label: "Experienced Staff",
      color: "#6366f1", // stays same
    },
  ];
  
  
  const WhyOlekDiagnostics = () => {
    return (
      <div
        className="bg-gradient-to-br from-blue-50 to-white py-10 md:py-32 px-6 lg:px-20"
        id="why-olek"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-[#a01a5a]">Olek Diagnostics</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              Trusted by thousands, Olek Diagnostics is committed to providing
              affordable, accurate, and timely diagnostic services. We may be small,
              but our care is always personal and rooted in trust.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 rounded-2xl p-4 shadow-md text-center"
                >
                  <div className="mb-2 text-4xl" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
  
          {/* Right Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={bg}
              alt="Olek Diagnostics Lab"
              className="rounded-2xl shadow-xl max-h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default WhyOlekDiagnostics;
  