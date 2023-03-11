import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
import glassCalcScreenshot from '../../assets/images/project-screenshots/screenshot-glassCalc.png';
import barbellCalcScreenshot from '../../assets/images/project-screenshots/screenshot-barbellCalc.png';
import otsScreenshot from '../../assets/images/project-screenshots/screenshot-ots.png';
import streakTrackerScreenshot from '../../assets/images/project-screenshots/streaktracker-screenshot.png';

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
            title="StreakTracker"
            description="Mobile responsive and desktop friendly habit tracker that builds good habits by tracking users streaks."
            techStack={[
              'HTML',
              'CSS',
              'JavaScript',
              'TypeScript',
              'React',
              'TailwindCSS',
              'daisyUI',
            ]}
            liveSite="https://streak-tracker-seven.vercel.app/"
            code="https://github.com/kcereno/streaks-habit-tracker"
            image={streakTrackerScreenshot}
          />
          <FeaturedProject
            title="Barbell Calculator"
            description="Easily calculate the barbell loadout with this web app. Features lb/kg mode, barbell weight, and plate weight customization."
            techStack={[
              'HTML',
              'CSS',
              'JavaScript',
              'TypeScript',
              'React',
              'TailwindCSS',
              'MaterialUI',
            ]}
            liveSite="https://barbell-calc.vercel.app/"
            code="https://github.com/kcereno/updated-barbell-calc"
            image={barbellCalcScreenshot}
          />
          <FeaturedProject
            title="Glass Calculator"
            description="Stylized calculator inspired by stained glass windows, Glass Calculator is a fun project I made to practice my CSS skills. "
            techStack={['HTML', 'CSS', 'JavaScript', 'React', 'CSS']}
            liveSite="https://glass-calc-kcereno.vercel.app/"
            code="https://github.com/kcereno/glass-calc"
            image={glassCalcScreenshot}
          />
          <FeaturedProject
            title="Online Training Solutions"
            description="Online platform for trainers to create and send custom workout programs to their clients."
            techStack={[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Sass',
              'Bootstrap',
            ]}
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
