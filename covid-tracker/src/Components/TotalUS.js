import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/TotalUS.css";
import NewsIndex from "./helper/NewsIndex";
import TwitterFeed from "./helper/TwitterFeed";
import MapChart from "./MapChart";

const TotalUS = ({fetchState}) => {
  let APIKey = "90a1d988b1cd61c30c70f0348f6b81d3";
  let APIKey2 = "742e2d633e526b44485af3140a00513e";
  const [totals, setTotals] = useState([]);
  const [usNews, setUsNews] = useState([]);

  const getTotals = async () => {
    try {
      let response = await axios.get(
        `https://covidtracking.com/api/v1/us/current.json`
      );
      let resUSNews = await axios.get(
        `https://gnews.io/api/v3/search?q=coronavirus+gov+US&max=5&token=${APIKey2}`
      ); 
      let data = response.data;
      setTotals(data);
      setUsNews(resUSNews.data.articles)
    } catch (error) {
      console.log(error);
    }
  };

  const info = totals.map((el, i) => {
    return (
      <div className="usTotalsDiv" key={i}>
        <h1 className="usStatsli">Current US Totals</h1>
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
          <p className="usP">Hospitalized:</p>{" "}
          {el.hospitalized.toLocaleString()}
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
      <div className="info">
        <ul>{info}</ul>
      </div>
      <div className="interactiveMap">
        <MapChart fetchState={fetchState}/>
      </div>
      {/* <NewsIndex news={usNews}/> */}
      <TwitterFeed handle={"@CDCgov"}/>
    </div>
  );
};

export default TotalUS;
