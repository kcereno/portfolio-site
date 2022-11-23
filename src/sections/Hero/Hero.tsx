import './Hero.scss';
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram,
  GrMail,
} from 'react-icons/gr';

function Hero() {
  return (
    <section id="hero" className="about mb-md container">
      <div className="profile-pic mb-xs">{/* Profile pic goes here */}</div>
      <div className="name mb-xs">Karl Cereno</div>
      <div className="subheading mb-sm">
        <p>
          I make pretty things on the internet that solve problems and makes
          peoples lives easier.
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
