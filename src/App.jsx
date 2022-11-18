import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";

function App() {
  let [visibleSection, setVisibleSection] = useState("home");
  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
      let about = document.getElementById("about");
      let work = document.getElementById("work");
      let contact = document.getElementById("contact");
      if (window.scrollY < about.offsetTop - window.innerHeight / 2) {
        setVisibleSection("home");
      }
      if (window.scrollY > about.offsetTop - window.innerHeight / 2) {
        setVisibleSection("about");
      }
      if (window.scrollY > work.offsetTop - window.innerHeight / 2) {
        setVisibleSection("work");
      }
      if (window.scrollY > contact.offsetTop - window.innerHeight / 2) {
        setVisibleSection("contact");
      }
    });
  });
  window.addEventListener("load", () => {
    document.body.addEventListener("touchmove", () => {
      let about = document.getElementById("about");
      let work = document.getElementById("work");
      let contact = document.getElementById("contact");
      if (window.scrollY < about.offsetTop - window.innerHeight / 2) {
        setVisibleSection("home");
      }
      if (window.scrollY > about.offsetTop - window.innerHeight / 2) {
        setVisibleSection("about");
      }
      if (window.scrollY > work.offsetTop - window.innerHeight / 2) {
        setVisibleSection("work");
      }
      if (window.scrollY > contact.offsetTop - window.innerHeight / 2) {
        setVisibleSection("contact");
      }
    });
  });
  return (
    <main>
      <NavBar visibleSection={visibleSection} />
      <Home />
      <About visibleSection={visibleSection} />
      <Work visibleSection={visibleSection} />
      <Contact visibleSection={visibleSection} />
    </main>
  );
}

export default App;
