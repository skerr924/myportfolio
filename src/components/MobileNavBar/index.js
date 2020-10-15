import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function MobileNavBar() {
  return (
    <ul id="slide-out" className="sidenav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </ul>
  );
}

export default MobileNavBar;
