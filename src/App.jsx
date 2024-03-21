import AboutMe from "./Sections/AboutMe/AboutMe"
import Contact from "./Sections/Contact/Contact";
import Hero from "./Sections/Hero/Hero"
import Projects from "./Sections/Projects/Projects"
import Resume from "./Sections/Resume/Resume";
import './index.css';

function App() {

  return (
    <>
     <Hero/>
     <AboutMe/>
     <Projects/>
     <Resume/> 
     <Contact/>
    </>
  )
}

export default App
