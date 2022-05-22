import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profilePicture from "../../assets/pictures/profile4.jpg";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./HomeSection.module.css";

export default function HomeSection() {
  return (
    <section id="home" className="py-5 text-white">
        <Container className="d-flex align-items-center w-50">
          <div className="text-center">
            <h2 className={styles.header}>Hi, My name is Karl.</h2>
            <h3 className={styles.subheader}>
              I'm a web developer from NYC. I make{" "}
              <span style={{ color: "#ff2957" }}>modern</span> and
              <span style={{ color: "#ff2957" }}> responsive</span> websites and
              web apps written in{" "}
              <span style={{ color: "#ff2957" }}>elegant</span>,{" "}
              <span style={{ color: "#ff2957" }}>easy to read</span>, and{" "}
              <span style={{ color: "#ff2957" }}>maintainable </span>
              code.
            </h3>
            <Container className="d-flex flex-column align-items-center pt-3">
              {/* <img
                className="profile-img py-3"
                src={profilePicture}
                alt="Karl Anthony Cereno"
              /> */}
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
          </div>
        </Container>

    </section>
  );
}
