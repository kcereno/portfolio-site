import './Hero.scss';
import { GrLinkedinOption, GrGithub, GrInstagram } from 'react-icons/gr';

function Hero() {
  return (
    <section id="hero">
      <div className="hero__container mx-lg pt-xl fade-in-fwd tablet:mx-md large-mobile:mx-sm  large-mobile:pt-lg ">
        <div className="hero__text-box">
          <h3 className="text-pink text-lg font-black mb-xs tracking-widest uppercase tablet:text-md">
            Hey there, My name is
          </h3>
          <h1 className=" text-4xl leading-display font-display font-semibold tracking-tight tablet:text-3xl tablet:leading-display--tablet small-mobile:text-2xl">
            Karl Cereno
          </h1>
          <h2 className=" text-4xl leading-display font-display font-semibold mb-md tracking-tighter  text-gray-400 tablet:text-3xl tablet:leading-display--tablet small-mobile:text-2xl small-mobile:leading-[3.9rem]">
            Frontend Web Developer
          </h2>
          <p className="max-w-prose mb-md text-md  text-gray-500 tablet:text-md  small-mobile:text-md">
            I make pretty things on the internet. I love
            <span className="text-gradient">
              &nbsp;clean and intuitive web design&nbsp;
            </span>
            and even
            <span className="text-gradient">&nbsp;cleaner code&nbsp;</span>
            .When I am not behind a computer screen, I&apos;m probably picking
            up heavy stuff, giving my cat belly rubs or in a Muay Thai battle to
            the death (or until when one of us gets tired).
          </p>
        </div>
        <div className="hero__contact-links flex gap-md items-center medium-mobile:flex-col-reverse">
          <button
            className="button css-button-arrow--rose text-md tablet:text-md ripple bg-pink small-mobile:mb-xs "
            type="button"
          >
            Say Hello!
          </button>
          <div className="flex  gap-sm medium-mobile:w-full medium-mobile:gap-md medium-mobile:justify-center">
            <a
              href="https://www.linkedin.com/in/karlanthonycereno/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedinOption className="h-button--large w-button--large  hover:text-pink hvr-grow" />
            </a>
            <a
              href="https://github.com/kcereno"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub className="h-button--large w-button--large tablet:w-button--small hover:text-pink hvr-grow" />
            </a>
            <a
              href="https://www.instagram.com/_karlospeligroso/"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram className="h-button--large w-button--large tablet:w-button--small hover:text-pink hvr-grow" />
            </a>
            {/* <GrMail className="h-[2.2rem] w-[2.2rem] hover:text-pink mr-md hvr-grow" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
