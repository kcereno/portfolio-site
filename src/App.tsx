import './App.scss';
import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <div className="nav pt-sm mb-xl mx-sm">
        <div />
        <div className="nav-links ">
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            About
          </a>
          <a className="nav-link" href="/">
            Projects
          </a>
          <a className="nav-link" href="/">
            Contact
          </a>
        </div>
        <div className="theme-icon-container">
          {darkMode ? (
            <MdOutlineModeNight
              className="theme-icon"
              onClick={handleDarkModeToggle}
            />
          ) : (
            <MdOutlineLightMode
              className="theme-icon"
              onClick={handleDarkModeToggle}
            />
          )}
        </div>
      </div>

      <div className="about mb-lg">
        <div className="profile-pic">
          <p>proflepic</p>
        </div>
        <div className="name">Karl Cereno</div>
        <div className="subheading">A quick description of what i do</div>
        <div className="social">Social Links</div>
      </div>
      <div className="content">
        <div className="about">
          Grid Cell 1. This is where I&apos;ll talk about myself. Take from
          RAMs. Link to contact form site
        </div>
        <div className="skills mb-lg">
          Grid 2. This is where I&apos;ll talk about my skills
        </div>
      </div>

      <div className="projects">Project Section. Take from RAM</div>
      <div className="contact">Contact Form.</div>
      <div className="footer">Simple footer. Just name and date</div>
    </div>
  );
}

export default App;
