import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import './Navigation.scss';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ darkMode, toggleDarkMode }: Props) {
  return (
    <div className="nav pt-md mb-xl ">
      <div>{/* Used to help alignment purposes */}</div>
      <div className="nav-links-cell">
        <div className="nav-links ">
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            About
          </a>
          <a className="nav-link" href="/">
            Projects
          </a>
          <a className="nav-link" href="/">
            Contact
          </a>
        </div>
      </div>

      {/* Theme Icon */}
      <div className="theme-icon-cell">
        <div className="theme-icon-container mx-md">
          {darkMode ? (
            <MdOutlineModeNight
              className="theme-icon"
              onClick={toggleDarkMode}
            />
          ) : (
            <MdOutlineLightMode
              className="theme-icon"
              onClick={toggleDarkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
