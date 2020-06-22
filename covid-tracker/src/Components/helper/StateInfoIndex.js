import React, { useState } from "react";
import "../../CSS/StateInfo.css";
import axios from "axios";

const StateInfoIndex = ({ info, statePic }) => {
  return (
    <>
      <ul className="stateInfoUl">
        <li>
          <h1 className="stateName">{info.name}</h1>
        </li>
        <img className="statePic" src={statePic} alt="state image" width="500"/>
        <p className="govtsites">Official Government Websites:</p>

        <li
          className="websites"
          onClick={() => window.open(`${info.covid19Site}`)}
        >
          {info.covid19Site}
        </li>
        <li
          className="websites"
          onClick={() => window.open(`${info.covid19SiteSecondary}`)}
        >
          {info.covid19SiteSecondary}
        </li>
        <details>
          <summary>Sources</summary>
          <p>{info.notes}</p>
        </details>
      </ul>
    </>
  );
};

export default StateInfoIndex;
