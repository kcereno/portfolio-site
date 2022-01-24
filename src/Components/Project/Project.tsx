import { Card } from "react-bootstrap";
import styles from "./Project.module.css";

export default function Project(props: any) {
  const { siteLink, photoSrc, title, description, madeWith } = props;

  return (
    <Card className={styles.projectCard}>
      <a href={siteLink}>
        <Card.Img variant="top" src={photoSrc} />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Made with {madeWith}</small>
      </Card.Footer>
    </Card>
  );
}
