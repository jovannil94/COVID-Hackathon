import React from "react";
import axios from "axios";
import TotalUS from "./TotalUS";
import StatesSearch from "./StatesSearch";
import ourLogo from "../Images/ourLogo.png";
import "../CSS/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="homeDivMain">
      <img src={ourLogo} alt="logo"/>
      <h1 className="header">Get The Latest US Covid Information in the US</h1>

        <TotalUS />
        <StatesSearch />
      </div>
    </>
  );
};
export default HomePage;
