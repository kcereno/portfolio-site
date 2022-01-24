import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profilePicture from '../../assets/pictures/profile1.png'
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  return(
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
  )
}