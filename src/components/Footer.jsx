import { FaArrowUp, FaStar, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f9f9f9] to-[#f2f2f2] text-[#a01a5a] shadow-inner pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Useful Links */}
        <div>
          <h4 className="text-xl font-semibold mb-5 tracking-wide">Useful Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] transition-colors duration-300 flex items-center"
              >
                About Us <BiRightArrowAlt className="ml-1" />
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] transition-colors duration-300"
              >
                Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Nav */}
        <div>
          <h4 className="text-xl font-semibold mb-5 tracking-wide">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#8b0a42] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-5 tracking-wide">Contact Us</h4>
          <div className="space-y-3 text-sm text-gray-700">
            <p className="flex items-start">
              <FaMapMarkerAlt className="mr-2 mt-1 text-[#a01a5a]" />
              Shimla Enclave, GMS Road,
              <br /> Near St Jude's Chowk, Sewla Kalan
              <br /> Dehradun, Uttarakhand 248171
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-2 text-[#a01a5a]" />
              9368548552
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-[#a01a5a]" />
              olekdiagnosticsandhealth@gmail.com
            </p>
          </div>
        </div>

        {/* Connect + Rating */}
        <div>
          <h4 className="text-xl font-semibold mb-5 tracking-wide">Connect With Us</h4>
          <div className="mb-5">
            <div className="w-12 h-12 bg-[#a01a5a] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
              JD
            </div>
          </div>

          <div className="bg-white border border-gray-300 shadow p-3 rounded-lg flex items-center space-x-2 w-fit">
            <div className="w-8 h-8 bg-[#0078d7] text-white rounded-full flex items-center justify-center text-sm font-bold">
              JD
            </div>
            <span className="text-green-600 font-semibold text-sm">4.9</span>
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-500 tracking-wide">
        © 2024 - 2025 <strong className="text-[#a01a5a]">Olek Diagnostics</strong>. All rights reserved. Empowering health through reliable diagnostics.
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#a01a5a] text-white p-3 rounded-full shadow-xl hover:bg-[#8b0a42] transition-all duration-300 z-50"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
