import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";

const ChartHospital = ({ stateHistory }) => {
  const [chartData, setChartData] = useState({});
  const labelsFont = "'Cabin', sans-serif";
  const labelsSize = 16;
  const labelsColor = "#8c8d8c";
  const ticksFont = "'Cabin'";
  const ticksColor = "#606060";

  let date = [];
  let hospitalArr = [];

  console.log(stateHistory);

  const getChartInfo = () => {
    for (const object of stateHistory) {
      date.push(object.date);
      hospitalArr.push(object.hospitalizedCurrently);
    }
  };
  useEffect(() => {
    getChartInfo();
    setChartData({
      labels: date.reverse(),
      datasets: [
        {
          label: "Hospitalized Currently by Week",
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          data: hospitalArr,
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

export default ChartHospital;
