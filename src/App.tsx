import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavigationBar from "./Sections/NavigationBar/NavigationBar";
import HomeSection from "./Sections/HomeSection/HomeSection";
import SkillSection from "./Sections/Skills/SkillsSection";
import ProjectsSection from "./Sections/ProjectsSection/ProjectsSection";
import ContactSection from "./Sections/ContactSection/ContactSection";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomeSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
