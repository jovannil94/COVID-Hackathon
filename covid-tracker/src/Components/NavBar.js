import React from "react";
import { NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import TestingSites from "./TestingSites";
import "../CSS/NavBar.css";
import logo from "../Images/ourLogo.png";

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="navNarnav">
          <img id="ourLogo" src={logo} alt="logo" />
          <div className="navBarLinks">
            <NavLink className="navBarLinks" exact to={"/"}>
              HomePage
            </NavLink>
            <NavLink className="navBarLinks" to={"/testingsites"}>Testing Sites</NavLink>
            <NavLink to={"/state"}></NavLink>
          </div>{" "}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
