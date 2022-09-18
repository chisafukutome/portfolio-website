import React from "react";

// Nav Item component
export default function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={`#${props.item.itemLink}`}>
        {props.item.itemName}
      </a>
    </li>
  );
}
