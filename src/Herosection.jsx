function HeroSection() {
  return (
    <div className="w-[85%] grid grid-cols-2 mx-auto gap-x-15 text-justify mt-18 ">
      {/* text content*/}
      <div className=" flex flex-col p-15 pt-25">
        <h1 className='text-4xl font-extrabold text-gray-500 tracking-wide'>I'm a </h1>
        <h1 className="text-5xl font-extrabold tracking-wide"><b className="text-[3.3rem]">F</b>ULL <b className="text-[3.3rem]">S</b>TACK</h1>
        <h1 className="text-5xl font-extrabold tracking-wide"><b className="text-[3.3rem]">D</b>EVELOPER <strong className="text-[#4e9fd7]">.</strong></h1>
        <p className="text-gray-500 mt-2.5">I build beautiful, responsive, and user-friendly websites using modern web technologies.
          My goal is to turn ideas into interactive digital experiences.</p>
        {/* button container*/}
        <div className="flex gap-x-2 mt-5">
          <button className="w-[20%] font-medium">RESUME</button>
          <button className="w-[30%] font-medium">Previous Projects</button>
        </div>
      </div>
      {/* image container*/}
      <div className="pl-5">
        <img src="src\assets\man2.png" alt="logo" />
      </div>
    </div>
  )
}
export default HeroSection;