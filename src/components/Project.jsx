import React from 'react'
import Flyer from '../assets/projects/flyer.jpeg'
import Blog from '../assets/projects/blog.png'
import Node from '../assets/projects/node.jpeg'
import CIC from '../assets/projects/cic.jpeg'
import Commerce from '../assets/projects/ecommerce.jpeg'
import Transcript from '../assets/projects/transcript.jpeg'

const projects =[
    {
        id:1,
        name:"Edem-Tech Enterprise ",
        technologies:"Django, Laravel, React, Node.js, Angular, Express.js",
        image:Flyer,
        github:"https://github.com/dankukennedy",
    },
    {
        id:2,
        name:"Blog",
        technologies:"Next.js ",
        image:Blog,
        github:"httpshttps://github.com/dankukennedy/nextjsblog",
    },
    {
        id:3,
        name:"Node Series",
        technologies:"Node JS",
        image:Node,
        github:"https://github.com/dankukennedy/node-series",
    },
    {
        id:4,
        name:"CIC Management System",
        technologies:"HTML,PHP,Mysql,CSS & JavaScript",
        image:CIC,
        github:"https://github.com/dankukennedy/CIC-Managemnt-System",
    },
    {
        id:5,
        name:"E-commerce",
        technologies:"HTML,PHP,Mysql,CSS,Ajax & JavaScript",
        image:Commerce,
        github:"https://github.com/dankukennedy/Ecommerce-site",
    },
    {
        id:6,
        name:"Transcript Management System",
        technologies:"HTML,PHP,Mysql,CSS",
        image:Transcript,
        github:"https://github.com/dankukennedy/transway",
    },
]

const Project = () => {
  return (
    <div className='bg-black text-white py-20 ' id='project'>
    <div className='container mx-auto px-8 md:px-16 lg:px:24'>
      <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
             {projects.map((project)=>(
               <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                  <img src={project.image} alt="" className='rounded-lg mb-4 w-full h-48 object-cover' />
                  <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                  <p className='text-gray-400 mb-4'>{project.technologies}</p>
                   <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full ' target='_blank' rel='noopener noreferrer'>GitHub Link To Project</a>
               </div>
             ))}
           </div>
        </div>
    </div>
  )
}

export default Project