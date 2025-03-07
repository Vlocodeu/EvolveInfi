"use client"; // ✅ Ensure it's a client component
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("en");

  return (
    <nav className="px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-white text-lg font-semibold">EvolveInfi</span>
        </div>

        {/* Menu */}
        <div className="flex-grow flex justify-center hidden md:flex space-x-20">
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

        {/* Buttons Section */}
        <div className="flex items-center space-x-4">
          {/* Launch App Button */}
          {/* <button className="glowing-btn">
        <span className="glowing-txt">
          Get<span className="faulty-letter">Star</span>ted
        </span>
      </button> */}

          {/* Language Selector */}
          {/* <div className="flex space-x-2 bg-white p-1 rounded-full shadow">
        <button
          className={`px-3 py-1 text-sm rounded-full ${
            language === "en"
              ? "bg-indigo-700 text-white"
              : "text-indigo-700"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
        <button
          className={`px-3 py-1 text-sm rounded-full ${
            language === "es"
              ? "bg-indigo-700 text-white"
              : "text-indigo-700"
          }`}
          onClick={() => setLanguage("es")}
        >
          ES
        </button>
      </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
