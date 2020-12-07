import React from 'react';
// import Tabs from './tabs/Tabs';
import Feed from './feed/Feed';

function NewsFeed (props) {
  return (
    <>
      <Feed setClickedStory={props.setClickedStory} stories={props.stories} setStories={props.setStories}/>
    </>
  );
}

export default NewsFeed;
