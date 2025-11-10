import React from 'react'

function Skills() {
  return (
    <div className='gridContent mt-25 pl-25 gap-x-10'>
            <div>
                <h1 className='text-3xl font-bold'>Skills</h1>
                <p className='my-3 text-gray-500 text-justify'>I’m passionate about full-stack web development and enjoy building responsive, dynamic,
                   and user-friendly applications. I focus on writing clean,
                   efficient code and continuously learning new technologies to enhance my development skills.</p>
                {/* skills details*/}
                <div className='grid grid-cols-3'>
                    <div>
                        <h1 className='text-3xl font-medium'>Front-end</h1>
                        <ul className='pl-1 mt-2'>
                            <li className='text-gray-500'>HTML</li>
                            <li className='text-gray-500'>CSS</li>
                            <li className='text-gray-500'>JavaScript</li>
                            <li className='text-gray-500'>React</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-3xl font-medium'>Back-end</h1>
                        <ul className='pl-1 mt-2'>
                            <li className='text-gray-500'>Node.js</li>
                            <li className='text-gray-500'>Express.js</li>
                            <li className='text-gray-500'>MongoDB</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-3xl font-medium'>FrameWork & tools</h1>
                        <ul className='pl-1 mt-2'>
                            <li className='text-gray-500'>GitHub</li>
                            <li className='text-gray-500'>Bootstrap & Tailwind css</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pr-16'>
                {/* border*/}
                <div className='border-4 border-[#4e9fd7] w-[250px] h-[300px] relative'>
                    {/* image content*/}
                    <img src="src\assets\skillimage.png" alt="logo" className='w-[250px] h-[300px] absolute -top-10 -right-10' />
                </div>
            </div>
            {/* About me*/}
            
        </div>
  )
}

export default Skills;