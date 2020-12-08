import React,{useState, useEffect} from 'react';
import './Analytics.css';

import Card from '@material-ui/core/Card';
import Loader from '../../helpers/loader/Loader';
import Doughnut from '../analytics/graphs/Doughnut';
import Polar from '../analytics/graphs/Polararea';
import Wordcloud from '../analytics/graphs/Wordcloud';

function Analytics (props) {
  const [userData, setUserdata] = useState([]);
  const [stanceData, setStanceData] = useState({});
  const [publisherData, setPublisherData] = useState([]);
  const [interestData, setInterestData] = useState([]);

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

  
  const cloudChartDictionary = ((loginUser) => {
    let wordDictionary = {};
    
    let allArticleTitle =[];
    let allTitleStr = '';
    const stopWords = ['could','talks','i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now'];
    
    for (let i = 0; i < loginUser.article.length; i++) {
      allArticleTitle.push(loginUser.article[i].title);
      allTitleStr = allArticleTitle.join(',').toLowerCase().replace(/[~`!@#$%^&*(){}[\];:"'<,.>?\\|_+=-]/g, ' ').replace(/[0-9]/g, ' ');
    }

    function removeStopWords () {
      let res = [];
      allTitleStr = allTitleStr.split(' ');

      for (let i = 0; i < allTitleStr.length; i++) {
        if (!stopWords.includes(allTitleStr[i])) {
          res.push(allTitleStr[i]);
        }
      }
      return res;
    }

    const removedStopWords = removeStopWords().filter(el => el  !== '');

    for (let i = 0; i < removedStopWords.length; i++) {
      wordDictionary.hasOwnProperty.call(wordDictionary, removedStopWords[i]) 
        ? wordDictionary[removedStopWords[i]] += 1 : wordDictionary[removedStopWords[i]] = 1;
    }
    return wordDictionary;
  });
  

  useEffect(() => {
    //**Total array of clicked article by user
    const userDataset = getDataset();

    //**Set Polar chart data
    setUserdata(userDataset);
    setStanceData(calcStance(userDataset));
    
    /**Set Wordcloud chart data */
    const wordCloudData = cloudChartDictionary(props.loginUser);
    let words = Object.keys(wordCloudData).map(function (key) {
      return [key, wordCloudData[key]];
    });
    words.sort(function (first, second) {
      return second[1] - first[1];
    });
    setInterestData(words);

    //**Set publisher doughnut chart data 
    const publishers = publisherDictionary(userDataset);
    let items = Object.keys(publishers).map(function (key) {
      return [key, publishers[key]];
    });
    items.sort(function (first, second) {
      return second[1] - first[1];
    });
    setPublisherData(items.slice(0,10));
  }, []);

  return props ?
    <div className='totalsummary-wrapper'>
      <Card style={{marginBottom: 10}}>
        <div className="total-summary">
          <h1>Summary</h1>
          <div className="comment" style={{display: 'inline-block'}}>
            <h2 style={{display: 'inline-block'}}>You have read a total of </h2>
            <h2 className="point-color" style={{display: 'inline-block', marginLeft: 5, marginRight: 5}}>{' '+ userData.length + ' '}</h2>
            <h2 style={{display: 'inline-block'}}> articles so far</h2>
          </div>
        </div>
      </Card>
      <Card style={{marginBottom: 10}}>
        <div className='polarchart-container'>
          <Polar 
            loginUser={props.loginUser} 
            userData={userData} 
            setUserdata={setUserdata} 
            stanceData={stanceData} 
            setStanceData={setStanceData}/>
          <div className="comment" style={{display: 'inline-block', marginTop: 10}}>
            <h3 style={{display: 'inline-block'}}>Your reading habits are</h3>
            <h3 className="point-color" style={{display: 'inline-block', marginLeft: 5}}>{stanceData.userStance}</h3>
          </div>
        </div>
      </Card>
      <Card style={{marginBottom: 10}}>
        <div className='wordcloud-container'>
          <h2>Your recent interests</h2>
          <Wordcloud 
            loginUser={props.loginUser} 
            interestData={interestData}/>
          <h3>The articles you clicked on most contained these words in their titles<br/>
            <div className="keywords" style={{display: 'flex', justifyContent: 'center'}}>
              <div className="keyword-block" style={{display: 'inline-block'}}>{interestData.length === 0 ? null : interestData[0][0]}</div>
              <div className="keyword-block" style={{display: 'inline-block'}}>{interestData.length === 0 ? null : interestData[1][0]}</div>
              <div className="keyword-block" style={{display: 'inline-block'}}>{interestData.length === 0 ? null : interestData[2][0]}</div>
            </div>  
          </h3>
        </div>
      </Card>
      <Card style={{marginBottom: 10}}>
        <div className='doughnutchart-container'>
          <Doughnut 
            loginUser={props.loginUser} 
            publisherData={publisherData} 
            setPublisherData={setPublisherData}/>
          <h3>Your favourite publisher is {publisherData.length === 0 ? null : publisherData[0][0]}</h3>
        </div>
      </Card>
    </div>
    : <Loader/>;
}

export default Analytics;