import './Hero.scss';
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram,
  GrMail,
} from 'react-icons/gr';

function Hero() {
  return (
    <section id="hero" className="mb-sm container fade-in-fwd">
      <h3 className="hero-intro  mb-xs">Hello, My name is</h3>
      <h1 className="hero-name ">Karl Cereno</h1>
      <h2 className="hero-job mb-xs">Frontend Web Developer</h2>

      <p className="mb-sm hero-text">I make pretty things on the internet</p>

      <div className="social-icons pb-sm">
        <GrLinkedinOption className="social-icon hvr-grow" />
        <GrGithub className="social-icon hvr-grow" />
        <GrInstagram className="social-icon hvr-grow" />
        <GrMail className="social-icon hvr-grow" />
      </div>
    </section>
  );
}

export default Hero;
