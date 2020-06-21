import React, { useState } from "react";
import TotalUS from "./TotalUS";
import StatesSearch from "./StatesSearch";
import ourLogo from "../Images/ourLogo.png";
import "../CSS/HomePage.css";

const HomePage = () => {
  const [selectedState, setselectedState] = useState([]);

  const fetchState = (chosen) =>{
    setselectedState(chosen)
  }

  return (
    <>
      <div className="homeDivMain">

      <img src={ourLogo} alt="logo"/>
      <h1 className="header">Get The Latest US Covid Information in the US</h1>
      <TotalUS fetchState={fetchState} />
      <StatesSearch selectedState={selectedState} />


      </div>
    </>
  );
};
export default HomePage;
