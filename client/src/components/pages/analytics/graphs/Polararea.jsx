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
            '#0195df',
            '#fc5185',
            '#c4c4c4',
            '#eeeeee'
          ],
          borderWidth: 1,
          padding: 10
        }
      ]
    });
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 10,
        fontSize: 13,
        fontColor: '#3f454d'
      }
    }
  };

  useEffect(() => {
    linechart();
  }, [props]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="Polarchart-container">
        <Polar data={chartData} options={options}/>
      </div>
    </>
  );
}

export default Polarchart;