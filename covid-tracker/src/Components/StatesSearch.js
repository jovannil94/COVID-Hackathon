import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import ChartHospital from "./ChartHospital";
import ChartPositive from "./ChartPositive";
import axios from "axios";
import StateInfoIndex from "./helper/StateInfoIndex";
import NewsIndex from "./helper/NewsIndex";
import "../CSS/StatesSearch.css";
import TwitterFeed from "./helper/TwitterFeed";

const StatesSearch = ({selectedState}) => {
  let APIKey = "90a1d988b1cd61c30c70f0348f6b81d3";
  let APIKey2 = "742e2d633e526b44485af3140a00513e";
  let APIKey3 = "c6cc132ae68d6116df690f260d4dcab0";
  let APIKey4 = "18fdea09268d21bac23da246c878d7af";
  const [stateHistory, setStateHistory] = useState([]);
  const [positive, setPositive] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeaths] = useState([]);
  const [hospitalized, setHospitalized] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  const [stateInfo, setStateInfo] = useState([]);

  const fetchData = async (state) => {
    let chosenStateLC = state.toLowerCase();
    let chosenState = state
    debugger
    try {
      let resStateCurrent = await axios.get(
        `https://covidtracking.com/api/v1/states/${chosenStateLC}/current.json`
      );
      let resStateNews = await axios.get(
        `https://gnews.io/api/v3/search?q=coronavirus+gov+${chosenState}&max=5&token=${APIKey4}`
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
      setStateHistory(resStateHistory.data.slice(0, 7));
      setStateInfo(resStateInfo.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedState.length > 0) {
      fetchData(selectedState)
    }
  }, [selectedState])

  return (
    <div className="stateSearchMainDiv">
      <StateInfoIndex info={stateInfo}/>
      <NewsIndex news={stateNews}/>
      <TwitterFeed handle={stateInfo.twitter}/>
      <ul>
        <li>Positive: {positive}</li>
        <li>Recovered: {recovered}</li>
        <li>Hospitalized: {hospitalized.toLocaleString()}</li>
        <li>Death: {death}</li>
      </ul>
      <div className="chart">
        <Chart stateHistory={stateHistory} />
        <ChartHospital stateHistory={stateHistory} />
        <ChartPositive stateHistory={stateHistory} />
      </div>
    </div>
  );
};

export default StatesSearch;
