import React,{useState, useEffect} from 'react';
import './Analytics.css';

import Loader from '../../helpers/loader/Loader';
import Doughnut from '../analytics/graphs/Doughnut';
// import Radar from '../analytics/graphs/Radar';
import Polar from '../analytics/graphs/Polararea';
// import Wordcloud from '../analytics/graphs/Wordcloud';

function Analytics (props) {


  const [userData, setUserdata] = useState([]);
  const [stanceData, setStanceData] = useState({});
  const [publisherData, setPublisherData] = useState([]);
  // const [interestData, setInterestData] = useState({});
  // const [mostInterestData, setMostInterestData] = useState([]);

  // Gets dataset from props and converts it into array with stance/source key value pair
  const getDataset =  () => {
    let dataset = [];

    for (let i = 0; i < props.loginUser.article.length; i++) {
      let datapair = {};
      datapair.stance = props.loginUser.article[i].stance;
      datapair.source = props.loginUser.article[i].source;
      dataset.push(datapair);
    }
    
    return dataset;
  };

  const getStanceDictionary = (userDataset) => {
    let userstanceData = {'Right': 0, 'Left': 0, 'Middle': 0, 'Not defined': 0};

    for (let i = 0; i < userDataset.length; i++) {
      if (userDataset[i].stance === 10) {
        let stance = 'Right';
        userstanceData[stance] = userstanceData[stance] ? userstanceData[stance] + 1: 1;
      } else if (userDataset[i].stance === 1) {
        let stance = 'Left';
        userstanceData[stance] = userstanceData[stance] ? userstanceData[stance] + 1: 1;
      } else if (userDataset[i].stance === 5) {
        let stance = 'Middle';
        userstanceData[stance] = userstanceData[stance] ? userstanceData[stance] + 1: 1;
      } else if (userDataset[i].stance === 11) {
        let stance = 'Not defined';
        userstanceData[stance] = userstanceData[stance] ? userstanceData[stance] + 1: 1;
      }
    }
    
    return userstanceData;
  };

  const calcStance = (userDataset) => {
    const userStanceDictonary = getStanceDictionary(userDataset);

    const rightArticle = userStanceDictonary.Right;
    const leftArticle = userStanceDictonary.Left;

    const rightStance =( rightArticle / (rightArticle + leftArticle));
    const leftStance = (leftArticle / (rightArticle + leftArticle));

    let userStanceAttributes = {};
    let userStance = '';
    if (rightStance > 0.5 && rightStance < 0.7) {
      userStance = 'slightly centre-right';
    } else if (rightStance >= 0.7) {
      userStance = 'centre-right';
    } else if (leftStance > 0.5 && leftStance < 0.7) {
      userStance = 'slightly centre-left';
    } else if (leftStance >= 0.7) {
      userStance = 'centre-left';
    } else {
      userStance = 'middle';
    }

    userStanceAttributes.opacity = Math.max(leftStance, rightStance);
    userStanceAttributes.userStance = userStance;
    return userStanceAttributes;
  };

  const publisherDictionary = (userDataset) => {
    let dataset = [];
    for (let i = 0; i < userDataset.length; i++) {
      let datapair = {};
      datapair.stance = userDataset[i].stance;
      datapair.source = userDataset[i].source;
      dataset.push(datapair);
    }

    let labeldata = {};

    for (let i = 0; i < dataset.length; i++) {
      const source = dataset[i].source;

      if (source in labeldata) {
        labeldata[source] += 1;
      } else {
        labeldata[source] = 1;
      }
    }
    return labeldata;
  };

  // const getInterestDictionary = (userDataset) => {

  //   const interestsData = {};

  //   for (let i = 0; i < userDataset.length; i++) {
  //     if (userDataset[i].category === 'businesses') {
  //       let categoryName = 'businesses';
  //       interestsData[categoryName] = interestsData[categoryName]? interestsData[categoryName] + 1: 1;
  //     } else if (userDataset[i].category === 'entertainments') {
  //       let categoryName = 'entertainments';
  //       interestsData[categoryName] = interestsData[categoryName] ? interestsData[categoryName] + 1: 1;
  //     } else if (userDataset[i].category === 'health') {
  //       let categoryName = 'health';
  //       interestsData[categoryName] = interestsData[categoryName] ? interestsData[categoryName] + 1: 1;
  //     } else if (userDataset[i].category === 'sciences') {
  //       let categoryName = 'sciences';
  //       interestsData[categoryName] = interestsData[categoryName] ? interestsData[categoryName] + 1: 1;
  //     } else if (userDataset[i].category === 'sports') {
  //       let categoryName = 'sports';
  //       interestsData[categoryName] = interestsData[categoryName] ? interestsData[categoryName] + 1: 1;
  //     } else if (userDataset[i].category === 'technologies') {
  //       let categoryName = 'technologies';
  //       interestsData[categoryName] = interestsData[categoryName] ? interestsData[categoryName] + 1: 1;
  //     } else if (userDataset[i].category === 'worlds') {
  //       let categoryName = 'worlds';
  //       interestsData[categoryName] = interestsData[categoryName] ? interestsData[categoryName] + 1: 1;
  //     }
  //     // else if (userDataset[i].category === 'uk') {
  //     //   let categoryName = 'headline';
  //     //   interestsData[categoryName] = interestsData[categoryName] ? interestsData[categoryName] + 1: 1;
  //     // }
  //   }

  //   return interestsData;
  // };

  // const cloudChartData = ((loginUser) => {
  //   let wordSet = {};

  //   for (let i = 0; i < loginUser.article.length; i++) {
  //     const articleTitle = loginUser.article[i].title;
  //     // split title into words
  //     // for each word:
  //     //  word -> lower case
  //     //  remove punctuation 
  //     //  remove numbers
  //     //  remove short words
  //     //  if word in wordSet:
  //     //     wordSet[word] += 1;
  //     //  else:
  //     //     wordSet[word] = 0;

  //     totalWords.push(articleTitle);
  //   }
  //   //totalWords = totalWords.join(', ');
  //   return wordSet;
  // });

  // console.log(cloudChartData(props.loginUser));
  

  useEffect(() => {
    //**Total array of clicked article by user
    const userDataset = getDataset();

    //**Set Polar chart data
    setUserdata(userDataset);
    setStanceData(calcStance(userDataset));
    
    /**Set Wordcloud chart data */

    //**Set publisher doughnut chart data 
    const publishers = publisherDictionary(userDataset);
    let items = Object.keys(publishers).map(function (key) {
      return [key, publishers[key]];
    });
    items.sort(function (first, second) {
      return second[1] - first[1];
    });
    setPublisherData(items.slice(0,10));

    //**Category Interest radar chart data */
    // const interests = getInterestDictionary(props.loginUser.article);
    // let sortedInterestItems = Object.keys(interests).map(function (key) {
    //   return [key, interests[key]];
    // });
    // sortedInterestItems.sort(function (first, second) {
    //   return second[1] - first[1];
    // });
    // setInterestData(interests);
    // setMostInterestData(sortedInterestItems);
  }, []);



  return props ?
    <div className='totalsummary-wrapper'>
      <h1>Summary</h1>
      <h2>You have read a total of {userData.length} articles so far</h2>
      <div className='polarchart-container'>
        <Polar loginUser={props.loginUser} userData={userData} setUserdata={setUserdata} stanceData={stanceData} setStanceData={setStanceData}/>
        <h3>Your reading habits are {stanceData.userStance}</h3>
      </div>
      <div className='radarchart-container'>
        {/* <Wordcloud loginUser={props.loginUser}/> */}
        <h3>Your recent main interest is  </h3>
        {/* <h3>Your main interest is { mostInterestData.length ===0 ? null : mostInterestData[0][0]} </h3> */}
      </div>
      <div className='doughnutchart-container'>
        <Doughnut loginUser={props.loginUser} publisherData={publisherData} setPublisherData={setPublisherData}/>
        <h3>Your favourite publisher is {publisherData.length === 0 ? null : publisherData[0][0]}</h3>
      </div>
    </div>
    : <Loader/>;
}

export default Analytics;
