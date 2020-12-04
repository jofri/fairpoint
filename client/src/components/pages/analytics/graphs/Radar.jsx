import React, {useState, useEffect}  from 'react';
import {Radar} from 'react-chartjs-2';


function Radarchart (props) {

  console.log('in Radar',props);

  const [chartData, setChartData] = useState({});

  const radarchart = () => {


    const labeldata = Object.keys(props.interestData);
    const radardata = Object.values(props.interestData);

    console.log(labeldata);
    console.log(radardata);


    setChartData({
      labels: labeldata,
      datasets: [
        {
          label: 'Categories',
          data: radardata,
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
  }, [props]);

  return (
    <>
      <Radar data={chartData} options={options}/>
    </>
  );
}

export default Radarchart;