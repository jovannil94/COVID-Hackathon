import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";

const ChartPositive = ({ stateHistory }) => {
  const [chartData, setChartData] = useState({});
  const labelsFont = "'Cabin', sans-serif";
  const labelsSize = 16;
  const labelsColor = "#8c8d8c";
  const ticksFont = "'Cabin'";
  const ticksColor = "#606060";

  let date = [];
  let posArr = [];

  console.log(stateHistory);

  const getChartInfo = () => {
    for (const object of stateHistory) {
      date.push(object.date);
      posArr.push(object.positive);
    }
  };
  useEffect(() => {
    getChartInfo();
    setChartData({
      labels: date.reverse(),
      datasets: [
        {
          label: "Positive Cases by Week",
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          data: posArr,
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

export default ChartPositive;
