/* eslint-disable no-restricted-globals */
import './App.scss';

import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';

// import Skills from './sections/Skills/Skills';
import FeatureProjects from './sections/FeaturedProjects/FeaturedProjects';
// import OtherProjects from './sections/OtherProjects/OtherProjects';
// import Contact from './sections/Contact/Contact';
// import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className="bg-bg flex-center-x">
      <div className="w-[120rem] mx-lg tablet:mx-md">
        <Navigation />
        <main className=" ">
          <Hero />
          {/* <Skills /> */}

          <FeatureProjects />
          {/* <OtherProjects /> */}
          {/* <Contact /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
