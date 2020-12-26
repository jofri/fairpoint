import React from 'react';
import Feed from './feed/Feed';

function NewsFeed (props) {
  return (
    <>
      <Feed
        tabIndex={props.tabIndex}
        clickedFromSwipe={props.clickedFromSwipe}
        setClickedFromSwipe={props.setClickedFromSwipe}
        clickedFromScroll={props.clickedFromScroll}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.stories}
        setStories={props.setStories}
        setStoryApi={props.setStoryApi}
      />
    </>
  );
}

export default NewsFeed;
