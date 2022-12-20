import './Hero.scss';
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram,
  // GrMail,
} from 'react-icons/gr';

function Hero() {
  return (
    <section id="hero">
      <div className="hero__container mb-xl pt-xl fade-in-fwd  ">
        <div className="hero__text-box">
          <h3 className="text-pink text-lg font-black mb-xs tracking-widest uppercase tablet:text-md">
            Hello, My name is
          </h3>
          <h1 className=" text-4xl leading-display font-display font-semibold tracking-tight tablet:text-3xl tablet:leading-display--tablet small-mobile:text-2xl">
            Karl Cereno
          </h1>
          <h2 className=" text-4xl  leading-display font-display font-semibold mb-sm tracking-tighter  text-gray-400 tablet:text-3xl tablet:leading-display--tablet small-mobile:text-2xl small-mobile:leading-[3.9rem]">
            Frontend Web Developer
          </h2>
          <p className="max-w-prose mb-md text-lg text-gray-500 tablet:text-lg small-mobile:text-md">
            This is where I talk a little about my self. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="hero__contact-links flex gap-sm items-center">
          <button
            className="css-button-arrow--rose text-md bg-pink"
            type="button"
          >
            Say Hello!
          </button>
          <div className="">
            <GrLinkedinOption className="h-[3.2rem] w-[3.2rem] hover:text-pink hvr-grow mx-xs" />
            <GrGithub className="h-[3.2rem] w-[3.2rem] hover:text-pink hvr-grow mx-xs" />
            <GrInstagram className="h-[3.2rem] w-[3.2rem] hover:text-pink hvr-grow mx-xs" />
            {/* <GrMail className="h-[2.2rem] w-[2.2rem] hover:text-pink mr-md hvr-grow" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
