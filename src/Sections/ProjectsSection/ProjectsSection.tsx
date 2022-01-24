import { Container, Row, Col } from "react-bootstrap";
import Project from "../../Components/Project/Project";
import barbellBuddyScreencap from "../../assets/pictures/barbellbuddyscreencap.jpg"

export default function ProjectsSection() {
  return (
    <section id="projects" className="text-white py-5">
      <Container>
        <Row>
          <Col lg={4}>
            <h2 className="display-5 text-center">Projects</h2>
          </Col>
          <Col lg={8} className="d-flex justify-content-around flex-wrap">
            <Project
              photoSrc={barbellBuddyScreencap}
              title={"Barbell Buddy"}
              description={
                "An app to calculate what plates to load on bar based on target weight and how much weight is currently on bar"
              }
              madeWith={"React"}
            />
            <Project
              photoSrc={barbellBuddyScreencap}
              title={"Barbell Buddy"}
              description={
                "An app to calculate what plates to load on bar based on target weight and how much weight is currently on bar"
              }
              madeWith={"React"}
            />
            <Project
              photoSrc={barbellBuddyScreencap}
              title={"Barbell Buddy"}
              description={
                "An app to calculate what plates to load on bar based on target weight and how much weight is currently on bar"
              }
              madeWith={"React"}
            />
            <Project
              photoSrc={barbellBuddyScreencap}
              title={"Barbell Buddy"}
              description={
                "An app to calculate what plates to load on bar based on target weight and how much weight is currently on bar"
              }
              madeWith={"React"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
