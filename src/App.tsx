import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

import "./App.scss";
import NavigationBar from "./Components/Navbar/NavigationBar";

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
                <div>
                  <h3>Social Media Links</h3>
                </div>
              </Container>
            </Col>
            <Col className="bio text-white">
              <Container>
                <div className="bio">
                  <h2>Bio</h2>
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
