import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import './Bar.css';

function Barchart () {

  const [chartData, setChartData] = useState({});

  const barchart = () => {
    setChartData({
      type: 'horizontalBar',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850'],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        responsive: true,
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });
  };

  useEffect(() => {
    barchart();
  }, []);

  return (
    <>
      <Bar data={chartData}/>
    </>
  );
}


export default Barchart;