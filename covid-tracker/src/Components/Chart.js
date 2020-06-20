import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";

const Chart = ({ stateHistory }) => {
  const [chartData, setChartData] = useState({});

  //   -total hospitalizations
  //   -total poscases
  //   -total deaths
  //   -total icu
  //   -total recovered

  // const getChartInfo = async () => {
  //   let info = []
  //   try {
  //   //   let res = await axios.get(
  //   //     "https://covidtracking.com/api/v1/us/daily.json"
  //   //   );
  //   let res = await axios.get(
  //       "https://covidtracking.com/api/v1/states/ca/daily.json"
  //     );
  //       debugger;
  //     // console.log(typeof res.data) => obj

  //       info = res.data.slice(0,7).reverse()
  //       console.log(info, "info")
  let date = [];
  let deathsArr = [];
  const getChartInfo = () => {
    debugger;
    stateHistory.map((state, i) => {
      date.push(state.date);
      deathsArr.push(state.death);
    });
  };

  console.log(stateHistory);

  useEffect(() => {
    getChartInfo();
    setChartData({
      labels: date,
      datasets: [
        {
          label: "Total US Deaths by Week",
          data: deathsArr,
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        },
      ],
    });
  }, []);

  return (
    <>
      <div className="chart">
        <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
};

export default Chart;
