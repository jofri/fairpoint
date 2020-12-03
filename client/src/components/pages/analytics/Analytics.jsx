// import React,{useState, useEffect} from 'react';
// // import React from 'react';
// import './Analytics.css';

// // import GraphSlider from './GraphSlider';
// // import Linechart from './graphs/Linechart';
// // import Bar from '../analytics/graphs/Bar';
// import Loader from '../../helpers/loader/Loader';
// import Doughnut from '../analytics/graphs/Doughnut';
// import Radar from '../analytics/graphs/Radar';
// import Polar from '../analytics/graphs/Polararea';

// function Analytics (props) {

//   const [userData, setUserdata] = useState([]);
//   const [stanceData, setStanceData] = useState({});
//   // const [stancestate, setStanceState] = useState({});

//   const getDataset =  () => {
//     let dataset = [];

//     for (let i = 0; i < props.loginUser.article.length; i++) {
//       let datapair = {};
//       datapair.stance = props.loginUser.article[i].stance;
//       datapair.source = props.loginUser.article[i].source;
//       dataset.push(datapair);
//     }

//     return dataset;
//   };

//   useEffect(() => {
//     const userdataset = getDataset();
//     setUserdata(userdataset);
//   }, [props]);
  
//   console.log('userData', userData);


//   const getStanceData = () => {
//     let userstanceData = {};

//     for (let i = 0; i < userData.length; i++) {
//       if (userData[i].stance === 10) {
//         let stance = 'Right';
//         userstanceData[stance] = userstanceData[stance] ? userstanceData[stance] + 1: 1;
//       } else if (userData[i].stance === 1) {
//         let stance = 'Left';
//         userstanceData[stance] = userstanceData[stance] ? userstanceData[stance] + 1: 1;
//       } else if (userData[i].stance === 5) {
//         let stance = 'Middle';
//         userstanceData[stance] = userstanceData[stance] ? userstanceData[stance] + 1: 1;
//       } else if (userData[i].stance === 11) {
//         let stance = 'Not defined';
//         userstanceData[stance] = userstanceData[stance] ? userstanceData[stance] + 1: 1;
//       }
//     }

//     return userstanceData;
//   };



//   const calcStance = () => {
//     const rightArticle = stanceData.Right;
//     const leftArticle = stanceData.Left;

//     const rightstance =( rightArticle / (rightArticle + leftArticle));
//     const leftstance = (leftArticle / (rightArticle + leftArticle));

//     let userstanceAttributes = {};
//     let userstance = '';
//     if (rightstance > 0.5) {
//       userstance = 'lowright';
//       userstanceAttributes.userstance = userstance;
//       userstanceAttributes.opacity = rightstance;
//       return userstanceAttributes;
//     } else if (rightstance > 0.8) {
//       userstance = 'highright';
//       console.log('highright', rightstance);
//       userstanceAttributes.userstance = userstance;
//       userstanceAttributes.opacity = rightstance;
//       return userstanceAttributes;
//     } else if (leftstance > 0.5) {
//       userstance = 'lowleft';
//       userstanceAttributes.userstance = 'lowleft';
//       userstanceAttributes.opacity = leftstance;
//       return userstanceAttributes;
//     } else if (leftstance > 0.8) {
//       userstance = 'hightleft';
//       userstanceAttributes.userstance = userstance;
//       userstanceAttributes.opacity = leftstance;
//       return userstanceAttributes;
//     } 
//     else {
//       userstanceAttributes.userstance = 'middle';
//       userstanceAttributes.opacity = 0;
//       console.log(userstanceAttributes);
//       return userstanceAttributes;
//     }
//   };

    
//   useEffect(() => {
//     const stancedataset = getStanceData();
//     setStanceData(stancedataset);
//   },[userData]);

//    useEffect(() => {

//     const result = calcStance();
//     setStanceData(stancedataset);
//   },[userData]);

//   // const result = calcStance();
//   // console.log(result);
  
//   // const defineBackground = () => {
//   //   if (props.loginUser.article.length > 30) {
//   //     const userstanceAttributes = calcStance();
//   //     console.log(userstanceAttributes);

//   //     let divclassname = {};
//   //     let divclassAttributes = {};

//   //     switch (userstanceAttributes.userstance) {
//   //     case 'lowright':
//   //       divclassAttributes.divclassname = 'lowrightcolor';
//   //       divclassAttributes.opacity = userstanceAttributes.opacity;
//   //       return divclassAttributes; 
//   //       // break;
//   //     case 'highright':
//   //       divclassAttributes.divclassname = 'hightrightcolor';
//   //       return divclassname; 
//   //       // break;
//   //     case 'lowleft':
//   //       divclassAttributes.divclassname = 'lowleftcolor';
//   //       divclassAttributes.opacity = userstanceAttributes.opacity;
//   //       return divclassAttributes; 
//   //       // break;
//   //     case 'highleft':
//   //       divclassAttributes.divclassname = 'higthleftcolor';
//   //       divclassAttributes.opacity = userstanceAttributes.opacity;
//   //       return divclassAttributes; 
//   //       // break;
//   //     default:  
//   //       divclassAttributes.divclassname = 'middlecolor';
//   //       divclassAttributes.opacity = userstanceAttributes.opacity;
//   //       return divclassAttributes; 
//   //     }      
//   //   }
//   // };

//   // useEffect(() => {
//   //   setStanceState(defineBackground());
//   // }, [stanceData]);

//   // console.log(stancestate);

//   return props ? 
//     // <div className={"totalsummary-wrapper"}>
//     <div >
//       <div >
//         <h2>Summary</h2>
//         <div className='polarchart-container'>
//           <Polar loginUser={props.loginUser} />
//         </div>
//         <div className='doughnutchart-container'>
//           <Doughnut loginUser={props.loginUser}/>
//         </div>
//         <div className='radarchart-container'>
//           <Radar loginUser={props.loginUser}/>
//         </div>
//       </div>
//     </div>
//     : <Loader/>;
// }

// export default Analytics;
