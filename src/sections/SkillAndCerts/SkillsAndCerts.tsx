import { TbCertificate, TbBulb } from 'react-icons/tb';
import './SkillsAndCerts.scss';

function SkillsAndCerts() {
  return (
    <div className="skills-container">
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
        <hr className="my-xs" />
        <div className="certs">
          <div className="">
            <TbCertificate className="skill-cert-icon" />
            <span className="skill-cert-heading">Certificates</span>
          </div>
          <div className="certs-list">List of certifications</div>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndCerts;
