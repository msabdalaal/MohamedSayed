import "../css/Home.css";
import { Fade, Zoom } from "react-awesome-reveal";
export default function Home() {
  return (
    <div id="home" className="section home">
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
