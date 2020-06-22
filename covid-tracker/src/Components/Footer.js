import React from "react";
import { NavLink } from "react-router-dom";
import {
  Whatsapp,
  Facebook,
  Linkedin,
  Twitter,
  Google,
} from "react-social-sharing";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="footer">
        <NavLink className="navBarLinksFooter" exact to={"/about"}>
          About COVIDNearUS™
        </NavLink>
        <NavLink className="navBarLinksFooter" exact to={"/bio"}>
          Meet the Team
        </NavLink>
        <div className="shareSocial">
          <p>Share: </p>
          <Twitter link="https://covidnearus.netlify.app/" />
          <Google link="https://covidnearus.netlify.app/" />
          <Linkedin link="https://covidnearus.netlify.app/" />
          <Whatsapp link="https://covidnearus.netlify.app/" />
          <Facebook link="https://covidnearus.netlify.app/" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
