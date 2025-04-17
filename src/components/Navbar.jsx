import React from "react";
import logo from "../assets/Images/olekLogo.jpg";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 border-b border-gray-100 shadow-md font-ralewaySb">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/" // Changed to root for simplicity in this context
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-12 object-contain" // Adjusted height and object-fit
              alt="Logo"
            />
          </a>
          <div className="flex items-center md:order-2">
            <button className="flex items-center  bg-[#005b4c] hover:bg-[#dff391] cursor-pointer p-2 rounded border-gray-400 group">
              <IoMdCall className="w-10 h-6 cursor-pointer group-hover:text-[#005b4c] text-[#dff391]" />
              <span className="group-hover:text-[#005b4c] text-[#dff391]"> Call us</span>{" "}
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0   dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
