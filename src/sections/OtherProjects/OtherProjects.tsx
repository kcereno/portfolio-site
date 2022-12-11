import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './OtherProjects.scss';

function OtherProjects() {
  return (
    <section id="other-projects">
      <div className="mb-xl">
        <h1 className="text-center mb-md section-title">
          Some Other Cool Stuff I Made
        </h1>
        <div className="flex-center-x">
          <div className="other-projects__grid">
            <ProjectCard
              title="Project 1"
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil aut ab deserunt laborum odit esse, provident magni! Officia, vitae."
              techStack={['React', 'Typescript', 'Sass']}
            />
            <ProjectCard
              title="Project 2"
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil aut ab deserunt laborum odit esse, provident magni! Officia, vitae."
              techStack={['React', 'Typescript', 'Sass']}
            />
            <ProjectCard
              title="Project 3"
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil aut ab deserunt laborum odit esse, provident magni! Officia, vitae."
              techStack={['React', 'Typescript', 'Sass']}
            />
            <ProjectCard
              title="Project 4"
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil aut ab deserunt laborum odit esse, provident magni! Officia, vitae."
              techStack={['React', 'Typescript', 'Sass']}
            />
            <ProjectCard
              title="Project 5"
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil aut ab deserunt laborum odit esse, provident magni! Officia, vitae."
              techStack={['React', 'Typescript', 'Sass']}
            />
            <ProjectCard
              title="Project 6"
              description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil aut ab deserunt laborum odit esse, provident magni! Officia, vitae."
              techStack={['React', 'Typescript', 'Sass']}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherProjects;
