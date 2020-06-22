import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TotalUS from "./TotalUS";
// import ourLogo from "../Images/ourLogo.png";
import "../CSS/HomePage.css";

const HomePage = () => {
  const history = useHistory();
  const stateRedirect = (chosen) => history.push(`/${chosen}`);

  const fetchState = (chosen) => {
    stateRedirect(chosen);
  };

  return (
    <>
      <div className="homeDivMain">
        <h1 className="header">Get The Latest US Covid Information</h1>
        <TotalUS fetchState={fetchState} />
      </div>
    </>
  );
};
export default HomePage;
