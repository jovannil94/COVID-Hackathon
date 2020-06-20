import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";

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
