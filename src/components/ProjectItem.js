import React from "react";

// Project Item component
export default function ProjectItem(props) {
  //map logo component
  const projectIcons = props.item.icon.map((icon) => {
    return (
      <button
        class="btn icon-circle"
        type="button"
        onClick={() => {
          window.open(icon.link, "_blank");
        }}
      >
        {icon.logo.includes("fa-") ? (
          <i class={icon.logo}></i>
        ) : (
          <ion-icon name={icon.logo}></ion-icon>
        )}
      </button>
    );
  });

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

          <div class="project-icons">{projectIcons}</div>
          {/* Project Icons End*/}
        </div>
      </div>
    </div>
  );
}
