import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./NavigationBar.module.scss";

export default function NavigationBar() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className={styles.logo}>
            <span className={styles.logo}>Karl Cereno</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
