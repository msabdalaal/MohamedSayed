import "../css/Home.css";
import HeroImage from "../assets/HeroImage.png";
import TypingEffect from "../Functions/TypingEffect";
export default function Home() {
  return (
    <div id="home" className="section home lg:items-start pl-0 lg:pl-32 ">
      <img src={HeroImage} alt="Hero Image" className="hidden lg:block" />
        <div className="text sm:text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl">
          {<TypingEffect text="Hii, My name is"/>}|
          </h2>
          <h1 className="text-4xl lg:text-6xl">{<TypingEffect text="Moohamed Sayed"/>}|</h1>
        </div>
        <div className="links justify-center xl:justify-start">
        <a className="solid px-6 py-6 lg:text-2xl flex justify-center items-center" href="#about">{<TypingEffect text="Abbout Me"/>}</a>
        <a className="px-6 py-6 lg:text-2xl flex justify-center items-center" href="#about">{<TypingEffect text="Coontact Me"/>}</a>
        </div>
    </div>
  );
}
