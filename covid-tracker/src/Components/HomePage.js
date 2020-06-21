import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import TotalUS from "./TotalUS";
import StatesSearch from "./StatesSearch";
import ourLogo from "../Images/ourLogo.png";
import "../CSS/HomePage.css";

const HomePage = () => {
  // const [selectedState, setselectedState] = useState([]);
const history = useHistory()
const stateRedirect = chosen => history.push(`/${chosen}`)

  const fetchState = (chosen) =>{
    debugger
    // setselectedState(chosen)
    stateRedirect(chosen)
  }

  return (
    <>
      <div className="homeDivMain">

      <img src={ourLogo} alt="logo"/>
      <h1 className="header">Get The Latest US Covid Information in the US</h1>
      <TotalUS fetchState={fetchState} />
      {/* <StatesSearch selectedState={selectedState} /> */}


      </div>
    </>
  );
};
export default HomePage;
