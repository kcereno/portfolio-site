import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
import glassCalcScreenshot from '../../assets/images/project-screenshots/screenshot-glassCalc.png';
import barbellCalcScreenshot from '../../assets/images/project-screenshots/screenshot-barbellCalc.png';

import './FeaturedProjects.scss';

function FeatureProjects() {
  return (
    <section id="projects">
      <div className="featured-projects__container mt-xl">
        <h1 className="section-title text-4xl leading-[6.1rem] hero1:text-3xl hero1:leading-[4.8rem] hero2:text-2xl hero2:leading-3.9 hero3:text-xl hero3:leading-[3.1rem] font-display mb-md tracking-tight">
          Projects
        </h1>
        <div className="featured-projects flex flex-wrap gap-md ">
          <FeaturedProject
            title="Barbell Calculator"
            description="Easily calculate the barbell loadout with this web app. Features lb/kg mode, barbell weight, and plate weight customization."
            techStack={['React', 'TailwindCSS', 'MaterialUI']}
            liveSite="https://barbell-calc.vercel.app/"
            code="https://github.com/kcereno/updated-barbell-calc"
            image={barbellCalcScreenshot}
          />
          <FeaturedProject
            title="Glass Calculator"
            description="Stylized calculator inspired by stained glass windows, Glass Calculator is a fun project I made to practice my CSS skills. "
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
