import React, { useState } from "react";
import TotalUS from "./TotalUS";
import StatesSearch from "./StatesSearch";

import "../CSS/HomePage.css";

const HomePage = () => {
  const [selectedState, setselectedState] = useState([]);

  const fetchState = (chosen) =>{
    setselectedState(chosen)
  }

  return (
    <>
      <div className="homeDivMain">
        <TotalUS fetchState={fetchState} />
        <StatesSearch selectedState={selectedState} />
      </div>
    </>
  );
};
export default HomePage;
