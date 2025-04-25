import React from 'react';

const Navbar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
      <ul className={`${isOpen ? 'absolute top-16 left-0 right-0 bg-secondary py-4 px-4 space-y-4' : 'flex space-x-8'}`}>
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-white hover:text-accent transition-colors duration-300 block py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;