import React, {useState, useEffect}  from 'react';
import {Radar} from 'react-chartjs-2';


function Radarchart (props) {

  const [chartData, setChartData] = useState({});

  const radarchart = () => {
    setChartData({
      labels: ['BUSINESS', 'TECH','ENTERTAINMENT', 'SCIENCE', 'SPORTS', 'HEALTH'],
      datasets: [
        {
          label: 'Categories',
          data: [10, 20, 5, 30, 10, 10],
        }
      ]
    });
  };

  const options = {
    responsive: true,
    mainAspectRatio: true,
    title:{
      display: true,
      text: 'Your Interest'
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        boxWidth: 10,
        fontSize: 13
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top:0,
          bottom:0
        }
      }
    }
  };

  useEffect(() => {
    radarchart();
  }, []);

  return (
    <>
      <Radar data={chartData} options={options}/>
    </>
  );
}

export default Radarchart;