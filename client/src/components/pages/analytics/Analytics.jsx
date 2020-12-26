import React,{useState, useEffect} from 'react';
import './Analytics.css';
import BackgroundCalc from '../../helpers/backgroundCalc';

import Card from '@material-ui/core/Card';
import Loader from '../../helpers/loader/Loader';
import Doughnut from '../analytics/graphs/Doughnut';
import Polar from '../analytics/graphs/Polararea';
import Wordcloud from '../analytics/graphs/Wordcloud';
import AnalyticsPlaceholder from '../analytics/graphs/AnalyticsPlaceholder';


function Analytics (props) {
  const [userData, setUserdata] = useState([]);
  const [stanceData, setStanceData] = useState({});
  const [publisherData, setPublisherData] = useState([]);
  const [interestData, setInterestData] = useState([]);
  const [fontColour, setFontColour] = useState('');
  const [summary, setSummary] = useState('');

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

    const userArticles = loginUser.article;
    function filterArticles (userArticles) {
      const now = new Date();
      const filtered = userArticles.filter(el => ((now - new Date(el.timestamp))/1000/60/60/24)<7);
      return filtered;
    }

    const recentArticles = filterArticles(userArticles);
    const stopWords = ['day', 'live', 'could','talks','i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now'];

    for (let i = 0; i < recentArticles.length; i++) {
      allArticleTitle.push(recentArticles[i].title);
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
    // Total array of clicked article by user
    const userDataset = getDataset();

    // Set Polar chart data
    setUserdata(userDataset);
    setStanceData(calcStance(userDataset));

    // Set Wordcloud chart data
    const wordCloudData = cloudChartDictionary(props.loginUser);
    let words = Object.keys(wordCloudData).map(function (key) {
      return [key, wordCloudData[key]];
    });
    words.sort(function (first, second) {
      return second[1] - first[1];
    });
    setInterestData(words);

    // Set publisher doughnut chart data
    const publishers = publisherDictionary(userDataset);
    let items = Object.keys(publishers).map(function (key) {
      return [key, publishers[key]];
    });
    items.sort(function (first, second) {
      return second[1] - first[1];
    });
    setPublisherData(items.slice(0,10));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // Set font color based on political stance
    if (stanceData.userStance === 'slightly centre-right'
    || stanceData.userStance === 'centre-right') {
      setFontColour('#0195df');
    } else if (stanceData.userStance === 'slightly centre-left'
    || stanceData.userStance === 'centre-left') {
      setFontColour('#fc5185');
    } else {
      setFontColour('#6b04da');
    }
  }, [stanceData]);


  useEffect(() => {
    // Set objectiveness score
    const objectiveScore = BackgroundCalc(props.loginUser)[2];

    // eslint-disable-next-line default-case
    switch (objectiveScore) {
    case 5:
      setSummary('🎉 Congratulations! You read news objectively from all over the political spectrum 🎉 ');
      break;
    case 4:
      setSummary('💡 Not bad, you read news from different sources and political affiliations 💡');
      break;
    case 3:
      setSummary('🔔 You tend to read a good mix of left and right articles, but challenge yourself to swing the other way 🔔');
      break;
    case 2:
      setSummary('💣 You mostly read news from one side of the political spectrum - try to incorporate a greater variety in your mix 💣');
      break;
    case 1:
      setSummary('🔥 You only read news from one side of the political spectrum which might create a biased view on current issues. Incorporate a greater variety of articles in your mix to improve your score! 🔥');
      break;
    }

  }, [summary]); // eslint-disable-line react-hooks/exhaustive-deps

  if (props.loginUser.article.length < 10) {
    return <AnalyticsPlaceholder userData={userData}/>;
  } else {
    return props ?
      <div className='totalsummary-wrapper'>
        <Card style={{marginBottom: 10, marginTop: 10, paddingTop: 10}}>
          <div className="total-summary">
            <h1>Your personalized analytics</h1>
            <div className="comment" style={{display: 'inline-block'}}>
              <h2 style={{display: 'inline-block'}}>Here you can find all data pertaining to your news-habits. If you click an article from a news story, this page will update in real-time.</h2>
            </div>
          </div>
        </Card>
        <Card style={{marginBottom: 10, marginTop: 10, paddingTop: 10}}>
          <div className="total-summary">
            <h1>Total Summary</h1>
            <div className="comment" style={{display: 'inline-block'}}>
              <h2 style={{display: 'inline-block'}}>You have read a total of </h2>
              <h2 style={{display: 'inline-block', marginLeft: 5, marginRight: 5, color: fontColour}}>{' '+ userData.length + ' '}</h2>
              <h2 style={{display: 'inline-block'}}> articles so far.</h2>
            </div>
            <div className="comment" style={{display: 'inline-block'}}>
              <h2 style={{display: 'inline-block'}}>Your objective score is </h2>
              <h2 style={{display: 'inline-block', marginLeft: 5, marginRight: 5, marginBottom: 5, color: fontColour}}>{BackgroundCalc(props.loginUser)[2]}</h2>
            </div>
            <div className="comment-box">
              <h2 style={{textAlign: 'center'}}>{summary}</h2>
            </div>
          </div>
        </Card>
        <Card style={{marginBottom: 10}}>
          <div className='polarchart-container'>
            <h1>Political stance</h1>
            <Polar
              loginUser={props.loginUser}
              userData={userData}
              setUserdata={setUserdata}
              stanceData={stanceData}
              setStanceData={setStanceData}/>
            <div className="comment" style={{display: 'inline-block', marginTop: 10}}>
              <h3 style={{display: 'inline-block'}}>Your reading habits are</h3>
              <h3 style={{display: 'inline-block', marginLeft: 5, color: fontColour}}>{stanceData.userStance}</h3>
            </div>
          </div>
        </Card>
        <Card style={{marginBottom: 10}}>
          <div className='wordcloud-container'>
            <h1>Your recent interests</h1>
            <Wordcloud
              loginUser={props.loginUser}
              interestData={interestData}/>
            <h3>Many of the headlines you&apos;ve clicked on contained these keywords: <br/>
              <div className="keywords" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="keyword-block" style={{display: 'inline-block'}}>{interestData.length === 0 ? null : interestData[0][0].toUpperCase()}</div>
                <div className="keyword-block" style={{display: 'inline-block'}}>{interestData.length === 0 ? null : interestData[1][0].toUpperCase()}</div>
                <div className="keyword-block" style={{display: 'inline-block'}}>{interestData.length === 0 ? null : interestData[2][0].toUpperCase()}</div>
              </div>
            </h3>
          </div>
        </Card>
        <Card style={{marginBottom: 10}}>
          <div className='doughnutchart-container'>
            <h1>Top 10 most read news sources</h1>
            <Doughnut
              loginUser={props.loginUser}
              publisherData={publisherData}
              setPublisherData={setPublisherData}/>
            <h3>Your favourite news source is {publisherData.length === 0 ? null : publisherData[0][0]}</h3>
          </div>
        </Card>
      </div>
      : <Loader/>;
  }

}

export default Analytics;