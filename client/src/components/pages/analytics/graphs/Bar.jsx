import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';


function Barchart () {

  const [chartData, setChartData] = useState({});
  const barchart = () => {
    setChartData({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'No. of aritcles per day',
          data: [32, 45, 12, 20, 10, 15, 35],
          // backgroundColor: [
          //   'rgba(75, 192, 192, 0.6'
          // ],
          borderWidth: 4
        }
      ]
    });
  };

  useEffect(() => {
    barchart();
  }, []);

  return (
    <>
      <div className="barchart-container">
        <Bar data={chartData}/>
      </div>
    </>
  );
}

export default Barchart;