import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";
import "../CSS/Chart.css";

const Chart = ({ stateHistory }) => {
  const [chartData, setChartData] = useState({});

  let date = [];
  let deathsArr = [];

  console.log(stateHistory);

  const getChartInfo = () => {
    for (const object of stateHistory) {
      date.push(object.date);
      deathsArr.push(object.death);
    }
  };

  useEffect(() => {
    getChartInfo();
    setChartData({
      labels: date.reverse(),
      datasets: [
        {
          label: "Total Deaths This Month",
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          data: deathsArr.reverse(),
        },
      ],
      
    });
  }, [stateHistory]);

  return (
    <>
      <div className="chartEach">
        <Line data={chartData} />
      </div>
    </>
  );
};

export default Chart;
