import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import './Navigation.scss';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ darkMode, toggleDarkMode }: Props) {
  return (
    <div className="nav grid grid-cols-3 pt-md mb-xl ">
      <div>{/* Used to help alignment purposes */}</div>
      <div className="nav-links-cell flex-center-x">
        <div className="nav-links inline-block bg-gray-700 p-xxs rounded-full ">
          <a className="nav-link  mx-xxs" href="/">
            Home
          </a>
          <a className="nav-link mx-xxs" href="/">
            About
          </a>
          <a className="nav-link mx-xxs" href="/">
            Projects
          </a>
          <a className="nav-link mx-xxs" href="/">
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
