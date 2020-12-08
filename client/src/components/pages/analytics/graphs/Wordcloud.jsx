import React from 'react';
import ReactWordcloud from 'react-wordcloud';

function SimpleWordcloud (props) {
  const wordData = [];

  for (let i = 0; i < props.interestData.length; i++) {
    const element = props.interestData[i];
    const wordObj = {};
    wordObj.text = element[0];
    wordObj.value = element[1];
    wordData.push(wordObj);
  }
  
  return <ReactWordcloud words={wordData} />;
}

export default SimpleWordcloud;