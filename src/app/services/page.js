"use client"; // Mark as client component
import "../globals.css";

import React, { useEffect } from "react";

const ServicesPage = () => {
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
    <div className="relative ">
      {/* Header Section */}
      <section className="wrapper ">
        <div className="hero"></div>
        <div className="content-back">
          <h1 className="h1-glow section">OUR SERVICES</h1>
          <h2 className="p-glow text-xl text-gray-600 mb-8 text-white section">
            Our Services – Empowering Businesses with Excellence & Innovation
          </h2>
          <p className="p-low max-w-2xl mx-auto mb-12 text-white section">
            At EvolveInfi, we provide industry-leading solutions to help
            businesses across Spain and Europe achieve operational excellence,
            process optimization, and digital transformation. Our expert
            consulting services ensure compliance, efficiency, and sustainable
            growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Service 1 */}
          <div className="nft p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
            <div className="image-container relative mb-4">
              <img
                src="/assets/iso-9001.jpeg" // Replace with your image path
                alt="ISO 9001 Quality Audits & Compliance"
                className="image-hover w-full h-48 object-cover rounded-lg transition-transform duration-300"
              />
            </div>
            <h3 className="sub-start text-2xl mb-2">
              ISO 9001 Quality Audits & Compliance
            </h3>
            <ul className="description font-thin list-disc list-inside">
              <li>ISO 9001 certification consulting and compliance support</li>
              <li>Quality management system (QMS) implementation</li>
              <li>
                Internal audits, gap analysis, and continuous improvement
                strategies
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="nft bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
            <div className="image-container relative mb-4">
              <img
                src="/assets/lean-manufacturing.jpeg" // Replace with your image path
                alt="Lean Manufacturing & Process Optimization"
                className="image-hover w-full h-48 object-cover rounded-lg transition-transform duration-300"
              />
            </div>
            <h3 className="sub-start text-2xl font-semibold mb-2">
              Lean Manufacturing & Process Optimization
            </h3>
            <ul className="description list-disc list-inside">
              <li>
                Lean Six Sigma Black Belt consulting for waste reduction and
                efficiency
              </li>
              <li>Process automation and workflow optimization</li>
              <li>
                Kaizen, 5S methodology, and continuous improvement strategies
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="nft bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
            <div className="image-container relative mb-4">
              <img
                src="/assets/digital-trans.jpeg" // Replace with your image path
                alt="Digital Transformation & AI Consulting"
                className="image-hover w-full h-48 object-cover rounded-lg transition-transform duration-300"
              />
            </div>
            <h3 className="sub-start text-2xl font-semibold mb-2">
              Digital Transformation & AI Consulting
            </h3>
            <ul className="description list-disc list-inside">
              <li>AI-powered business automation solutions</li>
              <li>Cloud integration and data-driven decision-making</li>
              <li>Smart ERP, CRM, and enterprise software consulting</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="nft bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
            <div className="image-container relative mb-4">
              <img
                src="/assets/web-dev.jpeg" // Replace with your image path
                alt="Custom Web Application Development"
                className="image-hover w-full h-48 object-cover rounded-lg transition-transform duration-300"
              />
            </div>
            <h3 className="sub-start text-2xl font-semibold mb-2">
              Custom Web Application Development
            </h3>
            <ul className="description list-disc list-inside">
              <li>Scalable, secure, and high-performance web applications</li>
              <li>Custom software solutions for business process automation</li>
              <li>UI/UX design, API development, and system integration</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="nft bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 section">
            <div className="image-container relative mb-4">
              <img
                src="/assets/business-growth.jpeg" // Replace with your image path
                alt="Business Growth & Strategy Consulting"
                className="image-hover w-full h-48 object-cover rounded-lg transition-transform duration-300"
              />
            </div>
            <h3 className="sub-start text-2xl font-semibold mb-2">
              Business Growth & Strategy Consulting
            </h3>
            <ul className="description list-disc list-inside">
              <li>Data analytics and business intelligence solutions</li>
              <li>Digital marketing and brand positioning strategies</li>
              <li>Customized growth plans for operational scalability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 text-center ">
        <h2 className="text-3xl font-bold mb-4 text-white section">
          🚀 Why Choose EvolveInfi?
        </h2>
        <ul className="max-w-2xl mx-auto list-disc list-inside mb-8 text-white section">
          <li>✔ Expert consulting with 5+ years of experience</li>
          <li>
            ✔ Proven methodologies like Lean Six Sigma, AI automation, and ISO
            certification
          </li>
          <li>
            ✔ Industry-focused solutions tailored for manufacturing, IT, and
            service sectors
          </li>
          <li>
            ✔ Data-driven strategies for efficiency, compliance, and digital
            innovation
          </li>
        </ul>
        <p className="text-lg font-semibold text-white section">
          📞 Ready to transform your business? Contact us today!
        </p>
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

export default ServicesPage;
