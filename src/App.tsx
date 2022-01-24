import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./App.scss";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCss3,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Skill from "./Components/Skill/Skill";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "./assets/pictures/profile1.png";
import Project from "./Components/Project/Project";
import barbellBuddyScreencap from "./assets/pictures/barbellbuddyscreencap.jpg";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <NavigationBar />

      {/* Home Section */}
      <section id="home" className="py-5 text-white">
        <Container>
          <Row>
            <Col md={4} className="profile  ">
              <Container className="d-flex flex-column align-items-center">
                <img
                  className="profile-img  py-3"
                  src={profilePicture}
                  alt="Karl Anthony Cereno"
                />
                <div className="details text-center">
                  <h2>Karl Anthony Cereno</h2>
                  <p>Front End Web Developer</p>
                </div>
                <div className="icon-group">
                  <a
                    href="mailto:karlcereno@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="mx-1 social-icon"
                      icon={faEnvelope}
                      size="2x"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/_karlosPeligroso/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="mx-1"
                      icon={faInstagram}
                      size="2x"
                    />
                  </a>
                  <a
                    href="https://github.com/kcereno"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="mx-1"
                      icon={faGithub}
                      size="2x"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karlanthonycereno/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="mx-1"
                      icon={faLinkedin}
                      size="2x"
                    />
                  </a>
                </div>
              </Container>
            </Col>
            <Col className="d-flex align-items-center">
              <Container>
                <div>
                  <h2 className="display-4 py-3">Hello There...</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Debitis tenetur error dolorem quam eum dolorum, non in porro
                    rerum recusandae vero voluptate rem. Quo explicabo ad
                    distinctio quae. Voluptate, qui.Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Debitis tenetur error dolorem
                    quam eum dolorum, non in porro rerum recusandae vero
                    voluptate rem. Quo explicabo ad distinctio quae. Voluptate,
                    qui.Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Debitis tenetur error dolorem quam eum dolorum, non in
                    porro rerum recusandae vero voluptate rem. Quo explicabo ad
                    distinctio quae. Voluptate, qui.
                  </p>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skill Section */}
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

      {/* Projects Section */}
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
      {/* Contact Section */}

      <section id="contact" className="text-white py-5">
        <Container>
          <Row>
            <Col lg={4}>
              <h2 className="display-5 text-center">Contact</h2>
            </Col>
            <Col>
              <div>
                <Form>
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      rows={3}
                    />
                  </Form.Group>
                  <Button className="button" variant="outline-light">
                    Send
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <section id="footer" className="text-center text-white py-5">
        <div>
          <Container>
            <p>@ Karl Annthony Cereno {currentYear}</p>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default App;
