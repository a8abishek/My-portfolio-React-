function Navbar({ scrollToSection, refs }) {
  return (
    <header className="flex justify-between p-4 items-center px-[5%] shadow-lg">
      <div className="flex items-center">
        <img src="src/logo.png" alt="logo" className="w-16" />
        <h1 className="font-bold">ABISHEK A</h1>
      </div>

      <div className="flex">
        <ul className="flex">
          <li className="mx-7 cursor-pointer" onClick={() => scrollToSection(refs.homeRef)}>Home</li>
          <li className="mx-7 cursor-pointer" onClick={() => scrollToSection(refs.aboutRef)}>About Me</li>
          <li className="mx-7 cursor-pointer" onClick={() => scrollToSection(refs.skillRef)}>Skills</li>
          <li className="mx-7 cursor-pointer" onClick={() => scrollToSection(refs.projectRef)}>Project</li>
          <li className="mx-7 cursor-pointer" onClick={() => scrollToSection(refs.certRef)}>CERTIFICATE</li>
        </ul>

        <button 
          className="font-light text-sm cursor-pointer"
          onClick={() => scrollToSection(refs.contactRef)}
        >
          CONTACT
        </button>
      </div>
    </header>
  );
}

export default Navbar;
