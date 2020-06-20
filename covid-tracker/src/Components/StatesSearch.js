import React, { useState } from "react";
import axios from "axios";

const StatesSearch = () => {
  // const [stateStats, setStateStats] = useState({});
  const [positive, setPositive] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeaths] = useState([]);
  const [hospitalized, setHospitalized] = useState([]);
  const [stateNews, setStateNews] = useState([]);
  let allStates = ['al','ak','az','ar','ca','co','ct','de','fl','ga','hi','id','il','in','ia','ks','ky','la','me','md','ma','mi','mn','ms','mo','mt','ne','nv','nh','nj','nm','ny','nc','nd','oh','ok','or','pa','ri','sc','sd','tn','tx','ut','vt','va','wa','wv','wi','wy']

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
    let choosenState = e.target.value;
    let choosenStateUC= choosenState.toUpperCase();
    try {
      let res = await axios.get(`https://covidtracking.com/api/v1/states/${choosenState}/current.json`);
      let res2 = await axios.get(`https://gnews.io/api/v3/search?q=coronavirus+gov+${choosenStateUC}&max=5&token=90a1d988b1cd61c30c70f0348f6b81d3`);
      setPositive(res.data.positive);
      setRecovered(res.data.recovered);
      setDeaths(res.data.death);
      setHospitalized(res.data.hospitalized);
      setStateNews(res2.data.articles)
    } catch (error) {
      console.log(error)
    }
  }

  // const info = () => {
  //   debugger
  //   for(const dataObject of stateStats) {
  //     return (<li>Date{dataObject.date}</li>)
  //   }
  // }

  // const info = stateStats.map((el, i) => {
  //   debugger
  //   return (
  //       <div key={i}>
  //         <li>Date{el.date}</li>
  //         <li>Positive{el.positive}</li>
  //         <li>Recovered{el.recovered}</li>
  //         <li>hospitalizedCurrently{el.hospitalizedCurrently}</li>
  //         <li> death{el.death}</li>
  //       </div>
  //   )
  // })

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
    </div>
  );
};
export default StatesSearch;
