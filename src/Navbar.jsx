import React from 'react'

function Navbar() {
  return (
    <header className='flex justify-between p-4 items-center px-[5%] shadow-lg'>
        <div className='flex items-center'>
            <img src="src\logo.png" alt="logo" className='w-16'/>
            <h1 className='font-bold'>ABISHEK A</h1>
        </div>
        <div className='flex'>
            <ul className='flex '>
                <li className='mx-7'><a href="#">Home</a></li>
                <li className='mx-7'><a href="#">About Me</a></li>
                <li className='mx-7'><a href="#">Skills</a></li>
                <li className='mx-7'><a href="#">Project</a></li>
                <li className='mx-7'><a href="#">CERTIFICATE</a></li>
            </ul>
            <button className='font-light text-sm'>CONTACT</button>
        </div>
    </header>
  )
}

export default Navbar