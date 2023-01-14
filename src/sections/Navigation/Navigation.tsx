/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import './Navigation.scss';
import { GrArchive, GrHomeRounded, GrMailOption } from 'react-icons/gr';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ darkMode, toggleDarkMode }: Props) {
  return (
    <div className="nav pt-md ">
      <div className="nav__container flex justify-center ">
        <nav className="nav__links flex text-md gap-lg">
          <a
            className="nav__link   large-mobile:text-md  small-mobile:text-sm text-gray-100 cursor-pointer no-underline transition-all duration-300 hover:text-gray-500 flex flex-col"
            href="#hero"
          >
            {/* <GrHomeRounded
                className="nav__theme-icon hidden   mx-auto large-mobile:block"
                color="blue"
              /> */}
            home
          </a>
          <a
            className="nav__link   large-mobile:text-md small-mobile:text-sm text-gray-100 cursor-pointer no-underline transition-all duration-300 hover:text-gray-500"
            href="#projects"
          >
            projects
          </a>
          <a
            className="nav__link large-mobile:text-md small-mobile:text-sm text-gray-100 cursor-pointer no-underline transition-all duration-300 hover:text-gray-500"
            href="#contact"
          >
            contact
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
    </div>
  );
}

export default Navigation;
