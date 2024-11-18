
import React, { useState } from 'react';
 import logo from  '../assets/logo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-15 h-10 mr-2 rounded " // Adjust size as needed
          />
          <span className="p-1 text-2xl font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Edem</span>
        </a>
        
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home"className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Home</a>
          <a href="#about" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">About</a>
          <a href="#service" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Services</a>
          <a href="#project" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Projects</a>
          <a href="#contact" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Contact</a>
        </div>

        {/* Desktop Button */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4 text-center">
            <a href="#home" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Home</a>
            <a href="#about" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">About Me</a>
            <a href="#service" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Services</a>
            <a href="#project" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Projects</a>
            <a href="#contact" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
