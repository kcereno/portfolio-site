import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profilePicture from "../../assets/pictures/profile1.png";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./HomeSection.module.css";

export default function HomeSection() {
  return (
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
              <div className="details text-center mb-2">
                <h2 className={styles.main}>Karl Anthony Cereno</h2>
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
                  <FontAwesomeIcon className="mx-1" icon={faGithub} size="2x" />
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
                <h2 className="display-4 py-3">Nice To Meet You...</h2>
                <h3>
                  My name is Karl and I am a web developer based in NYC and I
                  make <span style={{ color: "#ff2957" }}>modern</span> and
                  <span style={{ color: "#ff2957" }}>responsive</span> websites written
                  with elegant, easy to read and maintanable code.
                </h3>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
