import React from 'react';
// import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';
// import 'd3-transition';
// import { select } from 'd3-selection';

function SimpleWordcloud (props) {
  const wordData = [];
  for (let i = 0; i < props.interestData.length; i++) {
    const element = props.interestData[i];
    const wordObj = {};
    wordObj.text = element[0].toUpperCase();
    wordObj.value = element[1];
    wordData.push(wordObj);
  }
  console.log(wordData);

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