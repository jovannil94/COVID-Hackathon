import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TotalUS from "./TotalUS";
import StatesSearch from "./StatesSearch";
import ourLogo from "../Images/ourLogo.png";
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
        <h1 className="header">
          Get the latest US Covid information in the US
        </h1>
        {/* <img src={ourLogo} alt="logo" /> */}
        <TotalUS fetchState={fetchState} />
      </div>
    </>
  );
};
export default HomePage;
