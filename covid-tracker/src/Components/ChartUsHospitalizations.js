import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../CSS/Chart.css";

const ChartUsHospitalizations = ({ usHistory }) => {
  const [chartData, setChartData] = useState({});

  let date = [];
  let hospitalArr = [];

  const getChartInfo = () => {
    for (const object of usHistory) {
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
          label: "Total Hospitalizations This Month",
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          data: hospitalArr.reverse(),
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

export default ChartUsHospitalizations;
