import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../../../CSS/Chart.css";

const ChartUsPositive = ({ usHistory }) => {
  const [chartData, setChartData] = useState({});
  let date = [];
  let positiveArr = [];

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
    for (const object of usHistory) {
      let updatedDate = fixDate(object.date)
      date.push(updatedDate);
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
