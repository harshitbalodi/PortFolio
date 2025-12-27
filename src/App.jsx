import Navigation from "./Sections/Navigation/Navigation";
import AboutMe from "./Sections/AboutMe/AboutMe"
import Contact from "./Sections/Contact/Contact";
import Hero from "./Sections/Hero/Hero"
import Projects from "./Sections/Projects/Projects"
import Resume from "./Sections/Resume/Resume";
import Footer from "./Sections/Footer/Footer";
import './index.css';
import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Server } from 'lucide-react';

// function App() {

//   return (
//     <>
//      <Hero/>
//      <AboutMe/>
//      <Projects/>
//      <Resume/> 
//      <Contact/>
//     </>
//   )
// }

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
