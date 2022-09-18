import React from "react";

// Contact Icon component
export default function ContactIcon(props) {
  return (
    <button
      className="btn icon-circle"
      type="button"
      //link for external website
      //   TODO: search how to do the send email
      onClick={() => {
        window.open(props.item.iconLink, "_blank");
      }}
    >
      <ion-icon name={props.item.iconName}></ion-icon>
    </button>
  );
}
