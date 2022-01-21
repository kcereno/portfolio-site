import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import NavigationBar from "./Components/Navbar/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      {/* Home Section */}
      <section id="home" className="home-section">
        <Container>
          <Row className="py-4">
            <Col className="profile col-lg-4 col-12 text-white">
              <Container className="d-flex flex-column align-items-center">
                <img
                  className="profile-img rounded-circle py-3"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80"
                  alt="Karl Anthony Cereno"
                />
                <div className="details text-center">
                  <h2>Karl Anthony Cereno</h2>
                  <p>Front End Web Developer</p>
                </div>
                <div className="icon-group">
                  <FontAwesomeIcon
                    className="mx-1"
                    icon={faEnvelope}
                    size="2x"
                  />
                  <FontAwesomeIcon
                    className="mx-1"
                    icon={faInstagram}
                    size="2x"
                  />
                  <FontAwesomeIcon className="mx-1" icon={faGithub} size="2x" />
                  <FontAwesomeIcon
                    className="mx-1"
                    icon={faLinkedin}
                    size="2x"
                  />
                </div>
              </Container>
            </Col>
            <Col className="text-white">
              <Container>
                <div className="bio">
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
      {/* Projects Section */}
      {/* Contact Section */}
      {/* Footer */}
    </div>
  );
}

export default App;
