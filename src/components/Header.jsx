import React, { useState } from 'react';
import Navbar from './Navbar';
import LogoKm from "../assets/logokm.jpg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-secondary shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-accent">
        <div className="rounded-full overflow-hidden border-2 border-accent w-10 h-10 flex items-center justify-center shadow-lg shadow-accent/20">
          <img 
            alt='Kiran Malve Logo'  
            src={LogoKm}  
            width={50} 
            height={50}
            className="object-cover w-full h-full" 
          />
        </div>
      </a>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;