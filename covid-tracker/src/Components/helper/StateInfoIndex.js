import React from "react";

const StateInfoIndex = ({ info }) => {
  return (
    <div>
      <ul>
        <li>
          <h1>{info.name}</h1>
        </li>
        Websites:
        <li onClick={() => window.open(`${info.covid19Site}`)}>
          {info.covid19Site}
        </li>
        <li onClick={() => window.open(`${info.covid19SiteSecondary}`)}>
          {info.covid19SiteSecondary}
        </li>
        <details>
        <summary>Sources</summary>
          <p>{info.notes}</p>
        </details>
      </ul>
    </div>
  );
};

export default StateInfoIndex;
