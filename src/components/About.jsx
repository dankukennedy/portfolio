import React from 'react'
import AboutImage from '../assets/pro.jpeg'

const About = () => {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px:24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12 '> 
                <img src={AboutImage} alt="" 
                className='w-75 h-80 rounded object-center mb-8 md:mb-0'/>
                 <div className='flex-1 ' >
                   <p className='text-lg mb-8 '>
                     I am a passionate full-stack developer with a focus on building modern and responsive web applications. With a strong 
                     foundation in both frontend and backend technologies, i strive to create seamless and efficient user experiences,
                  </p>
                    <div className='space-y-4'>
                       <div className='flex items-center'>
                           <label htmlFor="html" className="w-2/12">HTML CSS & JS</label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-11/12'>
                            </div>
                           </div>
                       </div>
                       <div className='flex items-center'>
                           <label htmlFor="html" className="w-2/12">PHP & MYSQL </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-10/12'>
                            </div>
                           </div>
                       </div>
                       <div className='flex items-center'>
                           <label htmlFor="html" className="w-2/12">C++ Python & Django </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-9/12'>
                            </div>
                           </div>
                       </div>
                       <div className='flex items-center'>
                           <label htmlFor="html" className="w-2/12">Node JS Express JS </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-10/12'>
                            </div>
                           </div>
                       </div>
                       <div className='flex items-center'>
                           <label htmlFor="html" className="w-2/12">React JS TS Vite </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-9/12'>
                            </div>
                           </div>
                       </div>
                       
                       <div className='flex items-center'>
                           <label htmlFor="html" className="w-2/12">MERN STACK </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-8/12'>
                            </div>
                           </div>
                       </div>
                       
                       <div className='flex items-center'>
                           <label htmlFor="html" className="w-2/12">Laravel</label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-7/12'>
                            </div>
                           </div>
                       </div>
                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                                5+
                            </h3>
                             <p> Years Experience</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                                10+
                            </h3>
                             <p> Projects Completed</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                                6+
                            </h3>
                             <p> Happy Clients </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                                5+
                            </h3>
                             <p> New Projects</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                             Education
                            </h3>
                            <a href="https://dankukennedy.github.io/" target="" className="p-1 hover:text-white font-bold hover:bg-gradient-to-r from-green-300 to-blue-500 rounded"> Visit Profile</a>
                        </div>
                    </div>
                 </div> 
            </div>
        </div>
    </div>
  )
}

export default About