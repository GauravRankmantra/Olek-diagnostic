import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";


const TopNavbar = () => {
  const phoneNumber = "+91 9368548552";
  const location = useLocation();
  const emailAddress = "olekdiagnosticsandhealth@gmail.com"; 

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
    <div className="fixed z-50 top-0 w-full bg-gradient-to-r from-pink-50 to-rose-50  animate-slide-down">
      <div className="flex justify-between items-center px-4 py-3 text-sm">
        {/* Phone Number Section */}
        <div className="flex items-center space-x-3 animate-fade-in">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center bg-[#a01a5a] hover:bg-rose-600 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-xl hover:scale-105 ring-2 ring-white/40"
            style={{ boxShadow: '0 4px 14px rgba(194, 24, 91, 0.4)' }}
          >
            <div className="relative mr-2">
              <IoMdCall className="w-6 h-6 animate-bounce" />
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-pink-400 rounded-full w-2 h-2 animate-ping"></span>
            </div>
            <span className="tracking-wider text-sm md:text-base">{phoneNumber}</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-5">
          {/* {socialLinks.map((item, idx) => (
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
          ))} */}
<a
      href={`mailto:${emailAddress}`}
      className="group relative flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 hover:bg-indigo-200 hover:text-indigo-600 transition-colors duration-300 shadow-sm"
      aria-label={`Email us at ${emailAddress}`}
    >
      {/* Mobile View (Icon Only) */}
      <div className=" md:hidden w-10 h-10 flex items-center justify-center">
        <IoMailOutline className="text-xl" />
      </div>

      {/* Large Screen View (Icon + Text) */}
      <div className="hidden md:flex items-center space-x-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <IoMailOutline className="text-lg" />
        </div>
        <span className="text-sm px-2 text-gray-700 hover:text-indigo-600">{emailAddress}</span>
      </div>

      {/* Optional Tooltip for Mobile (Icon Only) */}
      <span className="md:hidden absolute top-full mt-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Email Us
      </span>
    </a>

          {/* WhatsApp Special */}
          <a
            href="https://wa.me/919368548552"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="relative animate-fade-in-slow"
          >
            <div className="p-3 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-100 hover:bg-green-200 shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <FaWhatsapp className="text-green-600 w-8 h-8 md:w-10 md:h-10 " />
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full w-2.5 h-2.5 animate-ping"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
