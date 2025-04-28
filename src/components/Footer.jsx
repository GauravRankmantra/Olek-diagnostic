import {
  FaArrowUp,
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import { FaInstagram, FaWhatsapp, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const phoneNumber = "+91 9368548552";

  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/yourprofile",
      label: "Instagram",
      color: "#E1306C",
    },
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/yourpage",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/yourchannel",
      label: "YouTube",
      color: "#FF0000",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#f9f9f9] to-[#f2f2f2] text-[#a01a5a] shadow-inner pt-16 pb-8 relative text-[15px] md:text-[16px] leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Useful Links */}
        <div>
          <h4 className="text-2xl font-bold mb-6 tracking-wide">
            Useful Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] text-lg font-semibold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] text-lg font-semibold transition-colors duration-300 flex items-center"
              >
                About Us <BiRightArrowAlt className="ml-1" />
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] text-lg font-semibold transition-colors duration-300"
              >
                Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Nav */}
        <div>
          <h4 className="text-2xl font-bold mb-6 tracking-wide">Navigation</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] text-lg font-semibold transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] text-lg font-semibold transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] text-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        {/* Contact Info */}
        <div>
          <h4 className="text-2xl font-bold mb-6 tracking-wide">Contact Us</h4>
          <div className="space-y-3  text-gray-700">
            <p className="flex items-start text-lg font-semibold">
              <FaMapMarkerAlt className="mr-2 mt-1 text-[#a01a5a]" />
              Shimla Enclave, GMS Road,
              <br /> Near St Jude's Chowk, Sewla Kalan
              <br /> Dehradun, Uttarakhand 248171
            </p>
            <a
              href="tel:9368548552"
              className="flex items-center text-lg font-semibold hover:text-[#8b0a42] transition-colors duration-300"
            >
              <FaPhoneAlt className="mr-2 text-[#a01a5a]" />
              9368548552
            </a>
            <a
              href="mailto:olekdiagnosticsandhealth@gmail.com"
              className="flex items-center text-lg font-semibold hover:text-[#8b0a42] transition-colors duration-300 break-all"
            >
              <FaEnvelope className="mr-2 text-[#a01a5a]" />
             <span className="text-sm"> olekdiagnosticsandhealth@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Popular Tests */}
        <div>
          <h4
            onClick={() => {
              navigate("/services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold mb-6 tracking-wide hover:text-[#8b0a42] cursor-pointer transition-all duration-300"
          >
            Popular Tests
          </h4>
          <ul className="space-y-3 text-lg font-semibold">

            <li>Health Packages</li>
            <li>Pathology Services</li>
            <li>Hormones Testing</li>
            <li>Kidney Health Evaluation</li>
            <li>Diabetes Monitoring Profile</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 className="text-2xl font-bold mb-6 tracking-wide">
            Connect With Us
          </h4>

          <div className="mb-6 flex items-center space-x-3">
            <a
              href="https://jsdl.in/DT-99JSG4ZXX6E"
              className="w-12 h-12 bg-[#a01a5a] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md"
            >
              JD
            </a>
            <span className="text-sm text-gray-700">Olek Diagnostics</span>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:opacity-80 transition-opacity duration-300"
              aria-label={item.label}
              style={{ color: item.color }}
            >
              <div className="transform hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
            </a>
          ))}
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-base text-gray-500 tracking-wide">
        © 2024 - 2025{" "}
        <strong className="text-[#a01a5a]">Olek Diagnostics</strong>. All rights
        reserved. Empowering health through reliable diagnostics.
      </div>

      {/* Back to Top */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#a01a5a] text-white p-4 rounded-full shadow-xl hover:bg-[#8b0a42] transition-all duration-300 z-50"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button> */}



      {/* <div className="fixed bottom-6 right-6 z-50">
        <a
            href={`tel:${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"

          className="relative  animate-fade-in-slow"
        >
          <div className="p-3 w-12 h-12 rounded-full bg-pink-100 hover:bg-green-200 shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <IoMdCall className="text-[#a01a5a] w-10 h-10 md:w-10 md:h-10" />
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-[#a01a5a] rounded-full w-2.5 h-2.5 animate-ping"></span>
          </div>
        </a>
      </div> */}

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919368548552"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="relative  animate-fade-in-slow"
        >
          <div className="p-3 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-100 hover:bg-green-200 shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <FaWhatsapp className="text-green-600 w-8 h-8 md:w-10 md:h-10 " />
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full w-2.5 h-2.5 animate-ping"></span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
