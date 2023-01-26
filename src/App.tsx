import './App.scss';

// import Skills from './sections/Skills/Skills';
import FeatureProjects from './sections/FeaturedProjects/FeaturedProjects';
import Hero from './sections/Hero/Hero';
// import OtherProjects from './sections/OtherProjects/OtherProjects';
// import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className="bg-dark">
      <div className="flex justify-center">
        <div className="w-[120rem] mx-lg tablet:mx-md small-mobile:mx-xs">
          {/* <Navigation /> */}
          <main className="">
            <Hero />
            {/* <Skills /> */}
            <hr />
            <FeatureProjects />
            {/* <OtherProjects /> */}
            {/* <Contact /> */}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
