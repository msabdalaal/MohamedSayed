import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Contact.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  let [showThanksMessage, setShowThanksMessage] = useState(false);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function validateForm() {
    if (formData.name != "" && formData.message != "" && formData.email != "") {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
      ) {
        setShowThanksMessage(true);
      } else {
        alert("Enter a valid Email please");
      }
    } else {
      alert(`please fill all fiellds`);
    }
  }
  function TanksMessage() {
    if (showThanksMessage) {
      return (
        <div className={`thanks`}>
          <div className="text">
            <h2>
              <span>Thanks For Sending An Email</span>
            </h2>
            <h2>I'll Respond To You ASAP</h2>
          </div>
          <button onClick={() => setShowThanksMessage(true)} type="submit">
            OK
          </button>
        </div>
      );
    }
  }
  return (
    <div id="contact" className="section contact py-16 px-20">
      <h1 className="text-center pb-8 text-4xl">&lt;CONTACT_ME/&gt;</h1>
      <h2 className="text-2xl text-center">
        I'm excited to learn about your project. Ready to get started?
      </h2>
      <Fade>
        <div className={`contactForm`} id="contactFrom">
          <form
            action="https://formsubmit.co/edfc276360cae2a8feb9e48cff7f0b5a"
            method="POST"
            className="p-6"
          >
            <input type="hidden" name="_subject" value="New Message" />
            <input
              type="hidden"
              name="_next"
              value="https://msabdalaal.github.io/MohamedSayed/#contact"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              required
            />
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              required
            />
            <textarea
              onChange={(e) => handleChange(e)}
              placeholder="Your Message"
              className="form-control"
              name="message"
              value={formData.message}
              rows="10"
              required
            ></textarea>
            <TanksMessage />
            <button onClick={validateForm} type="button">
              Send Message
            </button>
          </form>
        </div>
      </Fade>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/mohamed-sayed-abdalaal/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
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
