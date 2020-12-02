import React, { useState, useEffect } from 'react';
import {Doughnut} from 'react-chartjs-2';
import './Doughnut.css';


function Doughnutchart () {

  const [chartData, setChartData] = useState({});
  const doughnutchart = () => {
    setChartData({
      labels: ['Guardian', 'Newsweek', 'BBC', 'Newyork Times', 'Daily Mail'],
      datasets: [
        {
          data: [30, 20, 15, 5, 10],
          backgroundColor: [
            '#F7464A',
            '#46BFBD',
            '#FDB45C',
            '#949FB1',
            '#5e75a8']
        }
      ],
      borderWidth: 0.5
    });
  };

  const options = {
    title:{
      display: true,
      text: 'No. of articles per publisher'
    },
    legend: {
      position: 'right',
      labels: {
        boxWidth: 10
      }
    }
  };

  useEffect(() => {
    doughnutchart();
  }, []);

  return (
    <>
      <div className="barchart-container">
        <Doughnut data={chartData} options={options}/>
      </div>
    </>
  );
}

export default Doughnutchart;