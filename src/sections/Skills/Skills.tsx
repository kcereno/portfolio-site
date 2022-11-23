import { TbBulb } from 'react-icons/tb';
import './Skills.scss';

function Skills() {
  return (
    <section className="skills-container" id="skills">
      <div className="p-sm">
        <div className="skills">
          <div className="mb-xs">
            <TbBulb className="skill-cert-icon" />
            <span className="skill-cert-heading">Skills</span>
          </div>

          <ul className="skill-pills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>Express</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Vercel</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Material-UI</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
