import { Link } from "react-router-dom";
import { projects } from "../projectsData";
export default function Projects() {
  const DisplayProjects = () => {
    return projects.map((project) => (
      <div className="md:grid grid-cols-2" key={project.id}>
        <div className="w-full">
          <div className="w-full top-6 relative overflow-hidden">
            <img
              src={`/MohamedSayed${project.image}`}
              className="w-[72%] top-[10%] left-[14%] object-cover absolute -z-10"
              alt=""
              loading="lazy"
            />
            <img
              src={`/MohamedSayed/template.png`}
              className="w-full h-full object-cover"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center md:text-left md:pl-16 flex flex-col justify-center items-center md:items-start gap-5 my-4">
          <h3 className="text-2xl font-bold">
            {project.title}
            <span
              className={`rounded-full text-sm ml-4 px-2 py-1 font-normal ${
                project.isPublished ? "bg-green-200" : "bg-gray-200"
              }`}
            >
              {project.isPublished ? "Published" : "Not Published"}
            </span>
          </h3>
          <p className="text-[#333]">{project.description}</p>
          <Link
            to={`/MohamedSayed/projects/${project.id}}`}
            className="btn w-max px-10 py-4"
          >
            Case Study
          </Link>
        </div>
      </div>
    ));
  };
  return (
    <section id="projects" className="flex justify-center py-20">
      <div className="container">
        <h2 className="flex flex-col justify-center items-center mb-10 md:mb-20">
          <span className="text-4xl md:text-5xl font-bold uppercase">
            Projects
          </span>
          <span className="w-6 h-1 bg-[#7843E9] rounded-lg my-5"></span>
          <span className="text-center md:text-xl md:w-2/3 text-[#555]">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </span>
        </h2>

        <div className="flex flex-col gap-5 md:gap-16">
          <DisplayProjects />
        </div>
      </div>
    </section>
  );
}
