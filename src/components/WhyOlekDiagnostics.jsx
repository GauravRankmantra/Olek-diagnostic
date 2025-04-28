import {
  FaVial,
  FaMicroscope,
  FaUserMd,
  FaGlobe,
  FaUsers,
  FaCheckCircle,
  FaBolt,
  FaLock,
  FaCogs,
  FaUser,
  FaCertificate,
  FaTags
} from "react-icons/fa";
import { motion } from "framer-motion";
import bg from "../assets/Images/whyolek.jpg";
import { BriefcaseMedical } from "lucide-react";

const stats = [

  {
    icon: <FaVial />,
    value: "10k+",
    label: "Tests Conducted Successfully",
    color: "#3b82f6",
  },
  {
    icon: <FaCogs />,
    value: "Advanced Labs",
    label: "Latest Diagnostic Equipment",
    color: "#16a34a",
  },
  {
    icon: <FaBolt />,
    value: "24-48 Hrs",
    label: "Fast & Accurate Reports",
    color: "#f59e0b",
  },
  {
    icon: <FaUsers />,
    value: "5k+",
    label: "Happy Patients",
    color: "#6366f1",
  },
  {
    icon: <FaUser />,
    value: "10+",
    label: "Experienced Team Members",
    color: "#a01a5a",
  },
  {
    icon: <FaLock />,
    value: "100%",
    label: "Data Privacy & Security",
    color: "#16a34a",
  },
  {
    icon: <FaTags />,
    value: "Affordable",
    label: "Transparent Pricing",
    color: "#f59e0b",
  },
  // {
  //   icon: <BriefcaseMedical/>,
  //   value: "10+",
  //   label: "Experienced Staff",
  //   color: "#a01a5a",
  // },
];

const WhyOlekDiagnostics = () => {
  return (
    <div
      className="bg-gradient-to-br from-blue-50 to-white py-14 md:py-28 px-6 lg:px-20"
      id="why-olek"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Why Choose <span className="text-[#a01a5a]">Olek Diagnostics</span>?
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            At Olek Diagnostics, we combine cutting-edge technology with compassionate care.
            We’re trusted by thousands for delivering accurate, timely, and affordable diagnostic services — with
            a strong commitment to patient privacy, hygiene, and quality assurance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <div className="mb-2 text-4xl" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-gray-800">{stat.value}</div>
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
            className="rounded-3xl shadow-2xl max-h-[500px] w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyOlekDiagnostics;
