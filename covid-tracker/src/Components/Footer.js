import React from "react";
import { NavLink } from "react-router-dom";
import { Whatsapp, Facebook, Linkedin, Twitter } from "react-social-sharing";
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
          <Twitter
            link="https://covidnearus.netlify.app/"
            title="Check out COVIDNearUS™ for the latest US Covid-19 tracking information"
          />
          <Linkedin
            link="https://covidnearus.netlify.app/"
            title="Check out COVIDNearUS™ for the latest US Covid-19 tracking information"
          />
          <Whatsapp
            link="https://covidnearus.netlify.app/"
            title="Check out COVIDNearUS™ for the latest US Covid-19 tracking information"
          />
          <Facebook
            link="https://covidnearus.netlify.app/"
            quote="Check out COVIDNearUS™ for the latest US Covid-19 tracking information"
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
