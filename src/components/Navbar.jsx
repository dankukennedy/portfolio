
import React, { useState } from 'react';
 import logo from  '../assets/logo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-8 text-white bg-black md:px-16 lg:px-24">
      <div className="container flex items-center justify-between py-2">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 mr-2 rounded w-15 " // Adjust size as needed
          />
          <span className="p-1 text-2xl font-bold rounded hover:bg-gradient-to-r from-green-300 to-blue-500">Edem</span>
        </a>
        
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <span className="block w-8 h-1 mb-1 bg-white"></span>
          <span className="block w-8 h-1 mb-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          <a href="#home"className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">Home</a>
          <a href="#about" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">About</a>
          <a href="#service" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">Services</a>
          <a href="#project" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">Projects</a>
          <a href="#contact" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">Contact</a>
        </div>

        {/* Desktop Button */}
        <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">
          Contact Me
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col mt-4 space-y-4 text-center">
            <a href="#home" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">Home</a>
            <a href="#about" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">About Me</a>
            <a href="#service" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">Services</a>
            <a href="#project" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">Projects</a>
            <a href="#contact" className="p-1 font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
