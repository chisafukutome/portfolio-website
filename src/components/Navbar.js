import React from "react";
import NavItem from "./NavItem";
import navData from "../data/navData";

function Navbar() {
  //map nav item values into navItem component
  const navItems = navData.map((item) => {
    return <NavItem key={item.id} item={item} />;
  });

  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="#title">
          CHISA FUKUTOME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="material-icons"> menu </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* render all of nav items */}
          <ul className="navbar-nav ml-auto">{navItems}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
