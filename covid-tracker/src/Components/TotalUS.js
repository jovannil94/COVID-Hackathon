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
        <div key={i}>
          <li>Date{el.date}</li>
          <li>Positive{el.positive}</li>
          <li>Recovered{el.recovered}</li>
          <li>hospitalizedCurrently{el.hospitalizedCurrently}</li>
          <li> death{el.death}</li>
        </div>
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
