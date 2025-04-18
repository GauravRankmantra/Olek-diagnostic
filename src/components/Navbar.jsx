import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/olekLogo.jpg";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "09368548552";
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-200 border-b border-gray-100 shadow-md font-ralewaySb sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-12 object-contain" alt="Logo" />
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 text-[#a01a5a]" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-[#a01a5a]" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-200 md:bg-transparent z-40 p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen
              ? "block border-t md:border-t-0 space-y-1.5"
              : "hidden md:flex"
          }`}
        >
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={idx} className="relative group">
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-1 px-3 text-gray-900 rounded transition ${
                    isActive ? "text-[#a01a5a]" : "hover:text-[#22443f]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[1px] bg-[#a01a5a] transition-transform duration-300 ease-in-out origin-left w-full transform ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}

          {/* 📞 Call Button - visible only on mobile when menu is open */}
          <li className="md:hidden pt-2">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center bg-[#a01a5a] hover:bg-[rgba(255,164,208,1)] p-2 rounded transition group w-full"
            >
              <IoMdCall className="w-5 h-5 mr-2 text-[rgba(255,164,208,1)] group-hover:text-[#a01a5a]" />
              <span className="text-sm text-[rgba(255,164,208,1)] group-hover:text-[#a01a5a]">
                Call us
              </span>
            </a>
          </li>
        </ul>

        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="hidden md:flex items-center bg-[#a01a5a] hover:bg-[rgba(255,164,208,1)] p-2 rounded transition group"
        >
          <IoMdCall className="w-5 h-5 mr-2 text-[rgba(255,164,208,1)] group-hover:text-[#a01a5a]" />
          <span className="text-sm text-[rgba(255,164,208,1)] group-hover:text-[#a01a5a]">
            Call us
          </span>
        </a>
      </div>

      {/* Mobile Call button */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 px-4 pb-4 border-t border-gray-300">
          <a
            href={`tel:${phoneNumber}`}
            className="mt-2 flex items-center justify-center bg-[#a01a5a] hover:bg-[rgba(255,164,208,1)] p-2 rounded transition group w-full"
          >
            <IoMdCall className="w-5 h-5 mr-2 text-[rgba(255,164,208,1)] group-hover:text-[#a01a5a]" />
            <span className="text-sm text-[rgba(255,164,208,1)] group-hover:text-[#a01a5a]">
              Call us
            </span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
