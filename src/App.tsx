import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="nav mb-xl">Nav</div>

      <div className="about mb-lg">
        <div className="profile-pic">profile picture</div>
        <div className="name">Karl Cereno</div>
        <div className="subheading">A quick description of what i do</div>
        <div className="social">Social Links</div>
      </div>
      <div className="content">
        <div className="about">
          Grid Cell 1. This is where I&apos;ll talk about myself. Take from
          RAMs. Link to contact form site
        </div>
        <div className="skills mb-lg">
          Grid 2. This is where I&apos;ll talk about my skills
        </div>
      </div>

      <div className="projects">Project Section. Take from RAM</div>
      <div className="contact">Contact Form.</div>
      <div className="footer">Simple footer. Just name and date</div>
    </div>
  );
}

export default App;
