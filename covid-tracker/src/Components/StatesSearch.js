import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from "./helper/Charts/Chart";
import ChartHospital from "./helper/Charts/ChartHospital";
import ChartPositive from "./helper/Charts/ChartPositive";
import axios from "axios";
import StateInfoIndex from "./helper/StateInfoIndex";
import NewsIndex from "./helper/NewsIndex";
import "../CSS/StatesSearch.css";
import TwitterFeed from "./helper/TwitterFeed";

const StatesSearch = () => {
  const { chosen } = useParams();
  let APIKey = "90a1d988b1cd61c30c70f0348f6b81d3";
  let APIKey2 = "742e2d633e526b44485af3140a00513e";
  let APIKey3 = "c6cc132ae68d6116df690f260d4dcab0";
  let APIKey4 = "18fdea09268d21bac23da246c878d7af";
  let APIKey5 = "4a58e4dd760a890ec9da8ec1ba6f5270";
  let APIKey6 = "f173bb743037755f0aab662d21239731";
  const [stateHistory, setStateHistory] = useState([]);
  const [positive, setPositive] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeaths] = useState([]);
  const [hospitalized, setHospitalized] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  const [stateInfo, setStateInfo] = useState([]);

  const fetchData = async (state) => {
    let chosenStateLC = state.toLowerCase();
    let chosenState = state;
    try {
      let resStateCurrent = await axios.get(
        `https://covidtracking.com/api/v1/states/${chosenStateLC}/current.json`
      );
      let resStateNews = await axios.get(
        `https://gnews.io/api/v3/search?q=coronavirus+gov+${chosenState}&max=1&token=${APIKey6}`
      );

      let resStateHistory = await axios.get(
        `https://covidtracking.com/api/v1/states/${chosenStateLC}/daily.json`
      );
      let resStateInfo = await axios.get(
        `https://covidtracking.com/api/v1/states/${chosenStateLC}/info.json`
      );
      setPositive(resStateCurrent.data.positive.toLocaleString());
      setRecovered(resStateCurrent.data.recovered.toLocaleString());
      setDeaths(resStateCurrent.data.death.toLocaleString());
      setHospitalized(resStateCurrent.data.hospitalized.toLocaleString());
      setStateNews(resStateNews.data.articles);
      setStateHistory(resStateHistory.data.slice(0, 30));
      setStateInfo(resStateInfo.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (chosen.length > 0) {
      fetchData(chosen);
    }
  }, [chosen]);

  return (
    <div className="stateSearchMainDiv">
      <ul className="stateNumbers">
        <li className="usStatsli">
          <p className="usP">Positive:</p> {positive}
        </li>
        <li className="usStatsli">
          <p className="usP">Recovered:</p>
          {recovered}
        </li>
        <li className="usStatsli">
          <p className="usP">Hospitalized:</p> {hospitalized.toLocaleString()}
        </li>
        <li className="usStatsli">
          <p className="usP">Deaths:</p> {death}
        </li>
      </ul>

      <div className="stateInfoIdx">
        <StateInfoIndex info={stateInfo} />
      </div>

      <div className="chartStateDiv">
        <div className="chart statesCh">
          <ChartPositive stateHistory={stateHistory} />
          <Chart stateHistory={stateHistory} />
          <ChartHospital stateHistory={stateHistory} />
        </div>
      </div>

      <div className="stateNewsFeed">
        <TwitterFeed handle={stateInfo.twitter} />
        {/* <NewsIndex news={stateNews} /> */}
      </div>
    </div>
  );
};

export default StatesSearch;
