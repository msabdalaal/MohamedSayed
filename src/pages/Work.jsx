import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/Work.css";
import projectsData from "../projectsData.jsx";
export default function Work({ visibleSection }) {
  let projects = projectsData.map((project) => {
    return (
      <div
        key={project.id}
        id={project.id}
        className={`project ${project.id % 2 == 0 ? "right" : "left"}`}
        onClick={() => window.open(project.url)}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className={`heading ${project.bright && "bright"}`}>
          <div className="text">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <a
            href={project.github}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    );
  });

  window.onload = () => {
    let projectsElements = document.querySelectorAll(".project");
    window.onscroll = () => {
      projectsElements.forEach((project) => {
        if (project.getBoundingClientRect().top < window.innerHeight - 250) {
          project.classList.add("visible");
        } else if (project.getBoundingClientRect().top > -100) {
          project.classList.remove("visible");
        }
      });
    };
    document.body.ontouchmove = () => {
      projectsElements.forEach((project) => {
        if (project.getBoundingClientRect().top < window.innerHeight - 250) {
          project.classList.add("visible");
        } else if (project.getBoundingClientRect().top > -100) {
          project.classList.remove("visible");
        }
      });
    };
  };
  return (
    <div id="work" className="section work">
      <h1>&lt;MY_WORK/&gt;</h1>
      <div className="projectsContainer">{projects}</div>
    </div>
  );
}
