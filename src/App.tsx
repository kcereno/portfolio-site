import './App.scss';
import { useState } from 'react';
import { TbCertificate, TbBulb } from 'react-icons/tb';
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

        {/* Content */}
        <section id="content" className="container content-wrapper">
          <div className="about">
            <h2 className="mb-xs">A little about me</h2>
            <p className="mb-xs">
              I am Frontend Developer from NYC. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <p className="mb-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="contact-container">
              <button className="button-8" type="button">
                <span className="text">Contact</span>
              </button>
            </div>
          </div>
          {/* Grid 2 */}
          <div className="skills-container mb-lg">
            <div className="p-sm">
              <div className="skills">
                <div className="skills-heading mb-xs">
                  <TbBulb />
                  <span>Skills</span>
                </div>

                <div className="skills">Pill Style </div>
              </div>
              <hr className="my-xs" />
              <div className="certs">
                <div className="certs-heading">
                  <TbCertificate />
                  <span>Certificates</span>
                </div>
                <div className="certs-list">List of certifications</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="projects">Project Section. Take from RAM</div>
      {/* <div className="contact">Contact Form.</div>
      <div className="footer">Simple footer. Just name and date</div> */}
    </div>
  );
}

export default App;
