"use client"; // Mark as client component

import React, { useEffect } from "react";

const BlogPage = () => {
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
    <div className="relative">
      {/* Blog Header */}
      <section className="wrapper">
        <div className="hero"></div>
        <div className="content-back">
          <header className="py-10 text-center">
            <h1 className="h1-glow  section">BLOG</h1>
            <h2 className="p-glow text-2xl font-thin mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent section">
              How EvolveInfi is Transforming Businesses with ISO 9001, Lean Six
              Sigma, and AI-Driven Digital Solutions
            </h2>
          </header>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="mb-10">
          <h3 className="text-3xl  mb-4 font-bold subheading-text section">
            Introduction
          </h3>
          <p className="mb-4 font-thin text-gray-500 section">
            In today’s competitive business landscape, companies must streamline
            operations, enhance efficiency, and embrace digital transformation
            to stay ahead. At EvolveInfi, we specialize in helping businesses
            across Spain and Europe achieve operational excellence through ISO
            9001 quality audits, Lean Manufacturing, Lean Six Sigma consulting,
            web application development, and AI-driven digital transformation.
          </p>
          <p className="mb-4 font-thin text-gray-500 section">
            With over 5 years of industry expertise, we empower manufacturing,
            engineering, IT, and service-based industries by offering
            data-driven strategies that improve efficiency, compliance, and
            scalability.
          </p>
        </section>

        {/* ISO 9001 Section */}
        <section className="mb-10 section">
          <h3 className="text-3xl subheading-text">
            The Power of ISO 9001 in Business Success
          </h3>
          <p className="mb-4 font-thin text-gray-500">
            Achieving ISO 9001 certification is more than just a compliance
            requirement—it’s a strategic move toward better quality management,
            customer satisfaction, and business growth.
          </p>
          <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Why ISO 9001 Matters?
          </h4>
          <ul className="list-disc list-inside mb-4 font-thin text-gray-500">
            <li>
              Establishes a quality management system (QMS) for operational
              efficiency
            </li>
            <li>Improves customer satisfaction and trust</li>
            <li>Helps in risk management and regulatory compliance</li>
            <li>
              Enhances brand reputation and opens new market opportunities
            </li>
          </ul>
          <p className="mb-4 font-thin text-gray-500">
            At EvolveInfi, we provide ISO 9001 certification consulting,
            internal audits, and compliance solutions to help businesses achieve
            and maintain international quality standards.
          </p>
          <div className="overflow-hidden rounded-lg my-4">
            <img
              src="/assets/evolveinfi.com.png"
              alt="ISO 9001"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </section>

        {/* Lean Six Sigma Section */}
        <section className="mb-10 section">
          <h3 className="text-3xl subheading-text">
            Lean Six Sigma: Driving Efficiency & Cost Reduction
          </h3>
          <p className="mb-4 font-thin text-gray-500">
            In industries like manufacturing, engineering, and IT, efficiency is
            key to success. Lean Six Sigma combines Lean principles (waste
            reduction) with Six Sigma methodologies (process improvement) to
            deliver higher productivity and lower costs.
          </p>
          <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            How Lean Six Sigma Helps Businesses?
          </h4>
          <ul className="list-disc list-inside mb-4 font-thin text-gray-500">
            <li>Eliminates waste, defects, and inefficiencies</li>
            <li>Enhances process standardization and workflow optimization</li>
            <li>Reduces operational costs and improves profitability</li>
            <li>Boosts employee productivity and customer satisfaction</li>
          </ul>
          <p className="mb-4 font-thin text-gray-500">
            Our Lean Principles consulting ensures that businesses implement the
            right strategies to optimize processes and achieve sustainable
            growth.
          </p>
          <img
            src="/assets/lean-six-sigma.png"
            alt="Lean Six Sigma"
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
          />
        </section>

        {/* Digital Transformation Section */}
        <section className="mb-10 section">
          <h3 className="text-3xl subheading-text">
            Digital Transformation & AI: The Future of Business
          </h3>
          <p className="mb-4  font-thin text-gray-500">
            With the rise of Industry 4.0, businesses must leverage AI-driven
            digital transformation to stay competitive. At EvolveInfi, we
            integrate AI, automation, and cloud-based solutions to enhance
            business operations.
          </p>
          <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Key Benefits of AI-Driven Digital Transformation:
          </h4>
          <ul className="list-disc list-inside mb-4 font-thin text-gray-500">
            <li>AI-powered business automation for faster workflows</li>
            <li>
              Smart ERP, CRM, and cloud solutions for data-driven decisions
            </li>
            <li>
              Web application development for seamless digital experiences
            </li>
            <li>Advanced predictive analytics and AI consulting</li>
          </ul>
          <p className="mb-4 font-thin text-gray-500">
            From automating manual processes to developing custom web
            applications, we ensure that businesses embrace technology for
            maximum efficiency and scalability.
          </p>
          <img
            src="/assets/digital-transformation.jpeg"
            alt="Digital Transformation"
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
          />
        </section>

        {/* Custom Web Application Development Section */}
        <section className="mb-10 section">
          <h3 className="text-3xl subheading-text">
            Custom Web Application Development: A Game-Changer for Businesses
          </h3>
          <p className="mb-4 font-thin text-gray-500">
            A well-designed web application improves customer engagement,
            business automation, and operational control. We specialize in
            building scalable, secure, and high-performance web applications
            tailored to specific business needs.
          </p>
          <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Our Web Development Services Include:
          </h4>
          <ul className="list-disc list-inside mb-4 font-thin text-gray-500">
            <li>Custom web application development for automation</li>
            <li>API integration and system optimization</li>
            <li>UI/UX design for better user experience</li>
            <li>Secure, fast, and scalable cloud solutions</li>
          </ul>
          <p className="mb-4 font-thin text-gray-500">
            By combining AI, digital tools, and automation, we help businesses
            unlock new opportunities for growth and customer engagement.
          </p>
          <img
            src="/assets/web-development.jpeg"
            alt="Web Development"
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105 my-4"
          />
        </section>
      </div>
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

export default BlogPage;
