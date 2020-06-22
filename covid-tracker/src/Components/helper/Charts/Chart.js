import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../../../CSS/Chart.css";

const Chart = ({ stateHistory }) => {
  const [chartData, setChartData] = useState({});
  let date = [];
  let deathsArr = [];

  const fixDate = (number) => {
    const dateArr=[]
    const stringDate= number.toString()
    const year = parseInt(stringDate.slice(0,4));
    const month = parseInt(stringDate.slice(4,6));
    const day = parseInt(stringDate.slice(6));
    dateArr.push(year, month, day)
    let newDate = new Date(dateArr)
    return newDate.toLocaleDateString()
  }

  const getChartInfo = () => {
    for (const object of stateHistory) {
      let updatedDate = fixDate(object.date)
      date.push(updatedDate);
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
