import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
import './FeaturedProjects.scss';
import barbellCalc from '../../assets/images/project-screenshots/barbell-calc-screenshot.png';

function FeatureProjects() {
  return (
    <section id="featured-projects">
      <div className="featured-projects__container mt-xl">
        <h1 className="text-center section-title ">Some Noteworthy Projects</h1>
        <div className="featured-projects">
          <FeaturedProject
            title="Barbell Calculator"
            description="Calculate your barbell loadout with ease. Features include kilogram and pound mode and ability to add/remove plates from your loadout."
            techStack={['React', 'TailwindCss', 'MaterialUI']}
            liveSite="https://barbell-calc.vercel.app/"
            code="https://github.com/kcereno/updated-barbell-calc"
            image={barbellCalc}
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
