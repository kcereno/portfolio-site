import { Container, Row, Col } from "react-bootstrap";
import Project from "../../Components/Project/Project";
import barbellBuddyScreencap from "../../assets/pictures/barbellbuddyscreencap.jpg"
import neonPomoScreencap from '../../assets/pictures/neonPomoScreencap.jpg'
import styles from './ProjectSection.module.css'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <Row>
          <Col lg={4}>
            <h2 className={styles.header}>My Projects</h2>
          </Col>
          <Col lg={8} className="d-flex justify-content-around flex-wrap">
            <Project
              photoSrc={barbellBuddyScreencap}
              url={"https://barbell-calculator.vercel.app/"}
              title={"Barbell Buddy"}
              description={
                "An app to calculate what plates to load on bar based on target weight and how much weight is currently on bar"
              }
              madeWith={"React"}
            />
               <Project
              photoSrc={neonPomoScreencap}
              url={"https://kcereno.github.io/pomodoro-timer/"}
              title={"Neon Pomo"}
              description={
                "A neon themed pomodoro timer app. The colors change depending on what mode its on."}
              madeWith={"React"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
