import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

export default function Skill(props: any) {
  return (
    <Col md={4} xs={6}>
      <div className="py-2">
        <FontAwesomeIcon icon={props.icon} size="5x" className="py-2" />
        <h3>{props.skillName}</h3>
      </div>
    </Col>
  );
}

//Props must have icon and skillName
