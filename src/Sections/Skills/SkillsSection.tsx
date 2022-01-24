import { Container, Row } from "react-bootstrap"
import Skill from "../../Components/Skill/Skill";
import { faCss3, faJs, faReact,faNode, faHtml5} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



export default function SkillSection() {
  return (
    <section id="skills" className="text-white text-center py-5">
      <Container>
        <div>
          <h2 className="display-4">Skills</h2>
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
            <Skill icon={faReact} skillName={"React"} subSkill={"Next.js"} />
            <Skill icon={faNode} skillName={"Node.JS"} />
            <Skill icon={faDatabase} skillName={"MongoDB"} />
          </Row>
        </div>
      </Container>
    </section>
  );
}
