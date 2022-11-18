import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faArrowUp,
  faArrowDown,
  faBriefcase,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Nav-Logo-White.png";
import "../css/NavBar.css";
export default function NavBar({ visibleSection }) {
  return (
    <nav>
      {/* <div className="closeNav">
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faArrowDown} className="hide"></FontAwesomeIcon>
      </div> */}
      <ul>
        <li>
          <a href="#home" className={`${visibleSection == "home" && "active"}`}>
            <img src={logo} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`${visibleSection == "about" && "active"}`}
          >
            <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="#work" className={`${visibleSection == "work" && "active"}`}>
            <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`${visibleSection == "contact" && "active"}`}
          >
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </nav>
  );
}
