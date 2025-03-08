"use client";

import React from "react";
import "../globals.css";

import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add visible class
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <div className="container mx-auto bg-black">
      <section className="main-color-bg">
        <div className="sub-support-bg"></div>
        <div className="content-back-contactus">
          <h1 className="h1-glow local-content-contactus section">
            Contact Us
          </h1>
          <form className="nft bg-gray-800 p-6 section">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-white mb-2">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6 section">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="mt-2 text-gray-400">
              Get in touch for quality consulting services.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-white text-2xl hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white text-2xl hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white text-2xl hover:text-gray-400">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="text-white text-2xl hover:text-gray-400">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              © 2025. All rights reserved.
            </p>
          </div>

          {/* Center Section - Email Info */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <p className="text-lg font-medium">info@nitikajindal.com</p>
          </div>

          {/* Right Section - Email Subscription */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold text-center md:text-left">
              Your Email Address
            </h3>
            <div className="mt-2 flex items-center">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-64 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="ml-3 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition duration-300">
                Submit Your Inquiry
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs; // Ensure this is a default export
