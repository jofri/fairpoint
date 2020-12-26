import React, { useState, useEffect } from 'react';
import {Doughnut} from 'react-chartjs-2';

function Doughnutchart (props) {
  const publisherLabel = [];
  const publisherPie = [];

  const [chartData, setChartData] = useState({});
  const doughnutchart = () => {
    setChartData({
      labels: publisherLabel,
      datasets: [
        {
          data: publisherPie,
          backgroundColor: [
            '#F18188',
            '#EB8EB5',
            '#CEA4DB',
            '#9DBDF0',
            '#64D3ED',
            '#48E3D4',
            '#70EDAD',
            '#AEF184',
            '#EFEE69']
        }
      ],
      borderWidth: 0
    });
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 10,
        fontSize: 11
      }
    },
    cutoutPercentage: 40,
    borderWidth: 1
  };

  useEffect(() => {
    for (let i = 0; i < props.publisherData.length; i++) {
      publisherLabel.push(props.publisherData[i][0]);
      publisherPie.push(props.publisherData[i][1]);
    }
    doughnutchart();
  }, [props]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Doughnut data={chartData} options={options}/>
    </>
  );
}

export default Doughnutchart;