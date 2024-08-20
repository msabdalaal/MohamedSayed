import { useEffect } from "react";
import { projects } from "../projectsData";
const styles = {
  skill: "p-2 rounded-md bg-[#9993] text-[#666] font-bold text-center",
};
export default function ProjectPage() {
  const { pathname } = location;
  const id = +pathname.split("/")[3].split("%")[0];
  console.log(id);
  const project = projects[id];

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <section
        className={`h-screen mt-[88px]  flex flex-col justify-center items-center`}
        id="home"
      >
        <div className="container flex flex-col text-center px-4 md:px-0 gap-8 md:gap-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.5] uppercase text-black">
            {project.title}
          </h1>
          <div className="flex justify-center">
            <p className="text-lg md:text-xl w-2/3">{project.description}</p>
          </div>
          <div className="">
            <a
              href={project.url}
              target="_blank"
              className="btn px-16 md:px-20 py-4"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>
      <section className="flex justify-center px-5 md:px-0 py-20">
        <div className="container flex">
          <div className=" flex flex-col items-center gap-10">
            <div className="project-details__showcase-img-cont">
              <img
                src={`/MohamedSayed${project.image}`}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="md:w-2/3 flex flex-col gap-14">
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Project Overview
                </h3>
                <p className="text-[#333]">{project.overView}</p>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl md:text-3xl font-bold">Tools Used</h3>
                <div className="flex gap-5 flex-wrap">
                  {project.technologies.map((tech) => {
                    return (
                      <span key={tech} className={styles.skill}>
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl md:text-3xl font-bold">See Live</h3>
                <div className="flex gap-5">
                  <a
                    href={project.url}
                    className="btn w-max px-10 py-4"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.github}
                    className="bg-white border-2 rounded-md border-[#7843E9] w-max px-10 py-4 font-bold text-lg"
                    target="_blank"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
