
import logo from "../assets/Nav-Logo-White.png";
import "../css/NavBar.css";
import React, { useState } from "react";
export default function NavBar({ visibleSection }) {
  // let [postion, setPostion] = useState({
  //   x: "2vw",
  //   y: "35vh",
  // });
  // function handleDrag(e) {
  //   setPostion({
  //     x: e.clientX - 30,
  //     y: e.clientY - 30,
  //   });
  // }
  return (
    <nav>
      <ul>
        <li>
          <a href="#home" className={`${visibleSection == "home" && "active"}`}>
            <img src={logo} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            href="#home"
            className={`${visibleSection == "home" && "active"}`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`${visibleSection == "about" && "active"}`}
          >
            About
          </a>
        </li>
        <li>
          <a href="#work" className={`${visibleSection == "work" && "active"}`}>
            Work
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`${visibleSection == "contact" && "active"}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
