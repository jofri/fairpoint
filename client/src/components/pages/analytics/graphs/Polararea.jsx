import React, {useEffect, useState} from 'react';
import {Polar} from 'react-chartjs-2';
import './Polararea.css';


function Polarchart () {

  const [chartData, setChartData] = useState({});
  const linechart = () => {
    setChartData({
      labels: ['Left', 'Right', 'Middle', 'Undefined' ],
      datasets: [
        {
          label: 'Stance',
          data: [18, 10, 15, 8],
          backgroundColor: [
            '#fc5185',
            '#3fc1c9',
            '#c4c4c4',
            '#eeeeee'
          ],
          borderWidth: 4
        }
      ]
    });
  };

  const options = {
    title:{
      display: true,
      text: 'Political stance'
    },
    legend: {
      position: 'right',
      labels: {
        boxWidth: 10
      }
    }
  };

  useEffect(() => {
    linechart();
  }, []);

  return (
    <>
      <div className="Polarchart-container">
        <Polar data={chartData} options={options}/>
      </div>
    </>
  );
}

export default Polarchart;