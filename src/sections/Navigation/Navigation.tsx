import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import './Navigation.scss';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ darkMode, toggleDarkMode }: Props) {
  return (
    <div className="nav grid grid-cols-3 pt-md">
      <div>{/* Used to help alignment purposes */}</div>
      <div className="flex-center-x">
        <div className="nav__links inline-block bg-gray-700 p-xxs rounded-full ">
          <a className="nav__link  mx-xxs" href="/">
            Home
          </a>
          <a className="nav__link mx-xxs" href="/">
            About
          </a>
          <a className="nav__link mx-xxs" href="/">
            Projects
          </a>
          <a className="nav__link mx-xxs" href="/">
            Contact
          </a>
        </div>
      </div>

      {/* Theme Icon */}
      <div className="theme-icon__cell">
        <div className="theme-icon-__wrapper mx-md">
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
