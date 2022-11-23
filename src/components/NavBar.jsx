import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faBriefcase,
  faMessage,
  faUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Nav-Logo-White.png";
import "../css/NavBar.css";
import React, { useState } from "react";
export default function NavBar({ visibleSection }) {
  let [postion, setPostion] = useState({
    x: "94%",
    y: "30%",
  });
  function handleDrag(e) {
    setPostion({
      x: e.clientX - 30,
      y: e.clientY - 30,
    });
  }
  return (
    <nav style={{ left: postion.x, top: postion.y }}>
      {/* <div className="closeNav">
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faArrowDown} className="hide"></FontAwesomeIcon>
      </div> */}
      <ul>
        <li
          onDragEnd={handleDrag}
          onDrag={handleDrag}
          draggable="true"
          className="drag"
        >
          <FontAwesomeIcon icon={faUpDownLeftRight}></FontAwesomeIcon>
        </li>
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
