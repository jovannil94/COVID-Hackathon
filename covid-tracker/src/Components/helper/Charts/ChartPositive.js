import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const ChartPositive = ({ stateHistory }) => {
  const [chartData, setChartData] = useState({});
  // const labelsFont = "'Cabin', sans-serif";
  // const labelsSize = 16;
  // const labelsColor = "#8c8d8c";
  // const ticksFont = "'Cabin'";
  // const ticksColor = "#606060";
  let date = [];
  let posArr = [];

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
      posArr.push(object.positive);
    }
  };

  useEffect(() => {
    getChartInfo();
    setChartData({
      labels: date.reverse(),
      datasets: [
        {
          label: "Positive Cases This Month",
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          data: posArr.reverse(),
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
