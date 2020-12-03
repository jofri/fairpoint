import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';


function Linechart () {

  const [chartData, setChartData] = useState({});
  const linechart = () => {
    setChartData({
      labels: ['Week 20', 'Week 21', 'Week 22', 'Week 23', 'Week 24', 'Week 25', 'Week 26'],
      datasets: [
        {
          label: 'Avg score of reading article',
          data: [6, 7, 5, 8, 9, 7, 4],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6'
          ],
          borderWidth: 4
        }
      ]
    });
  };

  useEffect(() => {
    linechart();
  }, []);

  return (
    <>
      <div className="barchart-container">
        <Line data={chartData}/>
      </div>
    </>
  );
}

export default Linechart;