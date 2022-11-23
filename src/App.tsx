import './App.scss';
import { useState } from 'react';
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import SkillsAndCerts from './sections/SkillAndCerts/SkillsAndCerts';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <Navigation darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
        <Hero />
        <section id="content" className="container content-wrapper">
          <About />
          <SkillsAndCerts />
        </section>
        <div className="projects">Project Section. Take from RAM</div>
      </div>

      {/* <div className="contact">Contact Form.</div>
      <div className="footer">Simple footer. Just name and date</div> */}
    </div>
  );
}

export default App;
