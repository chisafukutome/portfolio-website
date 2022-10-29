import React from "react";
import ContactIcon from "./ContactIcon";
import contactData from "../data/contactData";

// Title section
export default function Title() {
  //map contact icon values into contactIcon component
  const contactIcons = contactData.map((item) => {
    return <ContactIcon key={item.id} item={item} />;
  });

  return (
    <section id="title">
      {/* Title */}
      <div className="container section-container">
        <div className="row heading section-divisor">
          <div className="heading-text col-lg-7">
            <h1 className="heading-title">Chisa Fukutome</h1>
            <i>A Software Development Student From Japan</i>
            <p className="heading-description">
              I'm a <font>Computing Technology and Software Development</font>
              student at Valencia College. I'm from Japan, and I help students
              with mathematics. I mainly use <font>Python and Java</font>, and I
              love to participate in Hackathon.
            </p>
            {/* Buttons */}
            <div className="heading-buttons">
              <button
                className="download-resume btn"
                type="button"
                onClick={() => {
                  window.open("../assets/Portfolio_Resume.pdf", "_blank");
                }}
                //TODO: search how to open pdf file when button is clicked.
              >
                View My Resume (.pdf)
              </button>
              <button
                className="learn-more btn"
                type="button"
                // TODO: Create a page of ABOUT
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/chisafukutome/",
                    "_blank"
                  );
                }}
              >
                Learn More About Me >>
              </button>
            </div>
            {/* Icons */}
            <div className="heading-icons">{contactIcons}</div>
          </div>
          <div className="col-lg-5">
            <img className="heading-img" src="assets/Chisa pic.JPEG" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
