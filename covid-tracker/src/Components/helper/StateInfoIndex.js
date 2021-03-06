import React from "react";
import "../../CSS/StateInfo.css";

const StateInfoIndex = ({ info, statePic }) => {
  return (
    <>
      <ul className="stateInfoUl">
        <li>
          <h1 className="stateName">{info.name}</h1>
        </li>
        <img
          className="statePic"
          src={statePic}
          alt="state image"
          width="500"
        />
        <p className="govtsites">Official Government Websites:</p>

        <div className="webContainer">
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
        </div>
        <details>
          <summary>Sources</summary>
          <p>{info.notes}</p>
        </details>
      </ul>
    </>
  );
};

export default StateInfoIndex;
