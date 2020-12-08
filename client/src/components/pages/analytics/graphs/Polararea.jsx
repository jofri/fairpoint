// import React from 'react';
import React, {useEffect, useState} from 'react';
import {Polar} from 'react-chartjs-2';
import './Polararea.css';

function Polarchart (props) {

  let stanceData = {'Right': 0, 'Left': 0, 'Middle': 0, 'Not defined': 0};
  for (let i = 0; i < props.loginUser.article.length; i++) {
    if (props.loginUser.article[i].stance === 10) {
      let stance = 'Right';
      stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
    } else if (props.loginUser.article[i].stance === 1) {
      let stance = 'Left';
      stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
    } else if (props.loginUser.article[i].stance === 5) {
      let stance = 'Middle';
      stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
    } else if (props.loginUser.article[i].stance === 11) {
      let stance = 'Not defined';
      stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
    }
  }

  const [chartData, setChartData] = useState({});
  const linechart = () => {

    const labeldata = Object.keys(stanceData);
    const piedata = Object.values(stanceData);

    setChartData({
      labels: labeldata,
      datasets: [
        {
          label: 'Stance',
          data: piedata,
          backgroundColor: [
            'rgb(1, 149, 223)',
            '#fc5185',
            '#c4c4c4',
            '#eeeeee'
          ],
          borderWidth: 1
        }
      ]
    });
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title:{
      display: true,
      text: 'Political stance',
      fontSize: 15
    },
    legend: {
      position: 'right',
      labels: {
        boxWidth: 10,
        fontSize: 13
      }
    }
  };

  useEffect(() => {
    linechart();
  }, [props]);

  return (
    <>
      <div className="Polarchart-container">
        <Polar data={chartData} options={options}/>
      </div>
    </>
  );
}

export default Polarchart;