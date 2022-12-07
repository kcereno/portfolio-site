/* eslint-disable react/require-default-props */
import './FeaturedProject.scss';

interface Props {
  title: string;
  description: string;
  techStack: string[];
}

function FeaturedProject({ title, description, techStack }: Props) {
  return (
    <div className="featured-project-container my-lg">
      <div className="featured-project-img-cell">
        <img
          className="feautured-project-img"
          src="https://via.placeholder.com/540x320"
          alt=""
        />
      </div>

      <div className="featured-project-description-cell">
        <h1 className="mb-xxs featured-project-title">{title}</h1>
        <p className="mb-sm featured-project-description">{description}</p>
        <ul className="flex gap-2 mb-md featured-project-tech-stack ">
          {techStack.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div className="btn-group">
          <button type="button" className="button-8 mr-xxs">
            View Site
          </button>
          <button type="button" className="button-8">
            Visit Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
