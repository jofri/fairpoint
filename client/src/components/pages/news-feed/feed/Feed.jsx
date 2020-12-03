import React from 'react';
import HeadStory from './story-tiles/HeadStory';
import { useEffect, useState } from 'react';
import './Feed.css';
import SubStory from './sub-story/SubStory';

function Feed () {

  const [stories, setStories] = useState([]);


  // Get top/uk stories from backend
  useEffect( () => {
    fetch('/api/getStories')
      .then(response => response.json())
      .then(data => setStories(data));
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
