import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const styles = {
  socialLink: `hover:bg-[#7843e933] px-2 pt-1 rounded-md`,
};
export default function Home() {
  return (
    <section
      className={`h-screen mt-[88px]  flex flex-col justify-center items-center`}
      id="home"
    >
      <div className="container flex flex-col text-center px-4 md:px-0 gap-8 md:gap-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.5] uppercase text-black">
          Hey, I'm Mohamed Sayed
        </h1>
        <div className="flex justify-center">
          <p className="text-lg md:text-xl w-2/3">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className="">
          <a href="#projects" className="btn px-16 md:px-20 py-4">
            Projects
          </a>
        </div>
      </div>
      <div className="hidden md:flex text-3xl flex-col items-center  bg-white p-2 absolute left-0 shadow-lg">
        <div className="text-center flex flex-col gap-1 items-center ">
          <a
            rel="noopener"
            href="https://www.linkedin.com/in/mohamed-sayed-abdalaal"
            target="_blank"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            rel="noopener"
            href="https://wa.me/+201151134462"
            target="_blank"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            rel="noopener"
            href="https://x.com/msabdalaal"
            target="_blank"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            rel="noopener"
            href="https://github.com/"
            target="_blank"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            rel="noopener"
            href="https://leetcode.com/u/msabdalaal/"
            target="_blank"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
      </div>
    </section>
  );
}
