import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
import './FeaturedProjects.scss';

function FeatureProjects() {
  return (
    <section id="featured-projects">
      <div className="mb-xl">
        <h1 className="text-center section-title">Some Noteworthy Projects</h1>
        <FeaturedProject
          title="Omnifood"
          description="    Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa sed
          saepe possimus ipsam natus nisi a, veniam quas doloremque."
        />
        <FeaturedProject
          reverse
          title="Omnifood"
          description="    Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa sed
        saepe possimus ipsam natus nisi a, veniam quas doloremque."
        />
      </div>
    </section>
  );
}

export default FeatureProjects;
