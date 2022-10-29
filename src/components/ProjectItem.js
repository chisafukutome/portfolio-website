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
    <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div class="project-card card">
        <img
          src={`/assets/projectImage/${props.item.imgSrc}`}
          class="card-img-top"
        />
        <div class="card-body overflow-auto">
          <h5 class="card-title">{props.item.projectName}</h5>
          <div class="card-text">
            <p>{props.item.description}</p>
          </div>
          <hr />
          <p>
            Time: {props.item.start} - {props.item.end}
          </p>
          <p>Lauguages: {`${props.item.language}`}</p>
        </div>
        {/* Project icons */}

        <div class="project-icons card-footer bg-white">{projectIcons}</div>
        {/* Project Icons End*/}
      </div>
    </div>
  );
}
