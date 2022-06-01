import { Container, Row } from "react-bootstrap";
import Skill from "../../Components/Skill/Skill";
import {
  faCss3,
  faJs,
  faReact,
  faNode,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import styles from "./SkillsSection.module.css";

export default function SkillSection() {
  return (
    <section id="skills" className=" text-center py-5">
      <Container>
        <div>
          <h2 className={styles.header}>I've worked with</h2>
        </div>
        <div className="skill-icon-group">
          <Row className="py-3">
            <Skill icon={faHtml5} skillName={"HTML"} />
            <Skill
              icon={faCss3}
              skillName={"CSS"}
              subSkill={"Bootstrap and MaterialUI"}
            />
            <Skill
              icon={faJs}
              skillName={"Javascript"}
              subSkill={"Typescript"}
            />
            <Skill icon={faReact} skillName={"React"} />
            <Skill icon={faNode} skillName={"Node.JS"}  subSkill={"Express"}/>
            <Skill icon={faDatabase} skillName={"MongoDB"} subSkill={"Mongoose"} />
          </Row>
        </div>
      </Container>
    </section>
  );
}
