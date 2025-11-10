import React from 'react'

function Aboutme() {
    return (
        <div className='gridContent mt-25'>
            <div className='flex pl-25'>
                {/* border*/}
                <div className='border-4 border-[#4e9fd7] w-[250px] h-[300px] relative'>
                    {/* image content*/}
                    <img src="https://i.pinimg.com/474x/88/e8/55/88e8554622cc9e6c5877ca7d1e3bbfab.jpg" alt="logo" className='w-[250px] h-[300px] absolute -top-10 left-[-30px]' />
                </div>
            </div>
            {/* About me*/}
            <div>
                <h1 className='text-3xl font-bold'>ABOUT ME</h1>
                <p className='w-[80%] text-justify text-gray-500 mt-2'>I’m Abishek, a dedicated Full Stack Developer with a strong foundation in both front-end and back-end technologies.
                 I enjoy building complete, responsive, and user-friendly web applications that blend functionality with clean design.
                My expertise includes HTML, CSS, JavaScript, and I’m expanding my skills in React.js, Node.js, and MongoDB.
                 I’m passionate about learning new tools, solving problems, and creating efficient digital solutions.
                  My goal is to grow as a developer who builds impactful and scalable web applications.</p>
                  <button className='mt-3'>LinkedIn</button>
            </div>
        </div>
    )
}

export default Aboutme;