import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
import './FeaturedProjects.scss';

function FeatureProjects() {
  return (
    <section id="featured-projects">
      <div className="featured-projects">
        <h1 className="text-center section-title ">Some Noteworthy Projects</h1>
        <div className="featured-projects-container">
          <FeaturedProject
            title="Online Training Solutions"
            description="    Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa sed
          saepe possimus ipsam natus nisi a, veniam quas doloremque."
            techStack={['React', 'Sass', 'TypeScript']}
          />
          <FeaturedProject
            title="Omnifood"
            description="    Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa sed
        saepe possimus ipsam natus nisi a, veniam quas doloremque."
            techStack={['React', 'Sass', 'TypeScript']}
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
