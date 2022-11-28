import './Skills.scss';
import bootstrap from '../../assets/images/tech-icons/bootstrap.svg';
import css from '../../assets/images/tech-icons/css.svg';
import html from '../../assets/images/tech-icons/html.svg';
import js from '../../assets/images/tech-icons/javascript.svg';
import mui from '../../assets/images/tech-icons/mui.png';
import node from '../../assets/images/tech-icons/nodejs.svg';
import react from '../../assets/images/tech-icons/react.svg';
import express from '../../assets/images/tech-icons/express.png';
import github from '../../assets/images/tech-icons/github.svg';
import sass from '../../assets/images/tech-icons/sass.svg';
import ts from '../../assets/images/tech-icons/typescript.svg';
import mongo from '../../assets/images/tech-icons/mongodb.svg';

function Skills() {
  return (
    <section id="skills">
      <div className="skills bordered p-sm">
        <h2 className="subheading mb-xs">My Tools</h2>
        <div className="skill-icon-container">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={ts} alt="" />
          <img src={mui} alt="" />
          <img src={bootstrap} alt="" />
          <img src={sass} alt="" />
          <img src={react} alt="" />
          <img src={node} alt="" />
          <img src={express} alt="" />
          <img src={github} alt="" />
          <img src={mongo} alt="" />
        </div>

        {/* <h3 className="skill-type">Basics</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
        <h3 className="skill-type">Backend</h3>
        <ul>
          <li>Express</li>
          <li>Node</li>
        </ul>

        <h3 className="skill-type">JS Libraries</h3>
        <ul>
          <li>React</li>
        </ul>
        <h3 className="skill-type">CSS Frameworks</h3>
        <ul>
          <li>Material-UI</li>
          <li>Bootstrap</li>
        </ul>

        <h3 className="skill-type">Version Control</h3>
        <ul>
          <li>GitHub</li>
          <li>GitLab</li>
        </ul> */}
      </div>
    </section>
  );
}

export default Skills;
