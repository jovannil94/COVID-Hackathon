import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/TotalUS.css";
import NewsIndex from "./helper/NewsIndex";
import TwitterFeed from "./helper/TwitterFeed";
import MapChart from "./MapChart";
import ChartUsHospitalizations from "./ChartUsHospitalizations";
import ChartUsPositive from "./ChartUsPositive";
import ChartUsDeaths from "./ChartsUsDeaths";

const TotalUS = ({ fetchState }) => {
  let APIKey = "90a1d988b1cd61c30c70f0348f6b81d3";
  let APIKey2 = "742e2d633e526b44485af3140a00513e";
  let APIKey3 = "c6cc132ae68d6116df690f260d4dcab0";
  let APIKey4 = "18fdea09268d21bac23da246c878d7af";
  const [totals, setTotals] = useState([]);
  const [usNews, setUsNews] = useState([]);
  const [usHistory, setUsHistory] = useState([]);

  const getTotals = async () => {
    try {
      let response = await axios.get(
        `https://covidtracking.com/api/v1/us/current.json`
      );
      let resUSNews = await axios.get(
        `https://gnews.io/api/v3/search?q=coronavirus+gov+US&max=5&token=${APIKey4}`
      );
      let resUSTotals = await axios.get(
        `https://covidtracking.com/api/v1/us/daily.json`
      );

      setUsHistory(resUSTotals.data.slice(0, 30));
      let data = response.data;
      setTotals(data);
      setUsNews(resUSNews.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const info = totals.map((el, i) => {
      const today = new Date(el.date)
      const day = ("0" + today.getDate()).slice(-2)
      const month = ("0" + (today.getMonth()+1)).slice(-2)
      const currDate = month + '/' + day + '/' + today.getFullYear()
    return (
      <div className="usTotalsDiv" key={i}>
        <h1 className="usStatsli">Current US Totals</h1>
        <li className="usStatsli">
    <p className="usP">Date:</p> {currDate}
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
      <div>
        <ChartUsHospitalizations usHistory={usHistory} />
        <ChartUsPositive usHistory={usHistory} />
        <ChartUsDeaths usHistory={usHistory} />
      </div>
      <div className="interactiveMap">
        <MapChart fetchState={fetchState} />
      </div>
      <div className="usFeedNews">
        {/* <NewsIndex news={usNews}/> */}
        <TwitterFeed handle={"@CDCgov"} />
      </div>
    </div>
  );
};

export default TotalUS;
