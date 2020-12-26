import React from 'react';
import './Story-head.css';
import Card from '@material-ui/core/Card';


function StoryHead (props) {

  return (
    <Card className="StoryHeadCardWrapper">
      <div className="StoryHeadWrapper">
        <img src={props.articleThumbnail && props.articleThumbnail.replace('h100', 'h300').replace('w100', 'w500').replace('-rw', '')} alt="Newsimage" className="StoryHeadImage"></img>
        <div className="StoryHeadTextWrap">
          <h2 className="StoryHeadTitle">{props.story.title}</h2>
        </div>
      </div>
    </Card>
  );
}

export default StoryHead;
