import React from 'react'

const services = [
    {
        id:1,
        title:"Web Design",
        description:"Creating visually and user-friendly web designs.",
    },
    {
        id:2,
        title:"Frontend Development",
        description:"Building responsive and interactive user interfaces.",
    },
    {
        id:3,
        title:"Backend Development",
        description:"Developing robust sever-side logic and databases.",
    },
    {
        id:4,
        title:"Full-Stack Development",
        description:"Combining both frontend and backend development skills.",
    },
    {
        id:5,
        title:"Mini Projects Development",
        description:"Developing mini project for students and small businesses.",
    },
    {
        id:6,
        title:"IT Consultancy",
        description:"Providing consultancy services for business.",
    },
    
];

const Service = () => {
  return (
    <div >
        <div className='py-20 text-white bg-gradient-to-r from-red-300 to-red-500 ' id='service'>
           <div className='container px-8 mx-auto md:px-16 lg:px:24'>
             <h2 className='mb-12 text-4xl font-bold text-center'>My Services</h2>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
                 {services.map(service =>(
                    <div key={service.id}
                    className='px-6 pb-6 transition-transform duration-300 transform bg-gray-800 border-8 rounded-lg hover:shadow-lg hover:scale-105 hover:border-green-600 '>
                        <div className='text-2xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                        <b className='px-3 py-0 text-white bg-white  bg-gradient-to-r from-blue-300 to-blue-600'>{service.id} </b>
                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            {service.title}
                        </h3>
                        <p className='mt-2 text-gray-300'>{service.description}</p>
                        <a href="#" className='inline-block mt-4 text-green-400 hover:text-blue-500'>Read More</a>
                    </div>
                 ))}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Service
