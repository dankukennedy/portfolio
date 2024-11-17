import React from 'react'
import HeroImage from  '../assets/office.jpeg'

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-red-200 to-red-500 text-white text-center py-16 '>
         <img src={HeroImage} alt="" 
         className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
         <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600'> Danku Kennedy Edem </span>
            Full-Stack Developer 
         </h1>
         <p className='mt-4 text-lg text-gray-100 '>
            I specialize in building modern and responsive web applications.
         </p>
         <div className='mt-8 space-x-4 '>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
          <a href="assets/files/CV.pdf" download="D.K Edem CV.pdf" className="inline-block">
            <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
             My Resume
            </button>
         </a>

         </div>
    </div>
  )
}

export default Hero