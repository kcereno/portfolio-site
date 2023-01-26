import './Hero.scss';
import { GrLinkedinOption, GrGithub, GrInstagram } from 'react-icons/gr';

function Hero() {
  return (
    <section id="home" className="pb-xl pt-2xl fade-in-fwd medium-mobile:pt-xl">
      <div className="hero__text-box mb-lg">
        <h3 className="text-primary font-body text-md small-mobile:text-sm font-bold tracking-widest mb-md uppercase">
          Hello! Nice to meet you!
        </h3>
        <div className="mb-md">
          <h1 className="text-4xl leading-[6.1rem] tablet:text-4xl tablet:leading-[6.1rem] large-mobile:text-3xl large-mobile:leading-[4.8rem] text-white font-display font-bold  tracking-tight">
            My name is Karl
          </h1>
          <h1 className="text-4xl leading-[6.1rem] tablet:text-4xl tablet:leading-[6.1rem] large-mobile:text-3xl large-mobile:leading-[4.8rem] text-white font-display font-bold  tracking-tight">
            I make cool things on the internet.
          </h1>
        </div>
        <div>
          <p className="text-md large-mobile:text-md max-w-prose font-body leading">
            I am a frontend web developer based in NYC. I especially love
            working on projects that
            <span className="text-gradient">
              &nbsp;make life easier by automating, simplifying, or, better yet,
              eliminating everyday problems
            </span>
            . When I am not behind a computer screen, I&apos;m probably picking
            up heavy stuff or giving my
            <span className="link-highlight">
              <a href="https://www.instagram.com/lillybugchronicles/">
                &nbsp;cat&nbsp;
              </a>
            </span>
            belly rubs.
          </p>
        </div>
      </div>
      <div className="hero__contact-links flex gap-md items-center medium-mobile:gap-sm small-mobile:flex-col">
        <button
          className="button css-button-arrow--rose text-md tablet:text-md ripple bg-primary hover:bg-primary-offset small-mobile:mb-xs "
          type="button"
        >
          <a href="mailto:karlcereno@gmail.com">Say Hello!</a>
        </button>
        <div className="flex gap-sm medium-mobile:w-full medium-mobile:gap-xs medium-mobile:justify-center">
          <a
            href="https://www.linkedin.com/in/karlanthonycereno/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedinOption className="h-button--large w-button--large  hover:text-primary-offset hvr-grow" />
          </a>
          <a href="https://github.com/kcereno" target="_blank" rel="noreferrer">
            <GrGithub className="h-button--large w-button--large tablet:w-button--small hover:text-primary-offset  hvr-grow" />
          </a>
          <a
            href="https://www.instagram.com/_karlospeligroso/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram className="h-button--large w-button--large tablet:w-button--small hover:text-primary-offset  hvr-grow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
