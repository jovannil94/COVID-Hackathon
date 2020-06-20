import React, { useState, useEffect } from "react";
import axios from "axios";

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

const info = totals.map((el, i) => {
    return (
        <>
    <li key={i}>Date{el.date}</li>
    <li key={i}>Positive{el.positive}</li>
    <li key={i}>Recovered{el.recovered}</li>
    <li key={i}>hospitalizedCurrently{el.hospitalizedCurrently}</li>
    <li key={i}> death{el.death}</li>
    </>
    )


})
useEffect(()=>{
    getTotals()
}, [])

  return( 
  <div className="totalUS">
      <ul >
    {info}
      </ul>

      Totals
  </div>);
};

export default TotalUS;
