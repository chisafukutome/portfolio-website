import React from "react";

// Project Item component
export default function ProjectItem(props) {
  return (
    <div class="card-container col-lg-4 col-md-6">
      <div class="project-card card">
        <img
          src={`/assets/projectImage/${props.item.imgSrc}`}
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">{props.item.projectName}</h5>
          <p class="card-text">{props.item.description}</p>
          <hr />
          <p>
            Time: {props.item.start} - {props.item.end}
          </p>
          <p>Lauguages: {`${props.item.language}`}</p>
          {/* Project icons */}
          {/*TODO: make its own component for button*/}
          <div class="project-icons">
            <button
              class="btn icon-circle"
              type="button"
              onclick="window.location.href='https://github.com/chisafukutome/caffeine-detector-project';"
            >
              <ion-icon name="logo-github"></ion-icon>
            </button>
            <button
              class="btn icon-circle"
              type="button"
              onclick="window.location.href='https://devpost.com/software/caffeineculator';"
            >
              <i class="fa-brands fa-dev"></i>
            </button>
            <button
              class="btn icon-circle"
              type="button"
              onclick="window.location.href='https://caffeineculator.pythonanywhere.com/';"
            >
              <i class="fa-solid fa-laptop"></i>
            </button>
          </div>
          {/* Project Icons End*/}
        </div>
      </div>
    </div>
  );
}
