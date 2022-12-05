import './App.scss';
import { useState } from 'react';
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import FeatureProjects from './sections/FeaturedProjects/FeaturedProjects';
import OtherProjects from './sections/OtherProjects/OtherProjects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <div className="bg-zinc-900 flex-center-x">
      <div className="app-container bg-gray-900 ">
        <Navigation darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
        <main className="app-content">
          <Hero />
          <div className="about-skills-container gap-10 mb-xl flex ">
            <div className="basis-3/5 self-center">
              <About />
            </div>
            <div className="skills-wrapper">
              <Skills />
            </div>
          </div>
          <FeatureProjects />
          <OtherProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
