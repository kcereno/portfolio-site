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
      <div className="hero-name mb-xxs">Karl Cereno</div>
      <div className="hero-subheading mb-md">
        <p>
          I make pretty things on the internet with a focus on
          <span> clean design </span>
          and
          <span> intuitive UI</span>
        </p>
      </div>
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
