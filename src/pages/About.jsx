import "../css/About.css";
import myPic from "../assets/My-Pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
export default function About() {
  return (
    <div
      className="about w-screen flex justify-center items-center flex-col py-16"
      id="about"
    >
      <h1 className="text-4xl text-center pb-8">&lt;ABOUT_ME/&gt;</h1>
      <div className="container flex flex-col lg:flex-row justify-center items-center gap-20 px-8 lg:px-0">
        <Fade direction="left">
          <div className="text-center lg:text-start">
            <h2 className="lg:text-xl text-2xl pb-8">
              Hi, I'm Mohammed, Nice to meet you.
            </h2>
            <p className="Desk leading-7 hidden lg:block text-justify pr-16">
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
            <p className="Mobile text-lg lg:hidden text-center">
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies.
            </p>
          </div>
        </Fade>
        <div className={`personalImage`}>
          <Fade direction="right">
            <img src={myPic} alt="My Personal Picture" className=""></img>
          </Fade>
          <Fade direction="right">
            <a
              href="/MohamedSayed/Mohamed_sayed_CV.pdf"
              download="Mohamed_sayed_Resume.pdf"
              className="flex justify-center items-center p-4"
            >
              <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>{" "}
              <p className="">Download CV</p>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}
