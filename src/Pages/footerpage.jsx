import React from 'react'

function Footer() {
  return (
    <div className='bg-blue-950 rounded-tr-4xl pb-10'>
        <div className='w-[85%] mx-auto mt-10'>
            {/*copyrigth & backtotop*/}
            <div className='flex justify-between mr-15 p-5'>
                <span>&copy;2025</span>
                <p><a href="#" className='flex'>Back to Top<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg></a></p>
            </div>
            {/*textcontent*/}
            <div>
                <p className='text-gray-500 text-3xl w-[50%] mx-auto'>HAVE A PROJECT IN MIND?</p>
                <h1 className='text-8xl font-extrabold tracking-widest w-[50%] mx-auto'>LET'S TALK</h1>
            </div>
            {/*contant link*/}
            <div className='flex gap-x-8 w-[25%] mx-auto mt-10'>
                <button><a href="https://github.com/a8abishek">GITHUB</a></button>
                <button><a href="https://www.linkedin.com/in/abishek-a-282a71249/">LINKEDIN</a></button>
            </div>
        </div>
    </div>
  )
}

export default Footer