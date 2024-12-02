import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaMobile, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const validateForm = () => {
    const validationErrors = [];
    if (!formData.name || !formData.email || !formData.number || !formData.message) {
      validationErrors.push('Please fill in all required fields');
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      validationErrors.push('Please enter a valid email address.');
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);

    if (!validateForm()) {
      toast.error('Please check your input', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        closeOnClick: true,
      });
      return;
    }

    setLoading(true);

    try {
      const url = 'https://portfolioapi-17m9.onrender.com/api/contact'; 
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error(`HTTP error! Status: ${response.status}`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          closeOnClick: true,
        });
      }

      const result = await response.json();
      if(result){
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });
        setFormData({ name: '', email: '', number: '', message: '' });
      }
     
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'An unexpected error occurred from the server.',
        { position: 'top-right', autoClose: 3000 }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-200 to-red-500 text-white py-20" id="contact">
      <ToastContainer />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>I'm open to discussing web development projects or partnership opportunities</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-600 mr-2" />
              <a href="mailto:dankukennedy@gmail.com" className="hover:underline">
                dankukennedy@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-600 mr-2" />
              <span>+233 247836603</span>
            </div>
            <div className="mb-4">
              <FaMobile className="inline-block text-green-600 mr-2" />
              <span>+233 203760941</span>
            </div>
            <div className="mb-4">
              <FaWhatsapp className="inline-block text-green-600 mr-2" />
              <a
                href="https://wa.me/message/EXF33XUPKEM3E1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp Me
              </a>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-600 mr-2" />
              <span>F224 Barbet ST, GD-269-4680, Amrahia, Accra Ghana</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="number" className="block mb-2">
                  Your Contact
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  placeholder="Enter Your Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
