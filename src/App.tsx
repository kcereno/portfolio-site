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
          <Row className="py-5">
            <Col className="profile col-lg-4 col-12 text-white">
              <Container>
                <div className="avatar">
                  <h2>Profile Pic</h2>
                </div>
                <div className="name">
                  <h3>Karl Anthony Cereno</h3>
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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis tenetur error dolorem quam eum dolorum, non in porro rerum recusandae vero voluptate rem. Quo explicabo ad distinctio quae. Voluptate, qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis tenetur error dolorem quam eum dolorum, non in porro rerum recusandae vero voluptate rem. Quo explicabo ad distinctio quae. Voluptate, qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis tenetur error dolorem quam eum dolorum, non in porro rerum recusandae vero voluptate rem. Quo explicabo ad distinctio quae. Voluptate, qui.</p>
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
