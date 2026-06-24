import React from "react";
import {
  FaFacebook,
  FaGithubAlt,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  // API URL Reference placeholder if needed: https://portfolioapi-ixx3.onrender.com

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Logic for handling email tracking/subscription API calls can go here
  };

  return (
    <footer className="py-8 text-white bg-black">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <div className="flex flex-col items-center mb-4 md:flex-row md:space-x-12">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="mb-2 text-2xl font-bold">Danku Kennedy Edem</h3>
            <p className="text-gray-400">
              Software Engineer based in Accra Ghana, specializing in web and
              software development
            </p>
          </div>
          <div className="flex-1 w-full">
            <form
              onSubmit={handleSubscribe}
              className="flex items-center justify-center"
            >
              <input
                type="email"
                placeholder="Enter Email"
                required
                className="w-full p-2 bg-gray-800 border-gray-600 rounded-l-lg focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-r-lg bg-gradient-to-r from-green-400 to-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-4 border-t border-gray-600 md:flex-row">
          <p className="text-sm text-center text-gray-400 md:text-left">
            Copyright &copy; {new Date().getFullYear()} Danku Kennedy Edem. All
            rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://web.facebook.com/mofty.chemical"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-green-600 transition-colors hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/kennedy-edem-danku-839108137"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-green-600 transition-colors hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/dankukennedy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-green-600 transition-colors hover:text-white"
            >
              <FaGithubAlt />
            </a>
            <a
              href="#"
              className="text-xl text-green-600 transition-colors hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-xl text-green-600 transition-colors hover:text-white"
            >
              <FaTelegram />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 text-sm">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
