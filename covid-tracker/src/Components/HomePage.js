import React from "react";
import axios from 'axios'
import TotalUS from './TotalUS'
import StatesSearch from "./StatesSearch";

const HomePage = () => {


  return (
    <>
      <div>Home Page
          <TotalUS/>
          <StatesSearch/>
      </div>
    </>
  );
};
export default HomePage;
