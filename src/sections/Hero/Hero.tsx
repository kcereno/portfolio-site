import './Hero.scss';
import { GrLinkedinOption, GrGithub, GrInstagram } from 'react-icons/gr';

function Hero() {
  return (
    <section id="home" className="pb-xl pt-2xl fade-in-fwd medium-mobile:pt-xl">
      <div className="hero__text-box mb-lg">
        <div className="mb-md">
          <h3 className="uppercase text-md tracking-widest font-bold hero2:text-sm text-primary-offset mb-xs">
            Hey there, my name is
          </h3>
          <h1 className="text-4xl leading-[6.1rem] hero1:text-3xl hero1:leading-[4.8rem] hero2:text-2xl hero2:leading-3.9 hero3:text-xl hero3:leading-[3.1rem] text-white font-display font-bold  tracking-tight">
            Karl Anthony Cereno
          </h1>
          <h1 className="text-4xl leading-[6.1rem] hero1:text-3xl hero1:leading-[4.8rem] hero2:text-2xl hero2:leading-3.9 hero3:text-xl hero3:leading-[3.1rem]  text-white font-display font-bold  tracking-tight">
            Frontend Web Developer
          </h1>
        </div>
        <div className="text-gray-300">
          <p className="text-lg large-mobile:text-md max-w-prose font-body leading">
            I design and develop
            <span className="text-gradient">
              &nbsp;modern, responsive and intuitive&nbsp;
            </span>
            web things. When I am not behind a computer screen, I&apos;m
            probably picking up heavy stuff or giving my
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
