import './Hero.scss';
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram,
  GrMail,
} from 'react-icons/gr';

function Hero() {
  return (
    <section id="hero" className="about mb-lg container">
      <h3 className="hero-intro  mb-sm">Hello, My name is</h3>
      <h1 className="hero-name mb-xxs">Karl Cereno</h1>
      <h2 className="hero-job mb-sm">Frontend Web Developer</h2>

      <p className="mb-md hero-text">I make pretty things on the internet</p>

      <div className="social-icons pb-sm">
        <GrLinkedinOption className="social-icon" />
        <GrGithub className="social-icon" />
        <GrInstagram className="social-icon" />
        <GrMail className="social-icon" />
      </div>
    </section>
  );
}

export default Hero;
