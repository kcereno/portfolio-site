/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md';
import './Navigation.scss';
import { GrArchive, GrHomeRounded, GrMailOption } from 'react-icons/gr';

function Navigation() {
  return (
    <section id="nav">
      <nav className="pt-md pb-xl flex justify-center text-sm large-mobile:pb-md">
        <ul className="flex gap-md">
          <li>
            <a href="#home" className="hover-left-right">
              home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover-left-right">
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover-left-right">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navigation;
