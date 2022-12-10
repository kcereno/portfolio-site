import './Skills.scss';
import bootstrap from '../../assets/images/tech-icons/bootstrap.svg';
import css from '../../assets/images/tech-icons/css.svg';
import html from '../../assets/images/tech-icons/html.svg';
import js from '../../assets/images/tech-icons/javascript.svg';
import tailwind from '../../assets/images/tech-icons/tailwind.svg';
import node from '../../assets/images/tech-icons/nodejs.svg';
import react from '../../assets/images/tech-icons/react.svg';
import express from '../../assets/images/tech-icons/express.png';
import github from '../../assets/images/tech-icons/github.svg';
import sass from '../../assets/images/tech-icons/sass.svg';
import ts from '../../assets/images/tech-icons/typescript.svg';
import mongo from '../../assets/images/tech-icons/mongodb.svg';
import SkillIcon from '../../components/SkillIcon/SkillIcon';

function Skills() {
  const skills = [
    { icon: html, tooltip: 'HTML' },
    { icon: css, tooltip: 'CSS' },
    { icon: js, tooltip: 'JavaScript' },
    { icon: ts, tooltip: 'TypeScript' },
    { icon: react, tooltip: 'React' },
    { icon: node, tooltip: 'Node.js' },
    { icon: express, tooltip: 'Express.js' },
    { icon: mongo, tooltip: 'MongoDB' },
    { icon: bootstrap, tooltip: 'Bootstrap' },
    { icon: tailwind, tooltip: 'TailWindCSS' },
    { icon: sass, tooltip: 'Sass' },
    { icon: github, tooltip: 'GitHub' },
  ];

  return (
    <section id="skills">
      <div className="skills__container bordered p-sm">
        <h2 className="section-title mb-sm">Some of my tools</h2>
        <div className="skill-icon__container">
          {skills.map((skill) => (
            <SkillIcon
              key={skill.tooltip}
              icon={skill.icon}
              tooltip={skill.tooltip}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
