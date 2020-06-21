import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="footer">
        <NavLink exact to={"/about"}>
          About Covid Near US
        </NavLink>
        <NavLink to={"/bio"}>Team Bios</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
