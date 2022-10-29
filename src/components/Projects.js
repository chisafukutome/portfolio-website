import React from "react";
import ProjectButtons from "./ProjectButtons";
import ProjectItem from "./ProjectItem";
import projectData from "../data/projectData";

function Projects() {
  //map project item values into projectItem component
  const projectItems = projectData.map((item) => {
    return <ProjectItem key={item.id} item={item} />;
  });

  return (
    <section id="projects">
      <div class="projects-container">
        <div class="container section-container">
          <h2 class="section-title">Projects</h2>
          {/*<ProjectButtons />*/}
          <div class="row">{projectItems}</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
