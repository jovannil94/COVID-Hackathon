import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../CSS/Chart.css";

const ChartUsDeaths = ({ usHistory }) => {
  const [chartData, setChartData] = useState({});

  let date = [];
  let deathArr = [];

  const getChartInfo = () => {
    
    for (const object of usHistory) {
      date.push(object.date);
      deathArr.push(object.death);
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
          data: deathArr.reverse(),
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

export default ChartUsDeaths;
