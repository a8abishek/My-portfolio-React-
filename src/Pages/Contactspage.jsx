import React from 'react'

function Contacts() {
  return (
    <div className='mt-18'>
        <h1 className='text-3xl font-bold flex justify-center'>CONTACT</h1>
        <div className='gridContent gap-x-10 mt-10'>
            {/* contact details*/}
            <div>
                <h1 className='text-2xl'>Drop Me a Message</h1>
                <p className='w-[80%] text-gray-500 mt-3'>I’m always open to new opportunities, collaborations, or creative projects.
                    Feel free to contact me anytime — I’d love to hear from you!</p>
                    {/*contact detail*/}
                <div className='mt-5'>
                    {/*Moblie*/}
                    <div className='flex gap-x-8 items-center my-5'>
                        <div className='bg-linear-to-r/srgb from-[#4e9fd7] to-[#4930c2] w-10 h-10 flex justify-center items-center rounded-xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg></div>
                        <p>+91 9025411792</p>
                    </div>
                    {/* Email*/}
                    <div className='flex gap-x-8 items-center my-5'>
                        <div className='bg-linear-to-r/srgb from-[#4e9fd7] to-[#4930c2] w-10 h-10 flex justify-center items-center rounded-xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg></div>
                        <p>abisheakabishek1@gmail.com</p>
                    </div>
                    {/*location*/}
                    <div className='flex gap-x-8 items-center'>
                        <div className='bg-linear-to-r/srgb from-[#4e9fd7] to-[#4930c2] w-10 h-10 flex justify-center items-center rounded-xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg></div>
                        <p>Dindigul,TamilNadu</p>
                    </div>
                </div>
            </div>
            {/* contact form*/}
            <div>
                <div className=' w-[80%] p-8 bg-linear-to-r/srgb from-[#4e9fd7] to-[#4930c2] mx-auto rounded-2xl shadow'>
                    <form action="">
                        <input type="text" placeholder='Name' className='w-full bg-black mt-5 p-3'/>
                        <input type="email" placeholder='Email' className='w-full bg-black mt-5 p-3'/>
                        <textarea placeholder='Message' className='w-full bg-black mt-5 p-3'></textarea>
                        <button className='bg-black'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts;