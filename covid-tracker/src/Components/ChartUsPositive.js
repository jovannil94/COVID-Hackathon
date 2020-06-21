import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../CSS/Chart.css";

const ChartUsPositive = ({ usHistory }) => {
  const [chartData, setChartData] = useState({});

  let date = [];
  let positiveArr = [];

  const getChartInfo = () => {
    for (const object of usHistory) {
      date.push(object.date);
      positiveArr.push(object.positive);
    }
  };
  useEffect(() => {
    getChartInfo();
    setChartData({
      labels: date.reverse(),
      datasets: [
        {
          label: "Total Positive Cases This Month",
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          data: positiveArr.reverse(),
        },
      ],
    });
  }, [usHistory]);

  return (
    <>
      <div className="chartEach">
        <Line data={chartData} />
      </div>
    </>
  );
};

export default ChartUsPositive;
