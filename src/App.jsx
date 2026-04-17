import Navigation from './Sections/Navigation/Navigation';
import Hero from './Sections/Hero/Hero';
import AboutMe from './Sections/AboutMe/AboutMe';
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
import Resume from './Sections/Resume/Resume';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
