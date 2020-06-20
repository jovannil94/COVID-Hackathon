import React from "react";
import { NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import TestingSites from "./TestingSites";

const NavBar = () => {
  return (
    <>
      <div>
        <nav>
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
