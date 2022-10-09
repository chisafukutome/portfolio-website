import React from "react";
import SkillItem from "./SkillItem";
import skillData from "../data/skillData";

// Skill section
export default function Skills() {
  //map skill item values into SkillItem component
  const skillItems = skillData.map((item) => {
    return <SkillItem key={item.id} item={item} />;
  });

  return (
    <section id="skills">
      <div className="skills-container">
        <div className="container section-container">
          <h2 className="section-title">Skills</h2>
          {/* A Skill (row start)*/}
          <div className="row">{skillItems}</div>
          {/* End A Skill (row end) */}
        </div>
      </div>
    </section>
  );
}
