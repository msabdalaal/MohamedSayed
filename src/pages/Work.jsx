import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/Work.css";
import projectsData from "../projectsData";
import { Fade } from "react-awesome-reveal";

export default function Work() {
  let projects = projectsData.map((project) => {
    return (
      <Fade
        key={project.id}
        direction={`${project.id % 2 == 0 ? "right" : "left"}`}
      >
        <div
          id={project.id}
          className={`project`}
          onClick={() => window.open(project.url)}
          style={{ backgroundImage: `url(/MohamedSayed/${project.image})` }}
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
      </Fade>
    );
  });

  return (
    <div id="work" className="section work">
      <h1>&lt;MY_WORK/&gt;</h1>
      <div className="projectsContainer">{projects}</div>
    </div>
  );
}
