import React from 'react';
// import React, {useEffect, useState} from 'react';
// import {Polar} from 'react-chartjs-2';
import './Polararea.css';


function Polarchart (props) {
  console.log('inpoloarchart',props);
  // let dataset = [];
  // for (let i = 0; i < props.loginUser.article.length; i++) {
  //   let datapair = {};
  //   datapair.stance = props.loginUser.article[i].stance;
  //   datapair.source = props.loginUser.article[i].source;
  //   dataset.push(datapair);
  // }

  // let stanceData = [];
  // for (let i = 0; i < dataset.length; i++) {
  //   if (dataset[i].stance === 10) {
  //     let stance = 'Right';
  //     stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
  //   } else if (dataset[i].stance === 1) {
  //     let stance = 'Left';
  //     stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
  //   } else if (dataset[i].stance === 5) {
  //     let stance = 'Middle';
  //     stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
  //   } else if (dataset[i].stance === 11) {
  //     let stance = 'Not defined';
  //     stanceData[stance] = stanceData[stance] ? stanceData[stance] + 1: 1;
  //   }
  // }

  // const labeldata = Object.keys(stanceData);
  // const piedata = Object.values(stanceData);

  // const [chartData, setChartData] = useState({});
  // const linechart = () => {
  //   setChartData({
  //     labels: labeldata,
  //     datasets: [
  //       {
  //         label: 'Stance',
  //         data: piedata,
  //         backgroundColor: [
  //           '#fc5185',
  //           '#3fc1c9',
  //           '#c4c4c4',
  //           '#eeeeee'
  //         ],
  //         borderWidth: 1
  //       }
  //     ]
  //   });
  // };

  // const options = {
  //   title:{
  //     display: true,
  //     text: 'Political stance'
  //   },
  //   legend: {
  //     position: 'right',
  //     labels: {
  //       boxWidth: 10,
  //       fontSize: 13
  //     }
  //   }
  // };

  // useEffect(() => {
  //   linechart();
  // }, []);

  return (
    <>
      <div className="Polarchart-container">
        {/* <Polar data={chartData} options={options}/> */}
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