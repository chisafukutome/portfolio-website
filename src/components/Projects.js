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
          <ProjectButtons />
          {/* Carousel */}
          <div
            id="carouselExampleInterval"
            class="project-carousel carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <div class="carousel-inner">
              {/* Carousel Item */}
              <div class="carousel-item active">
                <div class="row">{projectItems}</div>
              </div>
              {/* Carousel Item End */}
              {/* COPY START: Carousel Item */}
              {/* <div class="carousel-item">
                <div class="row"> */}
              {/* card */}
              {/* <div class="card-container col-lg-4 col-md-6">
                    <div class="project-card card">
                      <img src="/assets/nigiripic.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title">Project Name1</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <hr />
                        <p>Time: 4/30/22 - 5/30/22</p>
                        <p>Languages: Python, HTML, CSS</p>
                        <a href="#" class="btn btn-primary">GitHub</a>
                      </div>
                    </div>
                  </div> */}
              {/* card */}
              {/* <div class="card-container col-lg-4 col-md-6">
                    <div class="project-card card">
                      <img src="/assets/to_watch.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <hr />
                        <p>Time: 4/30/22 - 5/30/22</p>
                        <p>Languages: Python, HTML, CSS</p>
                        <a href="#" class="btn btn-primary">GitHub</a>
                      </div>
                    </div>
                  </div> */}
              {/* card */}
              {/* <div class="card-container col-lg-4 col-md-6">
                    <div class="project-card card">
                      <img src="/assets/nigiripic.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title">Project Name</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <hr />
                        <p>Time: 4/30/22 - 5/30/22</p>
                        <p>Languages: Python, HTML, CSS</p>
                        <a href="#" class="btn btn-primary">GitHub</a>
                      </div>
                    </div>
                  </div> */}
              {/* card end */}
              {/* </div>
              </div> */}
              {/* COPY END: Carousel Item End */}
            </div>
          </div>
          {/* Carousel End */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
