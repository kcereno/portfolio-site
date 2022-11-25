import './ProjectCard.scss';

interface Props {
  title: string;
  description: string;
  techStack: string[];
}

function ProjectCard({ title, description, techStack }: Props) {
  return (
    <div className="project-card">
      <div className="project-card-content m-md">
        <h1 className="mb-sm">{title}</h1>
        <p className="mb-xs">{description}</p>
        <div className="tech-stack mb-sm">
          {techStack.map((tech) => (
            <p>{tech}</p>
          ))}
        </div>
        <div className="project-card-btns">
          <button className="button-8 project-card-btn" type="button">
            Live Site
          </button>
          <button className="button-8 project-card-btn" type="button">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
