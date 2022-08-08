import React from "react";
import ToggleMode from "./ToggleMode";

function Navbar({ darkModeStatus }) {
  return (
    <nav className="p-3 m-3 d-flex justify-content-between align-items-center">
      <a className="navbar-brand" href="/">
        TodoApp
      </a>
      <ul className="list-unstyled">
        <li>
          <ToggleMode darkModeStatus={darkModeStatus} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
