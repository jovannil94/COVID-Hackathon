import React, { useState } from "react";
import Chart from "./Chart";
import axios from "axios";

const StatesSearch = () => {
  const [stateHistory, setStateHistory] = useState([]);
  const [positive, setPositive] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeaths] = useState([]);
  const [hospitalized, setHospitalized] = useState([]);
  const [stateNews, setStateNews] = useState([]);
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
      // debugger;

      setPositive(resStateCurrent.data.positive);
      setRecovered(resStateCurrent.data.recovered);
      setDeaths(resStateCurrent.data.death);
      setHospitalized(resStateCurrent.data.hospitalized);
      setStateNews(resStateNews.data.articles);
      setStateHistory(resStateHistory.data.slice(0, 7));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onChange={fetchData}>
        <select>
          <option value="" hidden>
            Select A State
          </option>
          {populateSelect}
        </select>
        StatesSearch
      </form>
      <ul>
        <li>Positive: {positive}</li>
        <li>Recovered: {recovered}</li>
        <li>Hospitalized: {hospitalized}</li>
        <li>Death: {death}</li>
      </ul>
      <Chart stateHistory={stateHistory} />
    </div>
  );
};
export default StatesSearch;
