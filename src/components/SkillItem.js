import React from "react";

// Skill Item component
export default function Skilltem(props) {
  //map logo component
  const logoItems = props.item.logo.map((logo) => {
    //checks if the logo contains substring 'fa-'
    if (logo.includes("fa-")) {
      return <i class={`${logo} skill-icon`}></i>;
    }
    return <ion-icon name={logo} className="skill-icon"></ion-icon>;
  });
  return (
    <div className="col-lg-4 col-md-6 skill-item">
      <h6>{props.item.genre}</h6>
      <div className="skill-title">
        <h5 className="skill-name">{props.item.skill}</h5>
        <div className="skill-icons">
          {/*renderes logo */}
          {logoItems}
          {/* For spacing purpose */}
          <ion-icon name="logo-java" className="skill-icon"></ion-icon>
        </div>
      </div>
      <p>{props.item.description}</p>
    </div>
  );
}
