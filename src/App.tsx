import './App.scss';
import { useState } from 'react';
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
// import FeatureProjects from './sections/FeaturedProjects/FeaturedProjects';
// import OtherProjects from './sections/OtherProjects/OtherProjects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <div className="bg-zinc-900 flex-center-x">
      <div className="w-[120rem] border-x-[1px] border-gray-700 bg-gray-900 large-mobile:mx-xs small-desktop:mx-md">
        <Navigation darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
        <main className="app__content mx-xs large-mobile:mx-sm small-desktop:mx-lg">
          <Hero />
          <div className="about-skills__container flex mb-xl flex-col small-desktop:flex-row small-desktop:mb-xxl gap-xs">
            <div className="basis-3/5 self-center">
              <About />
            </div>
            <div className="">
              <Skills />
            </div>
          </div>
          {/* <FeatureProjects /> */}
          {/* <OtherProjects /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
