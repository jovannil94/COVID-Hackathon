import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/TotalUS.css";
import usMap from "../Images/usMap.png";
import NumberFormat from "react-number-format";

const TotalUS = () => {
  const [totals, setTotals] = useState([]);

  const getTotals = async () => {
    try {
      let response = await axios.get(
        `https://covidtracking.com/api/v1/us/current.json`
      );

      let data = response.data;
      setTotals(data);
    } catch (error) {
      console.log(error);
    }
  };

  // <li>Date: <NumberFormat value={el.date} displayType={'text'} thousandSeparator={true}/></li>

  const info = totals.map((el, i) => {
    return (
      <div className="usTotalsDiv" key={i}>
        <li className="usStatsli">
          <p className="usP">Date:</p> {el.date}
        </li>
        <li className="usStatsli">
          <p className="usP">Positive:</p>
          {el.positive.toLocaleString()}
        </li>
        <li className="usStatsli">
          <p className="usP">Recovered:</p> {el.recovered.toLocaleString()}
        </li>
        <li className="usStatsli">
          <p className="usP">Hospitalized:</p> {el.hospitalized.toLocaleString()}
        </li>
        <li className="usStatsli">
          <p className="usP">Deaths:</p>
          {el.death.toLocaleString()}
        </li>
      </div>
    );
  });
  useEffect(() => {
    getTotals();
  }, []);

  return (
    <div className="UStotalsMap">
      <div>
        <ul>{info}</ul>
      </div>
      <div id="homeImageDiv">
        <img src={usMap} alt="US map" />
      </div>
    </div>
  );
};

export default TotalUS;
