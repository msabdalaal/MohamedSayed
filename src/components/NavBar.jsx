import logo from "../assets/Nav-Logo-White.png";
import "../css/NavBar.css";
import React, { useState } from "react";
export default function NavBar({ visibleSection }) {
  return (
    <nav className="flex justify-center lg:justify-start lg:pl-24">
      <ul className="flex justify-center items-center gap-8">
        <li className="hidden lg:flex">
          <a href="#home" className={`${visibleSection == "home" && "active"}`}>
            <img src={logo} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            href="#home"
            className={`${visibleSection == "home" && "active"} rounded-lg`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`${visibleSection == "about" && "active"} rounded-lg`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#work"
            className={`${visibleSection == "work" && "active"} rounded-lg`}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`${visibleSection == "contact" && "active"} rounded-lg`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
