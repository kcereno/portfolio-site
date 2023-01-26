import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
// import barbellCalc from '../../assets/images/project-screenshots/barbell-calc-screenshot.png';
import glassCalcScreenshot from '../../assets/images/project-screenshots/screenshot-glassCalc.png';
import barbellCalcScreenshot from '../../assets/images/project-screenshots/screenshot-barbellCalc.png';

import './FeaturedProjects.scss';

function FeatureProjects() {
  return (
    <section id="projects">
      <div className="featured-projects__container mt-xl ">
        <h1 className="section-title text-3xl font-display mb-md">Projects</h1>
        <div className="featured-projects flex gap-md">
          <FeaturedProject
            title="Barbell Calculator"
            description="Calculate your barbell loadout with ease. Features include kilogram and pound mode and ability to add/remove plates from your loadout."
            techStack={['React', 'TailwindCSS', 'MaterialUI']}
            liveSite="https://barbell-calc.vercel.app/"
            code="https://github.com/kcereno/updated-barbell-calc"
            image={barbellCalcScreenshot}
          />
          <FeaturedProject
            title="Glass Calculator"
            description="Simply stylized calculator inspired by stained glass windows and the glassmorphism design trend, Glass Calculator is a fun project I made to practice my CSS skills. "
            techStack={['React', 'Vanilla CSS']}
            liveSite="https://barbell-calc.vercel.app/"
            code="https://github.com/kcereno/updated-barbell-calc"
            image={glassCalcScreenshot}
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
