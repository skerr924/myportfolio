import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const relPrefixPDF = process.env.PUBLIC_URL + "/assets/pdfs/";

export default (props) => {
  const closeMenu = () => document.querySelector(".closeMenu").click();
  return (
    // Pass on our props
    <Menu {...props} overlayClassName={"closeMenu"}>
      <Link className="menu-item" to="/" onClick={closeMenu}>
        Home
      </Link>

      <Link
        className="menu-item"
        to={relPrefixPDF + "SarahKerr.pdf"}
        target="_blank"
        onClick={closeMenu}
      >
        Resume
      </Link>

      <Link className="menu-item" to="/portfolio" onClick={closeMenu}>
        Portfolio
      </Link>
    </Menu>
  );
};

// // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function MobileNavBar() {
//   return (
//     <ul id="slide-out" className="sidenav">
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/resume">Resume</Link>
//       </li>
//       <li>
//         <Link to="/portfolio">Portfolio</Link>
//       </li>
//     </ul>
//   );
// }
