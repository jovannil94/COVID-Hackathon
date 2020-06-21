import React from "react";
import { NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import TestingSites from "./TestingSites";
import "../CSS/NavBar.css";
import logo from "../Images/ourLogo.png"

const NavBar = () => {
  return (
    <>
      <div>
        <nav>
        <img id="ourLogo" src={logo} alt="logo" />
          <NavLink exact to={"/"}>
            HomePage
          </NavLink>
          <NavLink to={"/testingsites"}>Testing Sites</NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
