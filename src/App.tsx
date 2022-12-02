import './App.scss';
import { useState } from 'react';
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import FeaturedProjects from './sections/FeaturedProjects/FeaturedProjects';
// import OtherProjects from './sections/OtherProjects/OtherProjects';
// import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <div className="app">
      <div className="app-container mx-md ">
        <Navigation darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
        <main>
          <Hero />
          <div className="container about-skill-container">
            <div className="about-cell">
              <About />
            </div>
            <div className="skills-cell">
              <Skills />
            </div>
          </div>
          <hr className="my-xl" />
          <FeaturedProjects />
          {/* <OtherProjects />
          <Contact /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
