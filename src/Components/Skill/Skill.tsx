import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";
import styles from "./Skill.module.scss";

export default function Skill(props: any) {
  return (
    <Col md={4} xs={6}>
      <div className="py-2">
        <FontAwesomeIcon
          icon={props.icon}
          size="5x"
          className={styles.faIcon}
        />
        <h4>{props.skillName}</h4>
        <p>{props.subSkill}</p>
      </div>
    </Col>
  );
}

//Props must have icon and skillName
