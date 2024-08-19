import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-black flex justify-center text-white py-5 w-full">
      <div className="container">
        <div className="px-5 md:px-0 flex flex-col md:flex-row-reverse gap-10 py-10">
          <div className="flex flex-col gap-4">
            <h2 className="flex flex-col">
              <span className="text-xl uppercase font-bold">Social</span>
            </h2>
            <div className="text-center md:text-2xl flex gap-3 items-center ">
              <a
                rel="noopener"
                href="https://www.linkedin.com/in/mohamed-sayed-abdalaal"
                target="_blank"
                className=""
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                rel="noopener"
                href="https://wa.me/+201151134462"
                target="_blank"
                className=""
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                rel="noopener"
                href="https://x.com/msabdalaal"
                target="_blank"
                className="{}"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

              <a
                rel="noopener"
                href="https://github.com/"
                target="_blank"
                className="{}"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                rel="noopener"
                href="https://github.com/"
                target="_blank"
                className="{}"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-bold">Mohamed Sayed</h4>
            <p className="md:w-1/2">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>

        <div className="text-center border-t-[1px] py-10">
          UI Inspired By{" "}
          <a
            rel="noopener"
            target="_blank"
            className="underline"
            href="https://rammaheshwari.com"
          >
            Ram Maheshwari
          </a>
        </div>
      </div>
    </footer>
  );
}
