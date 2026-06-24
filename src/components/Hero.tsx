import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroImage from '../assets/profile.jpeg';
import cv from '../assets/files/DKE.pdf';

// Define the interface for form data state
interface HeroFormData {
  name: string;
  email: string;
  number: string;
  message: string;
  file: File | null;
}

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage popup visibility
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [formData, setFormData] = useState<HeroFormData>({
    name: '',
    email: '',
    number: '',
    message: '',
    file: null,
  });

  const togglePopup = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
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
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error?.message || 'Failed to submit form. Try again later.';
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null;
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
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-950">
          Danku Kennedy Edem
        </span>{" "}
        <div className="m-4">
          <span className="m-2 font-serif text-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-950 from-black text-nowrap">
              🔰IT Professional🔰
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-950 from-black text-nowrap">
              🔰Software Engineer🔰
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-950 from-black text-nowrap">
              🔰Full-Stack Architect🔰
            </span>
          </span>
        </div>
      </h1>
      <div className="mt-4 text-lg text-gray-100">
        {/* Cast the opening tag as any */}
        {React.createElement(
          "marquee",
          { className: "font-serif text-2xl text-black" },
          "I specialize in building modern and responsive web applications.",
        )}
      </div>
      <div className="mt-8 space-x-4">
        <a
          href="https://www.linkedin.com/in/kennedy-edem-danku-839108137"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 text-xl text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 hover:border-4">
            LinkedIn Profile
          </button>
        </a>
        <a
          href="https://gravatar.com/happilywise8526b101c9"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 p-6 bg-black rounded shadow-lg bg-opacity-90 sm:w-3/4 md:w-1/2 lg:w-1/3">
              <button
                type="button"
                onClick={togglePopup}
                className="float-right font-bold text-white"
              >
                <span className="px-2 text-2xl bg-red-700 rounded-md">X</span>
              </button>
              <h2 className="mb-4 text-2xl font-bold text-center text-white">
                Fill Your Requirement Form{" "}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="popup-name" className="block mb-2 text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="popup-name"
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
                  <label
                    htmlFor="popup-email"
                    className="block mb-2 text-left text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="popup-email"
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
                  <label
                    htmlFor="popup-number"
                    className="block mb-2 text-left text-white"
                  >
                    Your Contact Number
                  </label>
                  <input
                    type="tel"
                    id="popup-number"
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
                  <label
                    htmlFor="popup-message"
                    className="block mb-2 text-left text-white"
                  >
                    Your Message or Requirements
                  </label>
                  <textarea
                    id="popup-message"
                    rows={4}
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
                  <label
                    htmlFor="popup-file"
                    className="block mb-2 text-left text-white"
                  >
                    Upload Requirement Documents (PDF or DOC)
                  </label>
                  <input
                    type="file"
                    id="popup-file"
                    className="w-full p-2 text-white bg-transparent border border-gray-300 rounded"
                    onChange={handleFileChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-2 mt-4 text-white rounded bg-gradient-to-r from-green-400 to-blue-600 hover:bg-green-600 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
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