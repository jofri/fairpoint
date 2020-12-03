import React from 'react';
import HeadStory from './story-tiles/HeadStory';
import { useEffect, useState } from 'react';
import { pick } from 'carrot-js';
import './Feed.css';
import SubStory from './sub-story/SubStory';

function Feed () {

  const [stories, setStories] = useState([]);


  useEffect( () => {
    pick('stories', setStories);
  }, []);

  const renderSubStories = stories.map((story) => {
    return (<SubStory key=""></SubStory>);
  });

  return (
    <>
      <div className="Feed-container">
        <HeadStory story={stories[0]} key=""/>)
        <div>{renderSubStories}</div>
      </div>
    </>
  );
}

export default Feed;
