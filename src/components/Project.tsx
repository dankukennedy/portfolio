import React from 'react';
import Flyer from '../assets/projects/flyer.jpeg';
import Sim from '../assets/projects/Sim1.jpg';
import Port from '../assets/projects/Port.jpg';
import CIC from '../assets/projects/cic.jpeg';
import Commerce from '../assets/projects/ecommerce.jpeg';
import Transcript from '../assets/projects/transcript.jpeg';

// Define the structural interface for a single project item
interface ProjectItem {
  id: number;
  name: string;
  technologies: string;
  image: string;
  website?: string;
  github?: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    name: "Edem-Tech Enterprise",
    technologies: "Web Design, Custom Apps, IT Consultancy",
    image: Flyer,
    website: "https://edem-tech-ent.vercel.app/",
  },
  {
    id: 2,
    name: "Koge Portfolio",
    technologies: "React, Tailwind CSS, TypeScript",
    image: Port,
    website: "https://koge-portfolio.vercel.app/",
  },
  {
    id: 3,
    name: "Data System Frontend",
    technologies: "React, Tailwind CSS, TypeScript",
    image: Sim,
    website: "https://data-system-lyart.vercel.app",
  },
  {
    id: 4,
    name: "Transcript Management System",
    technologies: "HTML, PHP, Mysql, CSS & Bootstrap",
    image: Transcript,
    github: "https://github.com/dankukennedy/transway",
  },
  {
    id: 5,
    name: "CIC Management System",
    technologies: "HTML, PHP, Mysql, CSS & JavaScript",
    image: CIC,
    github: "https://github.com/dankukennedy/CIC-Managemnt-System",
  },
  {
    id: 6,
    name: "E-commerce",
    technologies: "HTML, PHP, Mysql, CSS, Ajax & JavaScript",
    image: Commerce,
    github: "https://github.com/dankukennedy/Ecommerce-site",
  },
];

const Project: React.FC = () => {
  return (
    <div className='py-20 text-white bg-black' id='project'>
      <div className='container px-8 mx-auto md:px-16 lg:px-24'>
        <h2 className='mb-12 text-4xl font-bold text-center'>My Featured Projects</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className='p-6 transition-transform duration-300 transform bg-gray-800 border-8 border-transparent rounded-lg hover:scale-105 hover:border-green-600 hover:shadow-lg'
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className='object-cover w-full h-48 mb-4 rounded-lg' 
              />
              <h3 className='mb-2 text-2xl font-bold'>{project.name}</h3>
              <p className='mb-4 text-gray-400'>{project.technologies}</p>
              
              {project.github ? (
                <a 
                  href={project.github} 
                  className='inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500' 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  GitHub Link To Project
                </a>
              ) : project.website ? (
                <a 
                  href={project.website} 
                  className='inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500' 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  Visit Project Website
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;