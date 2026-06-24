import React from 'react';
import AboutImage from '../assets/pro.jpeg';

const About: React.FC = () => {
  return (
    <div className='py-20 text-white bg-black' id='about'>
      <div className='container px-8 mx-auto md:px-16 lg:px-24'>
        <h2 className='mb-12 text-4xl font-bold text-center'>About Me</h2>
        <div className='flex flex-col items-center md:flex-row md:space-x-12'>
          <img 
            src={AboutImage} 
            alt="profile"
            className='object-center mb-8 transition-transform duration-300 transform border-8 border-blue-800 w-75 h-80 rounded-3xl md:mb-0 hover:scale-105 hover:border-green-600'
          />
          <div className='flex-1'>
            <p className='px-8 mb-8 text-lg'>
              I am a passionate software engineer with a focus on building modern and responsive web applications. With a strong 
              foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
            </p>
            <div className='px-2 space-y-4'>
              {/* HTML CSS JS */}
              <div className='flex items-center px-6'>
                <label htmlFor="skill-html" className="w-2/12 px-2 mr-8 font-serif">HTML CSS JS</label>
                <div id="skill-html" className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                </div>
              </div>
              {/* PHP MYSQL */}
              <div className='flex items-center px-6'>
                <label htmlFor="skill-php" className="w-2/12 px-2 mr-8 font-serif">PHP MYSQL</label>
                <div id="skill-php" className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                </div>
              </div>
              {/* C++ Python */}
              <div className='flex items-center px-6'>
                <label htmlFor="skill-cpp" className="w-2/12 px-2 mr-8 font-serif">C++ Python</label>
                <div id="skill-cpp" className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                </div>
              </div>
              {/* Node Express */}
              <div className='flex items-center px-6'>
                <label htmlFor="skill-node" className="w-2/12 px-2 mr-8 font-serif">Node Express</label>
                <div id="skill-node" className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                </div>
              </div>
              {/* React Vite TS */}
              <div className='flex items-center px-6'>
                <label htmlFor="skill-react" className="w-2/12 px-2 mr-8 font-serif">React Vite TS</label>
                <div id="skill-react" className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'></div>
                </div>
              </div>
              {/* MERN STACK */}
              <div className='flex items-center px-6'>
                <label htmlFor="skill-mern" className="w-2/12 px-2 mr-8 font-serif">MERN STACK</label>
                <div id="skill-mern" className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'></div>
                </div>
              </div>
              {/* Laravel */}
              <div className='flex items-center px-6'>
                <label htmlFor="skill-laravel" className="w-2/12 px-2 mr-8 font-serif">Laravel</label>
                <div id="skill-laravel" className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-600 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'></div>
                </div>
              </div>
            </div>

            <div className='flex justify-between px-1 mt-12 text-center'>
              <div className='p-1'>
                <h3 className='font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
                  5+
                </h3>
                <p className='font-serif'>Years Experience</p>
              </div>
              <div className='p-1'>
                <h3 className='font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
                  10+
                </h3>
                <p className='font-serif'>Projects Completed</p>
              </div>
              <div className='p-1'>
                <h3 className='font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
                  6+
                </h3>
                <p className='font-serif'>Happy Clients</p>
              </div>
              <div className='p-1'>
                <h3 className='font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
                  5+
                </h3>
                <p className='font-serif'>New Projects</p>
              </div>
              <div className='p-1'>
                <h3 className='font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
                  Edu
                </h3>
                <p className='mb-2 font-serif'>Profile</p>
                <a 
                  href="https://dankukennedy.github.io/" 
                  className="inline-block p-1 font-serif font-bold rounded hover:text-white hover:bg-gradient-to-r from-green-300 to-blue-500"
                >
                  <span className='text-xs'>Click </span>↗️
                </a>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default About;