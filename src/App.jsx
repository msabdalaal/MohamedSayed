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
      let home = document.getElementById("home");
      let about = document.getElementById("about");
      let work = document.getElementById("work");
      let contact = document.getElementById("contact");
      if (
        home.getBoundingClientRect().top <
        window.innerHeight - window.innerHeight / 4
      ) {
        setVisibleSection("home");
      }
      if (
        about.getBoundingClientRect().top <
        window.innerHeight - window.innerHeight / 4
      ) {
        setVisibleSection("about");
      }
      if (
        work.getBoundingClientRect().top <
        window.innerHeight - window.innerHeight / 4
      ) {
        setVisibleSection("work");
      }
      if (
        contact.getBoundingClientRect().top <
        window.innerHeight - window.innerHeight / 4
      ) {
        setVisibleSection("contact");
      }
    });
  });
  document.body.addEventListener("touchmove", () => {
    let home = document.getElementById("home");
    let about = document.getElementById("about");
    let work = document.getElementById("work");
    let contact = document.getElementById("contact");
    if (home.getBoundingClientRect().top < window.innerHeight - 250) {
      setVisibleSection("home");
    }
    if (about.getBoundingClientRect().top < window.innerHeight - 250) {
      setVisibleSection("about");
    }
    if (work.getBoundingClientRect().top < window.innerHeight - 250) {
      setVisibleSection("work");
    }
    if (contact.getBoundingClientRect().top < window.innerHeight - 250) {
      setVisibleSection("contact");
    }
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
