import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
import glassCalcScreenshot from '../../assets/images/project-screenshots/screenshot-glassCalc.png';
import barbellCalcScreenshot from '../../assets/images/project-screenshots/screenshot-barbellCalc.png';
import otsScreenshot from '../../assets/images/project-screenshots/screenshot-ots.png';

import './FeaturedProjects.scss';

function FeatureProjects() {
  return (
    <section id="projects">
      <div className="featured-projects__container mt-xl">
        <h1 className="section-title text-4xl leading-[6.1rem] hero1:text-3xl hero1:leading-[4.8rem] hero2:text-2xl hero2:leading-3.9 hero3:text-xl hero3:leading-[3.1rem] font-display mb-md tracking-tight">
          Projects
        </h1>
        <div className="featured-projects flex flex-wrap gap-sm  ">
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
            liveSite="https://glass-calc-kcereno.vercel.app/"
            code="https://github.com/kcereno/glass-calc"
            image={glassCalcScreenshot}
          />
          <FeaturedProject
            title="Online Training Solutions"
            description="An online platform for trainers to create and send custom workout programs to their clients. Clients are able to view their workouts and track their progress."
            techStack={['React', 'Sass']}
            liveSite="https://online-training-solutions.vercel.app//"
            code="https://github.com/kcereno/online-training-solutions"
            image={otsScreenshot}
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
