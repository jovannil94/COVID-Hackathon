import React from "react";
import "../../CSS/StateInfo.css";

const StateInfoIndex = ({ info }) => {
  return (
    <>
      <ul className="stateInfoUl">
        <li>
          <h1 className="stateName">{info.name}</h1>
        </li>
        Official Government Websites:
        <li className="websites" onClick={() => window.open(`${info.covid19Site}`)}>
          {info.covid19Site}
        </li>
        <li className="websites" onClick={() => window.open(`${info.covid19SiteSecondary}`)}>
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
