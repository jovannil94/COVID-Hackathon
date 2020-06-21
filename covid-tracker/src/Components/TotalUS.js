import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/TotalUS.css";
import NewsIndex from "./helper/NewsIndex";
import TwitterFeed from "./helper/TwitterFeed";

const TotalUS = () => {
  let APIKey = "90a1d988b1cd61c30c70f0348f6b81d3";
  let APIKey2 = "742e2d633e526b44485af3140a00513e";
  let APIKey3 = "c6cc132ae68d6116df690f260d4dcab0";
  const [totals, setTotals] = useState([]);
  const [usNews, setUsNews] = useState([]);

  const getTotals = async () => {
    try {
      let response = await axios.get(
        `https://covidtracking.com/api/v1/us/current.json`
      );
      let resUSNews = await axios.get(
        `https://gnews.io/api/v3/search?q=coronavirus+gov+US&max=1&token=${APIKey3}`
      );

      let data = response.data;
      setTotals(data);
      setUsNews(resUSNews.data.articles);
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
    <div>
      <h2>Get The Latest US Covid Information in the US</h2>
      <div className="UStotalsMap">
        <div>
          <ul>{info}</ul>
        </div>
        <div className="usFeedNews">
          <NewsIndex news={usNews} />
          <TwitterFeed handle={"@CDCgov"} />
        </div>{" "}
      </div>
    </div>
  );
};

export default TotalUS;
