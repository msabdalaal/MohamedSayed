import "../css/Home.css";
import { Fade} from "react-awesome-reveal";
import HeroImage from "../assets/HeroImage.png";
export default function Home() {
  return (
    <div id="home" className="section home">
      <img src={HeroImage} alt="Hero Image" />
      <Fade direction="down">
        <div className="text">
          <h2>
            Hello, I'm <span>&lt;Mohamed_Sayed/&gt;</span>
          </h2>
          <h2>I'm Front-End Web Develober</h2>
        </div>
      </Fade>
      <Fade direction="up">
        <a href="#about">Who Am I .. ?!</a>
      </Fade>
    </div>
  );
}
