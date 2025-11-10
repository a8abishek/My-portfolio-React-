import React from 'react'

function Project() {
    return (
        <div className='w-[90%] mx-auto mt-18'>
            <h1 className='text-3xl font-bold flex justify-center'>PORTFOLIO</h1>
            {/*nav*/}
            <div>
                <ul className='flex gap-x-15 justify-around w-[70%] mx-auto my-5 font-medium'>
                    <li className='text-[#4e9fd7]'><a href="#">Website</a></li>
                    <li><a href="#">Moblie App</a></li>
                    <li><a href="#">Other Project</a></li>
                </ul>
            </div>
            {/*Project 1*/}
            <div className='gridContent mt-25'>
                <div className='flex pl-15'>
                    {/* border*/}
                    <div className='border-4 border-[#4e9fd7] w-[300px] h-[250px] relative'>
                        {/* image content*/}
                        <img src="https://repository-images.githubusercontent.com/588428750/54a059b6-65be-432e-a764-b5e5ef7924cb" alt="logo" className='w-[300px] h-[250px] absolute -top-10 left-[-30px]' />
                    </div>
                </div>
                {/* About me*/}
                <div>
                    <h1 className='text-3xl font-light text-[#4e9fd7]'>PROJECT 1</h1>
                    <span className='text-2xl font-bold my-5'>E-Commerce Homepage (Flipkart Clone)</span>
                    <p className='w-[80%] text-justify text-gray-500 mt-2'>This project is a responsive e-commerce homepage inspired by Flipkart. It includes a well-structured navigation bar, category section, promotional banner,
                        and product listings for an engaging user experience.
                        The page design focuses on clean layout, modern UI elements, and accessibility,
                        making it easy for users to explore products seamlessly.Technologies used: HTML, CSS, JavaScript</p>
                    {/*Read more icon*/}
                    <span className='flex items-center-safe'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg><span className='ml-5 font-mono'>Read more</span></span>
                </div>
            </div>
            {/*Project2*/}
            <div className='gridContent mt-25'>
                {/* About me*/}
                <div className='pl-5'>
                    <h1 className='text-3xl font-light text-[#4e9fd7]'>PROJECT 2</h1>
                    <span className='text-2xl font-bold my-5'>Instagram Clone</span>
                    <p className='w-[80%] text-justify text-gray-500 mt-2'>This project is a responsive social media interface inspired by Instagram.
                          It features a clean layout with navigation bar, story section, post feed,
                          and profile components, closely resembling the original platform’s design.
                          The main goal of this project was to practice frontend styling, layout structuring,
                          and responsive design techniques.Technologies used: HTML, CSS, JavaScript</p>
                    {/*Read more icon*/}
                    <span className='flex items-center-safe'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg><span className='ml-5 font-mono'>Read more</span></span>
                </div>
                {/*Project image*/}
                <div className='flex pl-25'>
                    {/* border*/}
                    <div className='border-4 border-[#4e9fd7] w-[300px] h-[250px] relative'>
                        {/* image content*/}
                        <img src="https://appinventiv.com/wp-content/uploads/2021/02/Round-design-interface.png" alt="logo" className='w-[300px] h-[250px] absolute -top-10 -right-10' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <button className='text-xl'>View More</button>
            </div>
        </div>
    )
}
export default Project;