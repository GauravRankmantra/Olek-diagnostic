import { FaArrowUp, FaStar } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e9e9e9] text-[#005b4c] border shadow-2xl pt-10 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">USEFUL LINKS</h4>
          <ul className="space-y-2">
            <li className="flex items-center hover:underline cursor-pointer">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"/privacy-policy"}
                className="flex items-center hover:underline cursor-pointer"
              >
                PRIVACY POLICY
                
              </Link>
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"/about"}
                className="flex items-center hover:underline cursor-pointer"
              >
                ABOUT US <BiRightArrowAlt className="ml-1" />
              </Link>
            </li>
            <li className="flex items-center hover:underline cursor-pointer">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"/packages"}
                className="flex items-center hover:underline cursor-pointer"
              >
                PACKAGES
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Nav */}
        <div>
          <h4 className="font-bold text-lg mb-4">&nbsp;</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"/"}
                className="flex items-center hover:underline cursor-pointer"
              >
                HOME
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"/services"}
                className="flex items-center hover:underline cursor-pointer"
              >
                SERVICES
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"/contact"}
                className="flex items-center hover:underline cursor-pointer"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">CONTACT</h4>
          <p>
            Shimla Enclave, GMS Road,
            <br />
            Near St Jude's Chowk, Sewla Kalan
            <br />
            Dehradun, Uttarakhand 248171
          </p>
          <p className="mt-2">📞 9368548552</p>
          <p className="mt-1">📧 olekdiagnosticsandhealth@gmail.com</p>
        </div>

        {/* Connect + Badge */}
        <div>
          <h4 className="font-bold text-lg mb-4">CONNECT</h4>
          <div className="mb-4">
            <div className="w-10 h-10 bg-[#333] text-white rounded-full flex items-center justify-center font-bold text-lg">
              Jd
            </div>
          </div>

          {/* Rating Badge */}
          <div className="bg-white border shadow-md p-2 rounded flex items-center space-x-1 w-fit">
            <div className="w-6 h-6 bg-[#0078d7] text-white rounded flex items-center justify-center font-bold text-sm">
              Jd
            </div>
            <span className="text-green-600 font-semibold text-sm">4.9</span>
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        © Copyrights 2024 - 2025. <strong>Olek Diagnostics</strong>. All Rights
        Reserved.
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#8b0a42] text-white p-3 rounded-full shadow-lg hover:bg-[#a01357] transition-all duration-300 z-50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
