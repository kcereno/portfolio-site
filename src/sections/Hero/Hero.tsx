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
      <div className="profile-pic mb-xs">{/* Profile pic goes here */}</div>
      <div className="name mb-sm">Karl Cereno</div>
      <div className="subheading mb-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
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
