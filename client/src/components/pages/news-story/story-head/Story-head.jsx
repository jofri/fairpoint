import React from 'react';
import './Story-head.css';
import Card from '@material-ui/core/Card';

function StoryHead (props) {
  console.log(props.firstArticle, 'FIRST STORY');
  const firstArticle = props.firstArticle;

  return (
    <Card className="StoryHeadCardWrapper">
      <div className="StoryHeadWrapper">
        <img src={firstArticle.image} alt={firstArticle.subtitle} className="StoryHeadImage"></img>
        <div className="StoryHeadTextWrap">
          <h2 className="StoryHeadTitle">{firstArticle.title}</h2>
          {/* <p className="StoryHeadSubtitle">{firstArticle.subtitle}</p> */}
          <p className="StoryHeadInfo">
            <span className="StoryHeadSource">{firstArticle.source}</span>
            <span className="StoryHeadTime"> | {firstArticle.time}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default StoryHead;
