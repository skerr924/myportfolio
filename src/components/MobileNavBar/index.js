import React from "react";
import { slide as Menu } from "react-burger-menu";
const relPrefixPDF = process.env.PUBLIC_URL + "/assets/pdfs/";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a
        className="menu-item"
        href={relPrefixPDF + "SarahKerr.pdf"}
        target="_blank"
      >
        Resume
      </a>

      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>
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
