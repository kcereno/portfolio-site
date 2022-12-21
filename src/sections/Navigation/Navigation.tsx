/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import './Navigation.scss';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ darkMode, toggleDarkMode }: Props) {
  return (
    <div className="nav grid grid-cols-3 pt-md large-mobile:grid-cols-1 large-mobile:pt-0 ">
      <div className="nav__container flex  justify-center col-start-2 large-mobile:col-start-1">
        <nav className="nav__links flex justify-between items-center py-xxs px-xs gap-xs bg-gray-800 rounded-full  large-mobile:w-full large-mobile:rounded-none  large-mobile:justify-around large-mobile:p-xs">
          <a
            className="nav__link leading-[24px] px-xxs text-sm large-mobile:text-md  small-mobile:text-sm text-gray-100 cursor-pointer no-underline transition-all duration-300 hover:text-gray-500"
            href="#hero"
          >
            Home
          </a>
          <a
            className="nav__link leading-[24px] px-xxs text-sm large-mobile:text-md small-mobile:text-sm text-gray-100 cursor-pointer no-underline transition-all duration-300 hover:text-gray-500"
            href="#about"
          >
            About
          </a>
          <a
            className="nav__link leading-[24px] px-xxs text-sm large-mobile:text-md small-mobile:text-sm text-gray-100 cursor-pointer no-underline transition-all duration-300 hover:text-gray-500"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="nav__link leading-[24px] px-xxs text-sm large-mobile:text-md small-mobile:text-sm text-gray-100 cursor-pointer no-underline transition-all duration-300 hover:text-gray-500"
            href="#contact"
          >
            Contact
          </a>
          <div className="nav__link-theme hidden large-mobile:hidden">
            {/* {darkMode ? (
              <MdOutlineModeNight
                className="nav__theme-icon"
                onClick={toggleDarkMode}
              />
            ) : (
              <MdOutlineLightMode
                className="nav__theme-icon"
                onClick={toggleDarkMode}
              />
            )} */}
          </div>
        </nav>
      </div>

      {/* Theme Icon */}
      <div className="theme-icon__cell justify-self-end medium-mobile:hidden">
        {/* <div className="theme-icon-__wrapper mx-md flex justify-center items-center bg-gray-700 rounded-full h-[3.4rem] w-[3.4rem] ">
          {darkMode ? (
            <MdOutlineModeNight
              className="theme-icon justify-end h-[2.1rem] w-[2.1rem] p-[0.3rem] inline-block transition-all duration-500 hover:cursor-pointer hover:fill-gray-500"
              onClick={toggleDarkMode}
            />
          ) : (
            <MdOutlineLightMode
              className="theme-icon justify-end h-[2.1rem] w-[2.1rem] p-[0.3rem] inline-block transition-all duration-500 hover:cursor-pointer hover:fill-gray-500"
              onClick={toggleDarkMode}
            />
          )}
        </div> */}
      </div>
    </div>
  );
}

export default Navigation;
