import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroImage from '../assets/profile.jpeg';
import cv from '../assets/files/DKE-CV.pdf';


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage popup visibility
  const [loading, setLoading] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    file: null,
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.number) {
      toast.error('Please fill in all fields.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('number', formData.number);
    formDataToSubmit.append('message', formData.message);

    if (formData.file) {
      formDataToSubmit.append('file', formData.file);
    }

    setLoading(true);

    try {
      // Replace with your API URL
      const response = await fetch('https://portfolioapi-17m9.onrender.com/api/requirement', {
        method: 'POST',
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setFormData({ name: '', email: '', number: '', message: '', file: null }); // Reset form
      togglePopup(); // Close the popup
      
    } catch (error) {
      toast.error(error.response?.data?.message||'Failed to submit form. Try again later.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  return (
    <div className="py-16 text-center text-white bg-gradient-to-r from-red-400 to-red-600">
      <ToastContainer />
      <img
        src={HeroImage}
        alt="Hero"
        className="object-cover w-48 h-48 mx-auto mb-8 transition-transform duration-300 transform border-8 rounded-full hover:scale-105 hover:border-green-600"
      />
      <h1 className="text-4xl font-bold">
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-950">
          Danku Kennedy Edem
        </span>{' '}
        <p className='m-4'>
        <span className="m-2 font-serif text-2xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-950 from-black text-nowrap">🔰IT Professional🔰</span><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-950 from-black text-nowrap">🔰Software Engineer🔰</span><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-950 from-black text-nowrap">🔰Full-Stack Architect🔰</span></span>
        </p>
        
      </h1>
      <p className="mt-4 text-lg text-gray-100">
        <marquee className="font-serif text-2xl text-black">I specialize in building modern and responsive web applications.</marquee>
      </p>
      <div className="mt-8 space-x-4">
        <a href="https://www.linkedin.com/in/kennedy-edem-danku-839108137" target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 text-xl text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 hover:border-4">
            LinkedIn Profile
          </button>
        </a>
        <a href="https://gravatar.com/happilywise8526b101c9" target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 text-xl text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 hover:border-4">
            Gravatar 
          </button>
        </a>
        <a href={cv} download className="inline-block">
          <button className="px-4 py-2 my-1 text-xl text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-500 to-blue-700 hover:scale-105 hover:border-4">
          My Resume ⬇️
          </button>
        </a>

        <button
          onClick={togglePopup}
          className="px-4 py-2 my-1 text-xl text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 hover:border-4"
        >
         Request My Services
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
            <div className="w-11/12 p-6 bg-black rounded shadow-lg bg-opacity-80 sm:w-3/4 md:w-1/2 lg:w-1/3">
              <button
                onClick={togglePopup}
                className="float-right font-bold text-white"
              >
                <span className='px-2 text-2xl bg-red-700 rounded-md'>X</span>
              </button>
              <h2 className="mb-4 text-2xl font-bold text-center text-white">Fill Your Requirement Form </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 text-white bg-transparent border border-gray-300 rounded"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 text-white bg-transparent border border-gray-300 rounded"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="number" className="block mb-2 text-white">
                    Your Contact Number
                  </label>
                  <input
                    type="tel" // Changed type from 'number' to 'tel'
                    id="number"
                    className="w-full p-2 text-white bg-transparent border border-gray-300 rounded"
                    value={formData.number}
                    onChange={(e) =>
                      setFormData({ ...formData, number: e.target.value })
                    }
                    placeholder="Your number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-white">
                    Your Message or Requirements
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-2 text-white bg-transparent border border-gray-300 rounded"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="file" className="block mb-2 text-white ">
                    Upload Requirement Documents (PDF or DOC)
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="w-full p-2 text-white bg-transparent border border-gray-300 rounded"
                    onChange={handleFileChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-2 mt-4 text-white rounded bg-gradient-to-r from-green-400 to-blue-600 hover:bg-green-600 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
