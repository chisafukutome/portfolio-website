import React from "react";

// Project button component
export default function ProjectButtons(props) {
  //fix the carousel button
  return (
    <div class="projects-buttons row">
      <div class="col-lg-5"></div>
      <button
        class="view-github btn col-lg-2"
        type="button"
        onclick="window.location.href='https://github.com/chisafukutome';"
      >
        View My GitHub
        <ion-icon name="logo-github"></ion-icon>
      </button>
      <div class="col-lg-1"></div>
      {/* Scroll Buttons */}
      <div class="col-lg-4">
        <div class="scroll-buttons">
          <button
            class="btn icon-scroll carousel-control-prev"
            type="button"
            data-target="#carouselExampleInterval"
            data-slide="prev"
          >
            <ion-icon name="arrow-round-back"></ion-icon>
          </button>
          <button
            class="btn icon-scroll carousel-control-next"
            type="button"
            data-target="#carouselExampleInterval"
            data-slide="next"
          >
            <ion-icon name="arrow-round-forward"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
