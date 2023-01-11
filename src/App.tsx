import './App.scss';
import { useState } from 'react';
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';

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
      <div className="w-[120rem] border-x-[1px] border-gray-700 bg-gray-900 mx-lg tablet:mx-md large-mobile:mx-0">
        <Navigation darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
        <main className=" ">
          <Hero />
          <Skills />

          <div className=" text-center my-2xl">
            <h1 className="text-2xl">Currenty Remodeling</h1>
            <p className="text-xl text-gray-500">Please come back later!</p>
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
