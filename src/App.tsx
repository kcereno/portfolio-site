import './App.scss';
import { useState } from 'react';
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';

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
        <div id="content" className="container content-wrapper mb-lg">
          <About />
          <Skills />
        </div>
        <section id="projects">
          <h1>Projects</h1>
        </section>
      </div>

      {/* <div className="contact">Contact Form.</div>
      <div className="footer">Simple footer. Just name and date</div> */}
    </div>
  );
}

export default App;
