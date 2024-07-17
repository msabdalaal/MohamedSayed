import "../css/Home.css";
import HeroImage from "../assets/HeroImage.png";
import TypingEffect from "../Functions/TypingEffect";
export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "I am Mohamed Sayed",
    "I am a Web Developer",
    "I am Graphic Designer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, phrases]);
  return (
    <div id="home" className="section home lg:items-start pl-0 lg:pl-32 ">
      <img src={HeroImage} alt="Hero Image" className="hidden lg:block" />
      <div className="text sm:text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl">
          {text}
          <span className="cursor"></span>|
        </h2>
        <h1 className="text-4xl lg:text-6xl">
          {<TypingEffect text="Moohamed Sayed" />}|
        </h1>
      </div>
      <div className="links justify-center xl:justify-start">
        <a
          className="solid px-6 py-6 lg:text-2xl flex justify-center items-center"
          href="#about"
        >
          {<TypingEffect text="Abbout Me" />}
        </a>
        <a
          className="px-6 py-6 lg:text-2xl flex justify-center items-center"
          href="#about"
        >
          {<TypingEffect text="Coontact Me" />}
        </a>
      </div>
    </div>
  );
}
