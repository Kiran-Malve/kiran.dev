import React from 'react';
import aboutImage from  '../assets/kiransketch.jpeg'
import cvPDF from "../assets/KiranRavindraReact.pdf"

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-accent">
              {/* Replace with your image */}
                <img  alt='image sktech' src={aboutImage}  />
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                About Image
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate frontend developer with expertise in React.js and modern
              JavaScript frameworks. I love creating beautiful, single page, and
              user-friendly web applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-400">Name:</p>
                <p className="text-white">Kiran Malve</p>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <p className="text-white">kiranmalve99@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-400">From:</p>
                <p className="text-white">Ahmedabad Gujrat</p>
              </div>
              <div>
                <p className="text-gray-400">Experience:</p>
                <p className="text-white">3.5+ Years</p>
              </div>
            </div>
            <a
            href={cvPDF}
            download="Kiran-CV.pdf"  // Forces download with a custom filename
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
            Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;