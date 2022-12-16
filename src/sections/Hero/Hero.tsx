import './Hero.scss';
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram,
  GrMail,
} from 'react-icons/gr';

function Hero() {
  return (
    <section id="hero">
      <div className="mt-xl mb-md fade-in-fwd small-desktop:bg-red-600">
        <h3 className="hero__intro">Hello, My name is</h3>
        <h1 className="hero__name">Karl Cereno</h1>
        <h2 className="hero__job mb-sm">Frontend Web Developer</h2>

        <p className="hero__subheading mb-md ">
          I make pretty things on the internet
        </p>

        <div className="flex pb-sm">
          <GrLinkedinOption className="social-icon hvr-grow" />
          <GrGithub className="social-icon hvr-grow" />
          <GrInstagram className="social-icon hvr-grow" />
          <GrMail className="social-icon hvr-grow" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
