import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

export default function SkillEntry(props:any) {

  return(
    <Col md={4} className="py-4">
      <FontAwesomeIcon icon={props.icon} size="6x" />
      <h3>{props.skillName}</h3>
    </Col>
  )
}




//Props must have icon and skillName