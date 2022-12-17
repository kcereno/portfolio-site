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
        <h3 className="text-pink text-md small-desktop:text-md font-black mb-xs tracking-widest uppercase">
          Hello, My name is
        </h3>
        <h1 className="text-2xl medium-mobile:text-3xl leading-display--sm font-display font-semibold tracking-tight tablet:text-4xl tablet:leading-display">
          Karl Cereno
        </h1>
        <h2 className="text-2xl medium-mobile:text-3xl  leading-display--sm  font-display font-semibold mb-sm tracking-tighter tablet:text-4xl tablet:leading-display text-gray-400 ">
          Frontend Web Developer
        </h2>

        <p className="hero__subheading max-w-prose mb-md text-lg text-gray-500 ">
          I make pretty things on the internet
        </p>

        <div className="flex pb-sm">
          <GrLinkedinOption className="h-[2.2rem] w-[2.2rem] hover:text-pink mr-md hvr-grow" />
          <GrGithub className="h-[2.2rem] w-[2.2rem] hover:text-pink mr-md hvr-grow" />
          <GrInstagram className="h-[2.2rem] w-[2.2rem] hover:text-pink mr-md hvr-grow" />
          <GrMail className="h-[2.2rem] w-[2.2rem] hover:text-pink mr-md hvr-grow" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
