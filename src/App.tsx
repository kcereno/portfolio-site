import './App.scss';

import { useState } from 'react';
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';

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
      </div>

      {/* Content */}
      {/* <div className="content">
        <div className="about">
          Grid Cell 1. This is where I&apos;ll talk about myself. Take from
          RAMs. Link to contact form site
        </div>
        <div className="skills mb-lg">
          Grid 2. This is where I&apos;ll talk about my skills
        </div>
      </div> */}

      {/* <div className="projects">Project Section. Take from RAM</div>
      <div className="contact">Contact Form.</div>
      <div className="footer">Simple footer. Just name and date</div> */}
    </div>
  );
}

export default App;
