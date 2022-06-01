import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./HomeSection.module.css";

export default function HomeSection() {
  return (
    <section id="home" className="py-2 ">
      <Container className="py-5 d-flex align-items-center flex-column text-center">
        <div className={styles.text_container}>
          <h2 className={styles.header}>Hello, I'm Karl.</h2>
          <h3 className={styles.subheader}>
            I'm a Front End Web Developer based in NYC
          </h3>
          <div>
            <p>
              Prior to web development, I worked and thrived in many different
              industries such as retail, fitness and healthcare. It wasn't until
              I played an iPhone game call Human Resource Machine where I
              discovered coding. I was hooked immediately. Coding fulfilled my
              natural desire to create and problem solve.
            </p>
            <p>
              Fast forward to today, I taught myself how to build modern and
              responsive website and apps suitable for any purpose.
            </p>
          </div>
        </div>

        <div id="icons" className="icon-group mt-1">
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
            <FontAwesomeIcon className="mx-1" icon={faInstagram} size="2x" />
          </a>
          <a href="https://github.com/kcereno" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="mx-1" icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/karlanthonycereno/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mx-1" icon={faLinkedin} size="2x" />
          </a>
        </div>
      </Container>
    </section>
  );
}
