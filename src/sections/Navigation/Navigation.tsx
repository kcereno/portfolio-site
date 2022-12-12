import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import './Navigation.scss';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ darkMode, toggleDarkMode }: Props) {
  return (
    <div className="nav__container">
      <div>{/* Used to help alignment purposes */}</div>
      <div className="nav__links-cell">
        <div className="nav__links  bg-gray-700 p-xxs">
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
          <div className="nav__link-theme">
            {darkMode ? (
              <MdOutlineModeNight
                className="nav__theme-icon"
                onClick={toggleDarkMode}
              />
            ) : (
              <MdOutlineLightMode
                className="nav__theme-icon"
                onClick={toggleDarkMode}
              />
            )}
          </div>
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
