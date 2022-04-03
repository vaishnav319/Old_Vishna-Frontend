import React from "react";
import ProjectsCard from "./utils/ProjectsCard";

const Projects = () => {
  return (
    <div>
      <div>
        <h1 className="lg:ml-16 text-5xl lg:mb-5 mt-5 text-center lg:text-left  ">
          Projects
        </h1>
        <div className="flex flex-wrap justify-around ">
          <div className="m-3">
            <ProjectsCard />
          </div>
          <div className="m-3">
            <ProjectsCard />
          </div>
          <div className="m-3">
            <ProjectsCard />
          </div>
          <div className="m-3">
            <ProjectsCard />
          </div>
          <div className="m-3">
            <ProjectsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
