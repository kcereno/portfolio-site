function FeatureProjects() {
  return (
    <section id="featured-projects">
      <div className="container">
        <h1 className="text-center">Some Noteworthy Projects</h1>
        {/* Project 1 */}
        <div className="feature-project my-md">
          <div className="feature-project-img">
            <img src="https://via.placeholder.com/540x320" alt="" />
          </div>
          <div className="feature-project-description">
            <h1 className="mb-sm">Project Title 1</h1>
            <p className="mb-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa
              sed saepe possimus ipsam natus nisi a, veniam quas doloremque.
            </p>
            <div className="btn-group">
              <button type="button" className="button-8">
                Live Site
              </button>
              <button type="button" className="button-8">
                GitHub
              </button>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="feature-project my-md">
          <div className="feature-project-description">
            <h1 className="mb-sm">Project Title 2</h1>
            <p className="mb-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa
              sed saepe possimus ipsam natus nisi a, veniam quas doloremque.
            </p>
            <div className="btn-group">
              <button type="button" className="button-8">
                Live Site
              </button>
              <button type="button" className="button-8">
                GitHub
              </button>
            </div>
          </div>
          <div className="feature-project-img">
            <img src="https://via.placeholder.com/540x320" alt="" />
          </div>
        </div>
        {/* Project 3 */}
        <div className="feature-project my-md">
          <div className="feature-project-img">
            <img src="https://via.placeholder.com/540x320" alt="" />
          </div>
          <div className="feature-project-description">
            <h1 className="mb-sm">Project Title 1</h1>
            <p className="mb-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa
              sed saepe possimus ipsam natus nisi a, veniam quas doloremque.
            </p>
            <div className="btn-group">
              <button type="button" className="button-8">
                Live Site
              </button>
              <button type="button" className="button-8">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
