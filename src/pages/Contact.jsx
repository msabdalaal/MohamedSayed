import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Contact.css";
export default function Contact({visibleSection}) {
  return (
    <div id="contact" className="section contact">
      <h1>&lt;CONTACT_ME/&gt;</h1>
      <h2>I'm excited to learn about your project. Ready to get started?</h2>
      <div className={`contactForm ${visibleSection == "contact" && "showContact"}`} id="contactFrom">
        <form
          action="https://formsubmit.co/edfc276360cae2a8feb9e48cff7f0b5a"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Message" />
          <input
            type="hidden"
            name="_next"
            value="https://msabdalaal.github.io/MohamedSayed/Thankyou.html"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <ul>
        <li>
          <a href="https://www.facebook.com/msabdalaal/" target="_blank">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="http://wa.me/201151134462" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://github.com/msabdalaal">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/msabdalaal/">
            <FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
}
