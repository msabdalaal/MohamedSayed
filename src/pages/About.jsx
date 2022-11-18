import "../css/About.css";
import myPic from "../assets/My-Pic.jpg";
export default function About({ visibleSection }) {
  return (
    <div id="about" className="section about">
      <h1>&lt;ABOUT_ME/&gt;</h1>
      <div className="container">
        <div className={`text ${visibleSection == "about" && "visible"}`}>
          <h2>Hi, I'm Mohammed, Nice to meet you.</h2>
          <p className="Desk">
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
          <p className="Mobile">
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies.
          </p>
        </div>
        <img
          src={myPic}
          alt="My Personal Picture"
          className={`${visibleSection == "about" && "visible"}`}
        ></img>
      </div>
    </div>
  );
}
