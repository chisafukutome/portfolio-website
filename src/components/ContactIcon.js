import React from "react";

// Contact Icon component
export default function ContactIcon(props) {
  return props.item.iconName == "mail" ? (
    //send an email to me
    <button
      className="btn icon-circle"
      type="button"
      onClick={() => (window.location.href = `mailto:${props.item.iconLink}`)}
    >
      <ion-icon name={props.item.iconName}></ion-icon>
    </button>
  ) : (
    <button
      className="btn icon-circle"
      type="button"
      //link for external website
      onClick={() => {
        window.open(props.item.iconLink, "_blank");
      }}
    >
      <ion-icon name={props.item.iconName}></ion-icon>
    </button>
  );
}
