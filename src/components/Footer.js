import React from "react";
import ContactIcon from "./ContactIcon";
import contactData from "../data/contactData";

function Footer() {
  //map contact icon values into contactIcon component
  const contactIcons = contactData.map((item) => {
    return <ContactIcon key={item.id} item={item} />;
  });
  return (
    <section id="footer">
      <div class="footer-container">
        <div class="container">
          <div class="footer-icons">{contactIcons}</div>
          <p>Made with ❤️ using Bootstrap & React</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
