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
  let APIKey7 = "c2061abca4fd3ab0e746b0f2ff238506";
  let apiKeys = [APIKey, APIKey2, APIKey3, APIKey3, APIKey4, APIKey5, APIKey6, APIKey7];

  const [stateHistory, setStateHistory] = useState([]);
  const [positive, setPositive] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeaths] = useState([]);
  const [hospitalized, setHospitalized] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  const [stateInfo, setStateInfo] = useState([]);

  const apiRotation = async(arr, chosenState)=>{
    let objectData
    for(let i=0; i<arr.length; i++){
      let token = arr[i]
      let resStateNews = await axios.get(`https://gnews.io/api/v3/search?q=coronavirus+gov+${chosenState}&max=3&token=${token}`);
      if(resStateNews !== undefined){
        objectData = resStateNews.data.articles
        return setStateNews(objectData)
      }
    }
  }

  const [statePic, setStatePic] = useState("");

    const getPic = (data) => {

      data.map((state, i) => {
        if (chosen === state.code) {
          setStatePic(state.landscape_background_url)
        }
      })

    }

  const fetchData = async (state) => {
    let chosenStateLC = state.toLowerCase();
    let chosenState = state;
    try {
      let resStateCurrent = await axios.get(`https://api.covidtracking.com/v1/states/${chosenStateLC}/current.json`);
      let resStateHistory = await axios.get(`https://api.covidtracking.com/v1/states/${chosenStateLC}/daily.json`);
      let resStateInfo = await axios.get(`https://api.covidtracking.com/v1/states/${chosenStateLC}/info.json`);
      let resStatePic = await axios.get("https://civilserviceusa.github.io/us-states/data/states.json");
      getPic(resStatePic.data)
      setStateHistory(resStateHistory.data.slice(0, 30));
      setStateInfo(resStateInfo.data);
      apiRotation(apiKeys, chosenState);
      setPositive(resStateCurrent.data.positive.toLocaleString());
      setRecovered(resStateCurrent.data.recovered.toLocaleString());
      setDeaths(resStateCurrent.data.death.toLocaleString());
      setHospitalized(resStateCurrent.data.hospitalized.toLocaleString());
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
        <StateInfoIndex statePic={statePic} info={stateInfo} />
      </div>

      <div className="chartStateDiv">
        <div className="chart statesCh">
          <ChartPositive stateHistory={stateHistory} />
          <Chart stateHistory={stateHistory} />
          <ChartHospital stateHistory={stateHistory} />
        </div>
      </div>

      <div className="stateNewsFeed">
        <div className="twitter">
          <p className="titleTwit">Twitter</p>
          <TwitterFeed handle={stateInfo.twitter} />
        </div>
        <div className="twitter">
          <p className="titleTwit">News</p>
          <NewsIndex news={stateNews} />
        </div>
      </div>
    </div>
  );
};

export default StatesSearch;
