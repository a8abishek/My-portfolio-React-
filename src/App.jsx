import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from './Herosection';
import Aboutme from './Pages/Aboutme';
import Skills from './Pages/Skillspage';
import Project from './Pages/Projectpage';
import Certificates from './Pages/Certificatepage';
import Contacts from './Pages/Contactspage';
import Footer from './Pages/footerpage';

function App() {

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const certRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, skillRef, projectRef, certRef, contactRef }}
      />

      <div ref={homeRef}><HeroSection /></div>
      <div ref={aboutRef}><Aboutme /></div>
      <div ref={skillRef}><Skills /></div>
      <div ref={projectRef}><Project /></div>
      <div ref={certRef}><Certificates /></div>
      <div ref={contactRef}><Contacts /></div>

      <Footer />
    </>
  );
}

export default App;
