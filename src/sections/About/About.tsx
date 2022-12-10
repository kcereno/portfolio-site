import './About.scss';

function About() {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__text-box mb-md">
          <h2 className="mb-sm section-title">A little about me</h2>
          <p className="mb-xs">
            I am Frontend Developer from NYC. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <p className="mb-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <button className="button-8" type="button">
            <span className="text">Contact</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
