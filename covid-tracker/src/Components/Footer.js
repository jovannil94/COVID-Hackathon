import React from "react";
import { NavLink } from "react-router-dom";
import { Whatsapp, Facebook, Linkedin, Twitter, Google } from 'react-social-sharing';
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="footer">
        <NavLink exact to={"/about"}>About Covid Near US</NavLink>
        <NavLink to={"/bio"}>Team Bios</NavLink>
        <div className="shareSocial">
          <p>Share: </p>
          <Twitter link="https://covidnearus.netlify.app/"/>
          <Google link="https://covidnearus.netlify.app/"/>
          <Linkedin link="https://covidnearus.netlify.app/"/>
          <Whatsapp link="https://covidnearus.netlify.app/"/>
          <Facebook link="https://covidnearus.netlify.app/"/>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
