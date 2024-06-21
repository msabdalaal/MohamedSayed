import "../css/Home.css";
import HeroImage from "../assets/HeroImage.png";
import { useEffect, useState } from "react";
import TypingEffect from "../Functions/TypingEffect";
export default function Home() {
  return (
    <div id="home" className="section home">
      <img src={HeroImage} alt="Hero Image" />
        <div className="text">
          <h2>
          {<TypingEffect text="Hii, My name is"/>}|
          </h2>
          <h1>{<TypingEffect text="Moohamed Sayed"/>}|</h1>
        </div>
        <div className="links">
        <a className="solid" href="#about">{<TypingEffect text="Abbout Me"/>}</a>
        <a href="#about">{<TypingEffect text="Coontact Me"/>}</a>
        </div>
    </div>
  );
}
