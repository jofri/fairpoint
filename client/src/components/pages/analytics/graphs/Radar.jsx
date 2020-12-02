import React, {useState, useEffect}  from 'react';
import {Radar} from 'react-chartjs-2';


function Radarchart () {

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
    title:{
      display: true,
      text: 'Your Interest'
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        boxWidth: 10
      }
    }
  };

  useEffect(() => {
    radarchart();
  }, []);

  return (
    <>
      <div className="barchart-container">
        <Radar data={chartData} options={options}/>
      </div>
    </>
  );
}

export default Radarchart;