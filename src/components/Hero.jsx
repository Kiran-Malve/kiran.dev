import React, { useState } from 'react';
import profileImage from '../assets/kiran_image.jpg';
import toast, { Toaster } from 'react-hot-toast';


const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const copyNumber = () => {
    navigator.clipboard.writeText("9893133076");
    toast.success('Copied to clipboard!', {
      position: 'top-center',
      style: {
        background: 'grey',
        color: '#fff',
      },
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Kiran Malve</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">Frontend Developer</h2>
            <p className="text-gray-300 mb-8">
              I build exceptional digital experiences with modern technologies and responsive application.
            </p>
            <div className="flex space-x-4">
            <div className="relative inline-block">
              <button
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className={`inline-block transition-transform duration-300 ${isHovered ? '-translate-y-8' : ''}`}>
                  Contact Me
                </span>
                <span 
                  className={`absolute left-0 right-0 text-center transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-8'}`}
                  style={{ top: '50%', transform: isHovered ? 'translateY(-50%)' : 'translateY(calc(100% + 0.5rem))' }}
                  onClick={()=>copyNumber()}
                >
                  9893133076
                </span>
              </button>
            </div>
              <a
                href="#projects"
                className="border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors duration-300"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent to-purple-900 overflow-hidden border-4 border-accent">
              <img alt='profile-image' src={profileImage} />
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                Your Photo
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />

    </section>
  );
};

export default Hero;