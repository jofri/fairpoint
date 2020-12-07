// import React from 'react';
import React, {useEffect, useState} from 'react';
import {Polar} from 'react-chartjs-2';
import './Polararea.css';

function Polarchart (props) {
  // console.log('inpoloarchart',props);

  // let stanceData = {};
  // for (let i = 0; i < props.userData.length; i++) {
  //   if (props.userData[i].stance === 10) {
  //     let stance = 'Right';
  //     stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
  //   } else if (props.userData[i].stance === 1) {
  //     let stance = 'Left';
  //     stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
  //   } else if (props.userData[i].stance === 5) {
  //     let stance = 'Middle';
  //     stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
  //   } else if (props.userData[i].stance === 11) {
  //     let stance = 'Not defined';
  //     stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
  //   }
  // }

  console.log(props);
  const [chartData, setChartData] = useState({});
  const linechart = () => {
    
    const labeldata = Object.keys(stanceData);
    const piedata = Object.values(stanceData);
    // const colorschema = [{'Right':'rgb(1, 149, 223)'}, {'Left':'#fc5185'}, {'Middle':'#c4c4c4'}, {'Undefined':'#eeeeee'}];
    // const colorlabel = [];

    setChartData({
      labels: labeldata,
      datasets: [
        {
          label: 'Stance',
          data: piedata ,
          backgroundColor: [
            '#fc5185',
            'rgb(1, 149, 223)',
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


// switch (dataset[i].stance) {
//   case 10:
//     console.log(dataset[i].stance);
//     stanceData.name  = 'Right';
//     stanceData.counter ++; 
//     console.log(stanceData);
//     break;
//   case 1:
//     console.log(dataset[i].stance);
//     stanceData.name  = 'Left';
//     stanceData.counter ++; 
//     console.log(stanceData);
//     break;
//   case 5:
//     console.log(dataset[i].stance);
//     stanceData.name  = 'Middle';
//     stanceData.counter ++; 
//     console.log(stanceData);
//     break; 
//   case 11:
//     console.log(dataset[i].stance);
//     stanceData.name  = 'Undefined';
//     stanceData.counter ++; 
//     console.log(stanceData);
//     break;
//   default:
//     console.log('Stance missing');    
//   }