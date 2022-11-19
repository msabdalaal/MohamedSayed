import "../css/About.css";
import myPic from "../assets/My-Pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
export default function About({ visibleSection }) {
  return (
    <div id="about" className="section about">
      <h1>&lt;ABOUT_ME/&gt;</h1>
      <div className="container">
        <Fade direction="left">
          <div className={`text`}>
            <h2>Hi, I'm Mohammed, Nice to meet you.</h2>
            <p className="Desk">
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
            <p className="Mobile">
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies.
            </p>
          </div>
        </Fade>

        <div className={`personalImage`}>
          <Fade direction="right">
            <img src={myPic} alt="My Personal Picture"></img>
          </Fade>
          <Fade direction="right">
          <a
            href="/MohamedSayed/Mohamed_sayed_Resume.pdf"
            download="Mohamed_sayed_Resume"
          >
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download CV
          </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}
