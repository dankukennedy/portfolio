import React from 'react'
import { FaEnvelope,FaPhone, FaMapMarkedAlt, FaMobile} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
    <div className='container mx-auto px-8 md:px-16 lg:px:24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12 '> 
             <div className='flex-1 ' >
               <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>                
                 <p>I'm open to discussing web development projects or partnership opportunities</p>
                  <div className='mb-4 mt-8 '>
                    <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                    <a href="mailto:dankukennedy@gmail.com" className='hover:underline'>
                    dankukennedy@gmail.com
                    </a>
                  </div>
                  <div className='mb-4 '>
                    <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                     <span>+233 247836603</span>
                  </div>
                  <div className='mb-4 '>
                    <FaMobile className='inline-block text-green-400 mr-2'></FaMobile>
                     <span>+233 203760941</span>
                  </div>
                  <div className='mb-4 '>
                    <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                    <span>F224 Barbet ST, GD-269-4680, Amrahia, Accra Ghana  </span>
                  </div>
             </div>
             <div className='flex-1 w-full'>
                <form action="" className='space-y-4'>
                    <div >
                          <label htmlFor="name" className='block mb-2'>Your Name</label>
                          <input type="text"
                          className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                          placeholder='Enter Your Name' />
                    </div>
                    <div >
                          <label htmlFor="email" className='block mb-2'>Your Email</label>
                          <input type="text"
                          className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                          placeholder='Enter Your Email' />
                    </div>
                    <div >
                          <label htmlFor="message" className='block mb-2'>Your Message</label>
                          <textarea type="text"
                          className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                          rows="5"
                          placeholder='Enter Your Message' />
                    </div>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send Message</button>
                </form>
             </div>
        </div>
    </div>
</div>
  )
}

export default Contact