// app/aboutus/page.js
"use client"; // Mark this file as a client component

import React, { useEffect } from "react";

const AboutUs = () => {
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
      <section className="wrapper">
        <div className="hero"></div>
        <div className="content-back">
          <h1 className="h1-glow  mb-6 section">ABOUT US</h1>
          <h2 className="p-glow text-1xl text-center mb-4 section">
            EvolveInfi: Your Partner in ISO 9001 Quality Audits, Lean
            Manufacturing, and Digital Transformation
          </h2>
        </div>
      </section>
      <p className="max-w-4xl mx-auto px-4 text-lg font-thin text-gray-500 mb-10 bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent section ">
        At EvolveInfi, we empower businesses across Spain and Europe with expert
        solutions in ISO 9001 quality audits, Lean Manufacturing, Lean Six Sigma
        Black Belt consulting, web application development, and AI-driven
        digital transformation.
      </p>
      <p className="max-w-4xl mx-auto px-4 font-thin text-gray-500 mb-6 section">
        With over 5 years of industry expertise, we specialize in helping
        manufacturing, engineering, IT, and service-based industries enhance
        efficiency, compliance, and operational visibility.
      </p>
      <ul className="max-w-4xl mx-auto px-4 list-disc list-inside font-thin text-gray-500 mb-6 section">
        <li>
          Quality Management & Compliance – Achieve ISO 9001 certification and
          streamline audit processes.
        </li>
        <li>
          Process Optimization & Lean Six Sigma – Improve productivity, reduce
          waste, and drive continuous improvement.
        </li>
        <li>
          Digital Transformation & AI Consulting – Leverage cutting-edge AI
          solutions to automate and optimize business operations.
        </li>
        <li>
          Custom Web Application Development – Build scalable, secure, and
          high-performance web applications tailored to your needs.
        </li>
      </ul>
      <p className="max-w-4xl mx-auto px-4 font-thin text-gray-500 mb-6 section">
        We help businesses optimize, automate, and grow with industry-leading
        strategies, enhancing operational excellence.
      </p>
      <p className="max-w-4xl mx-auto px-4 font-thin text-gray-500 mb-6 section">
        Looking to enhance efficiency and scale your business? Contact us today!
      </p>

      <h2 className="text-3xl font-bold text-center mt-10 mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent section">
        MISSION
      </h2>
      <p className="p-low max-w-4xl mx-auto mb-12 font-thin text-white section">
        At EvolveInfi, our mission is to empower businesses across Spain and
        Europe by delivering ISO 9001 quality audits, Lean Manufacturing, Lean
        Six Sigma consulting, AI-driven digital transformation, and custom web
        application development. We strive to enhance operational efficiency,
        drive process excellence, and foster digital innovation for
        manufacturing, engineering, IT, and service-based industries. Our goal
        is to help businesses optimize workflows, improve compliance, and
        achieve sustainable growth through cutting-edge technology and
        industry-best practices.
      </p>

      <h2 className="text-3xl font-bold text-center mt-10 mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent section">
        VISION
      </h2>
      <p className="p-low max-w-4xl mx-auto mb-12 font-thin text-white  section">
        Our vision is to become a leading global consulting firm specializing in
        quality management, process optimization, and digital transformation,
        helping businesses achieve operational excellence and competitive
        advantage in the evolving digital landscape. We aim to be the trusted
        partner for businesses seeking to automate, optimize, and scale their
        operations through ISO certification, AI solutions, and digital
        innovation.
      </p>
      <p className="max-w-4xl mx-auto px-4 font-thin text-gray-500 mb-6 section">
        By integrating Lean Six Sigma methodologies, AI-driven automation, and
        smart digital strategies, we envision a future where businesses maximize
        efficiency, reduce costs, and achieve long-term success in a rapidly
        evolving market.
      </p>
      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6">
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

export default AboutUs; // Ensure this is a default export
