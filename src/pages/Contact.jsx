import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Contact.css";
import { useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
export default function Contact({ visibleSection }) {
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
  return (
    <div id="contact" className="section contact">
      <h1>&lt;CONTACT_ME/&gt;</h1>
      <h2>I'm excited to learn about your project. Ready to get started?</h2>
      <div
        className={`contactForm ${
          visibleSection == "contact" && "showContact"
        }`}
        id="contactFrom"
      >
        <form
          action="https://formsubmit.co/edfc276360cae2a8feb9e48cff7f0b5a"
          method="POST"
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
          <div className={`thanks ${showThanksMessage && "showThanks"}`}>
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
          <button onClick={validateForm} type="button">
            Send Message
          </button>
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
