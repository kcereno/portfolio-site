import { Container, Row, Col } from "react-bootstrap";
import Project from "../../Components/Project/Project";
import barbellCalcScreencap from "../../assets/pictures/mui-barbell-calc.jpg";
import neonPomoScreencap from "../../assets/pictures/neonPomoScreencap.jpg";
import styles from "./ProjectSection.module.css";

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
              photoSrc={barbellCalcScreencap}
              url={"https://mui-barbell-calc.vercel.app/"}
              title={"Barbell Calculator"}
              description={
                "Weightlifting app used to calculate the loadout for a desired weight. User has the option to specify bar weight and their available plate increments."
              }
              madeWith={"React, Typescript, MaterialUI"}
            />
            <Project
              photoSrc={neonPomoScreencap}
              url={"https://kcereno.github.io/pomodoro-timer/"}
              title={"Neon Pomo"}
              description={
                "A neon themed pomodoro timer app. The colors change depending on what mode its on."
              }
              madeWith={"React, CSS"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
