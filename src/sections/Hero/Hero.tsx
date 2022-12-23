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
      <div className="hero__container pt-xl fade-in-fwd  small-mobile:pt-lg ">
        <div className="hero__text-box">
          <h3 className="text-pink text-lg font-black mb-xs tracking-widest uppercase tablet:text-md">
            Hello, My name is
          </h3>
          <h1 className=" text-4xl leading-display font-display font-semibold tracking-tight tablet:text-3xl tablet:leading-display--tablet small-mobile:text-2xl">
            Karl Cereno
          </h1>
          <h2 className=" text-4xl leading-display font-display font-semibold mb-md tracking-tighter  text-gray-400 tablet:text-3xl tablet:leading-display--tablet small-mobile:text-2xl small-mobile:leading-[3.9rem]">
            Frontend Web Developer
          </h2>
          <p className="max-w-prose mb-md text-md  text-gray-500 tablet:text-md  small-mobile:text-md">
            I make pretty and cool things on the internet. I&apos;m passionate
            about
            <span className="text-gradient">
              {' '}
              clean and intuitive web design and even cleaner code
            </span>
            . When I am not behind a computer screen, I&apos;m probably picking
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
          <div className="flex w-16 gap-sm medium-mobile:w-full medium-mobile:gap-md medium-mobile:justify-center">
            <GrLinkedinOption className="h-button--large w-button--large  hover:text-pink hvr-grow" />
            <GrGithub className="h-button--large w-button--large tablet:w-button--small hover:text-pink hvr-grow" />
            <GrInstagram className="h-button--large w-button--large tablet:w-button--small hover:text-pink hvr-grow" />
            {/* <GrMail className="h-[2.2rem] w-[2.2rem] hover:text-pink mr-md hvr-grow" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
