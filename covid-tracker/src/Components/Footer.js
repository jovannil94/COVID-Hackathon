import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <NavLink exact to={"/about"}>About Covid Near Us</NavLink>
        <NavLink to={"/bio"}>Team Bio's</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
