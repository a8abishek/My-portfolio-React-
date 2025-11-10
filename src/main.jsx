import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import HeroSection from './Herosection'
import Aboutme from './Pages/Aboutme'
import Skills from './Pages/Skillspage'
import Project from './Pages/Projectpage'
import Certificates from './Pages/Certificatepage'
import Contacts from './Pages/Contactspage'
import Footer from './Pages/footerpage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <HeroSection/>
    <Aboutme/>
    <Skills/>
    <Project/>
    <Certificates/>
    <Contacts/>
    <Footer/>
  </StrictMode>,
)
