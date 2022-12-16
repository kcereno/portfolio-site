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
      <div className="mb-md fade-in-fwd mt-lg small-desktop:mt-xl ">
        <h3 className="text-pink text-lg small-desktop:text-md font-black mb-xs tracking-widest uppercase">
          Hello, My name is
        </h3>
        <h1 className="hero__name text-3xl leading-display--sm font-display font-semibold tracking-tight tablet:text-4xl tablet:leading-display">
          Karl Cereno
        </h1>
        <h2 className="hero__job text-3xl  leading-display--sm font-display font-semibold mb-sm tracking-tighter tablet:text-4xl tablet:leading-display">
          Frontend Web Developer
        </h2>

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
