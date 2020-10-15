import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Sarah
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="../../assets/SarahKerr.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          {/* <a href="#" data-target="slide-out" class="sidenav-trigger">
            <i class="material-icons menu">menu</i>
          </a> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
