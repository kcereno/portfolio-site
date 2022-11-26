import './App.scss';
import { useState } from 'react';
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import FeatureProjects from './sections/FeatureProjects/FeatureProjects';
import OtherProjects from './sections/OtherProjects/OtherProjects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <Navigation darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
        <main>
          <Hero />
          <div id="content" className="container content-wrapper mb-lg">
            <About />
            <Skills />
          </div>
          <hr className="my-lg" />
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
