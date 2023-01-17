import './Hero.scss';
import { GrLinkedinOption, GrGithub, GrInstagram } from 'react-icons/gr';

function Hero() {
  return (
    <section
      id="home"
      className="pb-xl pt-2xl fade-in-fwd medium-mobile:pt-xl "
    >
      <div className="hero__text-box mb-lg">
        <h3 className="text-primary font-body text-md small-mobile:text-sm font-bold tracking-widest mb-md uppercase">
          Hello there! My name is Karl
        </h3>
        <div className="mb-lg">
          <h1 className="text-5xl leading-[7.6rem] tablet:text-4xl tablet:leading-[6.1rem] large-mobile:text-3xl large-mobile:leading-[4.8rem] text-white font-display font-bold  tracking-tight">
            I make pretty things on the internet.
          </h1>
        </div>
        <div>
          <p className="text-lg large-mobile:text-md max-w-prose font-body  mb-sm leading-relaxed">
            I am a frontend web developer based in NYC. I especially love
            working on projects that
            <span className="text-gradient">
              &nbsp;make life easier by automating, simplifying, or, better yet,
              eliminating everyday problems
            </span>
            .
          </p>
          <p className="text-lg  large-mobile:text-md max-w-prose font-body leading-relaxed">
            When I am not behind a computer screen, I&apos;m probably picking up
            heavy stuff, giving my cat belly rubs, or fighting for honor in a
            Muay Thai battle to the death.
          </p>
        </div>
      </div>
      <div className="hero__contact-links flex gap-md items-center medium-mobile:flex-col-reverse">
        <a href="mailto:karlcereno@gmail.com">
          <button
            className="button css-button-arrow--rose text-md tablet:text-md ripple bg-primary hover:bg-primary-offset small-mobile:mb-xs "
            type="button"
          >
            Say Hello!
          </button>
        </a>
        <div className="flex gap-sm medium-mobile:w-full medium-mobile:gap-md medium-mobile:justify-center">
          <a
            href="https://www.linkedin.com/in/karlanthonycereno/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedinOption className="h-button--large w-button--large  hover:text-primary hvr-grow" />
          </a>
          <a href="https://github.com/kcereno" target="_blank" rel="noreferrer">
            <GrGithub className="h-button--large w-button--large tablet:w-button--small hover:text-primary hvr-grow" />
          </a>
          <a
            href="https://www.instagram.com/_karlospeligroso/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram className="h-button--large w-button--large tablet:w-button--small hover:text-primary hvr-grow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
