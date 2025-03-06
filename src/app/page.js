"use client"; // Mark as client component

import { useEffect } from "react";

const HomeClient = () => {
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
    <div className="relative container mx-auto ">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover  bg-black "
      >
        <source src="/assets/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Hero Section */}
      <section class="wrapper">
        <div class="hero"></div>
        <div class="content-back">
          <h1 class="h1-glow section" data-text="Welcome to Our Website ">
            Welcome to Our Website
          </h1>
          <p className="p-glow section">
            Transform Your Business with Expert Consulting
          </p>
          <a href="#services" className="glow-on-hover mt-6 px-6 py-3 section">
            Explore Our Services
          </a>
          <input type="checkbox" id="switch" />
          <label for="switch">
            <span>
              <span class="icon">→</span> switch bg
            </span>
          </label>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-100 section">
            Our Services
          </h2>
          <div className="sec_service section">
            <div className="box section">
              <span></span>
              <div className="content section">
                <h2>✅ ISO 9001 Quality Audits & Compliance</h2>

                <a href="#">Read More</a>
              </div>
            </div>
            <div className="box section">
              <span></span>
              <div className="content ">
                <h2>📊 Lean Manufacturing & Process Optimization</h2>

                <a href="#">Read More</a>
              </div>
            </div>
            <div className="box section">
              <span></span>
              <div className="content">
                <h2>💻 Digital Transformation & AI Consulting</h2>

                <a href="#">Read More</a>
              </div>
            </div>
          </div>
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

export default HomeClient;
