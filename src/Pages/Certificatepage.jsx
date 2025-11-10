import React from 'react'
import Certificate from './Certificatepage';

function Certificates() {
  return (
    <div className='w-[83%] mx-auto mt-18'>
        <div>
            <h1 className='text-3xl font-bold flex justify-center mb-3'>Certificates</h1>
            <p className='text-sm text-gray-500 flex justify-center mb-5'>Certificates that showcase my learning journey, growth, and technical excellence.</p>
        </div>
        {/* Certificates list*/}
        <div className='grid grid-cols-3 gap-x-10'>
            {/* Certificate1*/}
            <div className='border-2 border-white rounded-2xl p-5'>
                <h1 className='text-2xl text-[#4e9fd7] font-light flex justify-center mb-2'>CodSoft</h1>
                <h1 className='text-2xl font-bold flex justify-center'>Web Development Internship</h1>
                <span className='text-gray-500 flex justify-center'>CodSoft | May 2024</span>
                <p className='text-gray-500 w-[90%] mx-auto text-justify mb-3'>Completed a one-month internship focusing on front-end web development using HTML, CSS, and JavaScript. 
                    Built projects like portfolio, calculator, and landing pages.</p>
                <a href="#" className='text-blue-600 font-medium pl-5'>View Certificate →</a>
            </div>
            {/* Certificate2*/}
            <div className='border-2 border-white rounded-2xl p-5'>
                <h1 className='text-2xl text-[#4e9fd7] font-light flex justify-center mb-2'>Entri</h1>
                <h1 className='text-2xl font-bold flex justify-center'>Full Stack Developer Program</h1>
                <span className='text-gray-500 flex justify-center'>Entri Learning | Feb 2026</span>
                <p className='text-gray-500 w-[90%] mx-auto text-justify mb-3'>Trained in full stack web development using the MERN Stack — React, Tailwind CSS, Node.js, Express, and MongoDB. Focused on responsive design and API integration.</p>
                <a href="#" className='text-blue-600 font-medium pl-5'>View Certificate →</a>
            </div>
            {/* Certificate3*/}
            <div className='border-2 border-white rounded-2xl p-5'>
                <h1 className='text-2xl text-[#4e9fd7] font-light flex justify-center mb-2'>Great Learning</h1>
                <h1 className='text-2xl font-bold flex justify-center'>Introduction to Cryptography</h1>
                <span className='text-gray-500 flex justify-center'>Great Learning | 2024</span>
                <p className='text-gray-500 w-[90%] mx-auto text-justify mb-3'>Learned encryption and decryption fundamentals, data security methods, and cryptographic algorithms to ensure secure communication in modern web systems.</p>
                <a href="#" className='text-blue-600 font-medium pl-5'>View Certificate →</a>
            </div>
        </div>
    </div>
  )
}

export default Certificates;