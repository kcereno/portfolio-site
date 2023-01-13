import './Hero.scss';
import { GrLinkedinOption, GrGithub, GrInstagram } from 'react-icons/gr';

function Hero() {
  return (
    <section id="hero">
      <div className="hero__container pt-xl fade-in-fwd tablet:mx-md large-mobile:mx-sm  large-mobile:pt-lg ">
        <div className="hero__text-box">
          <h3 className="text-primary text-md  font-bold tracking-widest mb-sm uppercase b">
            Hello there! My name is Karl and
          </h3>
          <div className=" text-4xl text-white font-display font-bold  mb-md leading-[6rem]">
            <h1 className=" tracking-tight tablet:text-3xl tablet:leading-display--tablet small-mobile:text-2xl">
              I make pretty things on the internet.
            </h1>
          </div>

          <p className=" mb-md text-lg  tablet:text-md  small-mobile:text-md">
            I am a frontend web developer based in NYC. I love
            <span className="text-gradient">
              &nbsp;clean and intuitive web design&nbsp;
            </span>
            and even
            <span className="text-gradient">&nbsp;cleaner code</span>
            .&nbsp;
            <br />
            When I am not behind a computer screen, I&apos;m probably picking up
            heavy stuff, giving my cat belly rubs or in a Muay Thai battle to
            the death (or until when one of us gets tired).
          </p>
        </div>
        <div className="hero__contact-links flex gap-md items-center medium-mobile:flex-col-reverse">
          <button
            className="button css-button-arrow--rose text-md tablet:text-md ripple bg-primary small-mobile:mb-xs "
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
              <GrLinkedinOption className="h-button--large w-button--large  hover:text-primary hvr-grow" />
            </a>
            <a
              href="https://github.com/kcereno"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub className="h-button--large w-button--large tablet:w-button--small hover:text-primary hvr-grow" />
            </a>
            <a
              href="https://www.instagram.com/_karlospeligroso/"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram className="h-button--large w-button--large tablet:w-button--small hover:text-primary hvr-grow" />
            </a>
            {/* <GrMail className="h-[2.2rem] w-[2.2rem] hover:text-primary mr-md hvr-grow" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
