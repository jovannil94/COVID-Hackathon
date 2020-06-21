import React from "react";
import axios from "axios";
import TotalUS from "./TotalUS";
import StatesSearch from "./StatesSearch";

import "../CSS/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="homeDivMain">
       

        <TotalUS />
        <StatesSearch />
      </div>
    </>
  );
};
export default HomePage;
