"use client"; // ✅ Ensure it's a client component
import Link from "next/link";
import { useState } from "react";
import "../globals.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-6 py-3 shadow-md bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-white text-lg font-semibold">EvolveInfi</span>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Menu */}
        <div
          className={`flex-grow flex justify-center hidden md:flex space-x-20`}
        >
          {["home", "aboutus", "services", "blogs", "contactus"].map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`} // Set home to link to "/"
              className="glowing-text hover:text-white"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
              {/* Capitalize first letter */}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="flex flex-col items-center space-y-4 py-4">
            {["home", "aboutus", "services", "blogs", "contactus"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "home" ? "/" : `/${item}`} // Set home to link to "/"
                  className="glowing-text hover:text-white"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                  {/* Capitalize first letter */}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
