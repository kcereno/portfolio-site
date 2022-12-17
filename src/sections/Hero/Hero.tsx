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
      <div className="mb-xl pt-xl fade-in-fwd  ">
        <h3 className="text-pink text-lg font-black mb-xs tracking-widest uppercase tablet:text-md">
          Hello, My name is
        </h3>
        <h1 className=" text-4xl leading-display font-display font-semibold tracking-tight tablet:text-3xl tablet:leading-display--tablet">
          Karl Cereno
        </h1>
        <h2 className=" text-4xl  leading-display font-display font-semibold mb-sm tracking-tighter  text-gray-400 tablet:text-3xl tablet:leading-display--tablet">
          Frontend Web Developer
        </h2>

        <p className="max-w-prose mb-md text-xl text-gray-500 tablet:text-lg">
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
