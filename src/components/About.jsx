import React from 'react'
import AboutImage from '../assets/pro.jpeg'

const About = () => {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px:24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12 '>
                <img src={AboutImage} alt="profile"
                className='w-75 h-80 rounded-3xl object-center mb-8 md:mb-0 border-8 border-blue-800 transform transition-transform duration-300 hover:scale-105 hover:border-green-600'/>
                 <div className='flex-1 ' >
                   <p className='text-lg mb-8 px-8 '>
                     I am a passionate software engineer with a focus on building modern and responsive web applications. With a strong 
                     foundation in both frontend and backend technologies, i strive to create seamless and efficient user experiences,
                  </p>
                    <div className='space-y-4 px-2'>
                       <div className='flex items-center px-6'>
                           <label htmlFor="html" className="w-2/12 font-serif px-2 mr-8">HTML CSS JS</label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-11/12'>
                            </div>
                           </div>
                       </div>
                       <div className='flex items-center px-6'>
                           <label htmlFor="html" className="w-2/12 font-serif px-2 mr-8">PHP MYSQL </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-10/12'>
                            </div>
                           </div>
                       </div>
                       <div className='flex items-center px-6'>
                           <label htmlFor="html" className="w-2/12 font-serif px-2 mr-8">C++ Python </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-9/12'>
                            </div>
                           </div>
                       </div>
                       <div className='flex items-center px-6'>
                           <label htmlFor="html" className="w-2/12 font-serif px-2 mr-8">Node Express </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-10/12'>
                            </div>
                           </div>
                       </div>
                       <div className='flex items-center px-6'>
                           <label htmlFor="html" className="w-2/12 font-serif px-2 mr-8">React Vite TS </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-8/12'>
                            </div>
                           </div>
                       </div>
                       
                       <div className='flex items-center px-6'>
                           <label htmlFor="html" className="w-2/12 font-serif px-2 mr-8">MERN STACK </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-7/12'>
                            </div>
                           </div>
                       </div>
                       
                       <div className='flex items-center px-6'>
                           <label htmlFor="html" className="w-2/12 font-serif px-2 mr-8">Laravel </label>
                           <div className='grow bg-gray-800 rounded-full h-2.5 '>
                            <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full 
                            transform transition-transform duration-300 hover:scale-105 w-6/12'>
                            </div>
                           </div>
                       </div>
                    </div>
                    <div className='mt-12 flex justify-between text-center px-1'>
                        <div className='p-1'>
                            <h3 className='text-2xl font-bold font-serif text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                                5+
                            </h3>
                             <p className='font-serif'> Years Experience </p>
                        </div>
                        <div className='p-1'>
                            <h3 className='text-2xl font-bold font-serif text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                                10+
                            </h3>
                             <p className='font-serif'> Projects Completed </p>
                        </div>
                        <div className='p-1'>
                            <h3 className='text-2xl font-bold font-serif text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                                6+
                            </h3>
                             <p className='font-serif'> Happy Clients </p>
                        </div>
                        <div className='p-1'>
                            <h3 className='text-2xl font-bold font-serif text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>
                                5+
                            </h3>
                             <p className='font-serif'> New Projects</p>
                        </div>
                        <div  className='p-1'>
                            <h3 className='text-2xl font-bold font-serif text-transparent bg-clip-text 
                            bg-gradient-to-r from-green-500 to-blue-500'>Edu
                              </h3>
                              <p className='font-serif'>Profile</p>
                            <a href="https://dankukennedy.github.io/" target="" className="p-1 hover:text-white font-bold font-serif hover:bg-gradient-to-r from-green-300 to-blue-500 rounded"><span className='text-xs'>Click </span>↗️</a>
                        </div>
                    </div>
                 </div> 
            </div>
        </div>
    </div>
  )
}

export default About