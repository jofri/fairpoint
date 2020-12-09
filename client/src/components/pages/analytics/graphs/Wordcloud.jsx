import React from 'react';
import ReactWordcloud from 'react-wordcloud';

function SimpleWordcloud (props) {
  const wordData = [];
  for (let i = 0; i < props.interestData.length; i++) {
    const element = props.interestData[i];
    const wordObj = {};
    wordObj.text = element[0].toUpperCase();
    wordObj.value = element[1];
    wordData.push(wordObj);
  }

  const chartstyle = {
    width: '100%',
    height: '100%'
  };


  return (
    <div>
      <ReactWordcloud words={wordData} style={chartstyle} />
    </div>
  );
}

export default SimpleWordcloud;