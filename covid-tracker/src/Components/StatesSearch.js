import React, { useState } from "react";
import Chart from "./Chart";
import ChartHospital from "./ChartHospital";
import ChartPositive from "./ChartPositive";
import axios from "axios";
import StateInfoIndex from "./helper/StateInfoIndex";
import NewsIndex from "./helper/NewsIndex";
import "../CSS/StatesSearch.css";

const StatesSearch = () => {
  const [stateHistory, setStateHistory] = useState([]);
  const [positive, setPositive] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeaths] = useState([]);
  const [hospitalized, setHospitalized] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  const [stateInfo, setStateInfo] = useState([]);
  let allStates = [
    "al",
    "ak",
    "az",
    "ar",
    "ca",
    "co",
    "ct",
    "de",
    "fl",
    "ga",
    "hi",
    "id",
    "il",
    "in",
    "ia",
    "ks",
    "ky",
    "la",
    "me",
    "md",
    "ma",
    "mi",
    "mn",
    "ms",
    "mo",
    "mt",
    "ne",
    "nv",
    "nh",
    "nj",
    "nm",
    "ny",
    "nc",
    "nd",
    "oh",
    "ok",
    "or",
    "pa",
    "ri",
    "sc",
    "sd",
    "tn",
    "tx",
    "ut",
    "vt",
    "va",
    "wa",
    "wv",
    "wi",
    "wy",
  ];

  const populateSelect = allStates.map((state, i) => {
    return (
      <option key={i} value={state}>
        {" "}
        {state.toUpperCase()}
      </option>
    );
  });

  const fetchData = async (e) => {
    e.preventDefault();
    let chosenState = e.target.value;
    let chosenStateUC = chosenState.toUpperCase();
    try {
      let resStateCurrent = await axios.get(
        `https://covidtracking.com/api/v1/states/${chosenState}/current.json`
      );
      let resStateNews = await axios.get(
        `https://gnews.io/api/v3/search?q=coronavirus+gov+${chosenStateUC}&max=5&token=90a1d988b1cd61c30c70f0348f6b81d3`
      );
      let resStateHistory = await axios.get(
        `https://covidtracking.com/api/v1/states/${chosenState}/daily.json`
      );
      let resStateInfo = await axios.get(
        `https://covidtracking.com/api/v1/states/${chosenState}/info.json`
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

  return (
    <div>
      <form onChange={fetchData}>
        <select className="selectState">
          <option value="" hidden>
            Select A State
          </option>
          {populateSelect}
        </select>
      </form>
      <StateInfoIndex info={stateInfo} />
      <NewsIndex news={stateNews} />
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
