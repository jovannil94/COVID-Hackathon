import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";

const Chart = ({ stateHistory }) => {
  const [chartData, setChartData] = useState({});
  const labelsFont = "'Cabin', sans-serif";
  const labelsSize = 16;
  const labelsColor = '#8c8d8c';
  const ticksFont = "'Cabin'";
  const ticksColor = '#606060';

  //   -total hospitalizations
  //   -total poscases
  //   -total deaths
  //   -total icu
  //   -total recovered

  // const getChartInfo = async () => {
  //   let info = []
  //   try {
  //   //   let res = await axios.get(
  //   //     "https://covidtracking.com/api/v1/us/daily.json"
  //   //   );
  //   let res = await axios.get(
  //       "https://covidtracking.com/api/v1/states/ca/daily.json"
  //     );
  //       debugger;
  //     // console.log(typeof res.data) => obj

  //       info = res.data.slice(0,7).reverse()
  //       console.log(info, "info")
  let date = [];
  let deathsArr = [];

  
  console.log(stateHistory);
  
  const getChartInfo = () => {
    for(const object of stateHistory){
      date.push(object.date)
      deathsArr.push(object.death)
    }
  };
  useEffect(() => {
    getChartInfo();
    setChartData({
      labels: date.reverse(),
      datasets: [
        {
          label: "Total US Deaths by Week",
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          data: deathsArr,
        },
      ],
    });
  }, [stateHistory]);
  


  return (
    
    <>
      <div className="chart">
      <Line data={chartData} />
      </div>
    </>
  );
};

export default Chart;
