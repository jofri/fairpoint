import React from 'react';
import './Story-head.css';

function StoryHead (props) {
  console.log(props.firstArticle, 'FIRST STORY');
  const firstArticle = props.firstArticle;

  return (
    <div className="StoryHeadWrapper">
      <img src={firstArticle.image} alt={firstArticle.subtitle} className="StoryHeadImage"></img>
      <h2 className="StoryHeadTitle">{firstArticle.title}</h2>
      {/* <p className="StoryHeadSubtitle">{firstArticle.subtitle}</p> */}
      <p className="StoryHeadInfo">
        <span className="StoryHeadSource">{firstArticle.source}</span>
        <span className="StoryHeadTime"> | {firstArticle.time}</span>
      </p>
    </div>
  );
}

export default StoryHead;
