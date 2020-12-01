import React from 'react';
import StoryTile from './story-tiles/Story-tile';
import { useEffect, useState } from 'react';
import { pick } from 'carrot-js';
import './Feed.css';

function Feed () {

  const [stories, setStories] = useState([]);

  useEffect( () => {
    pick('stories', setStories);
  }, []);

  return (
    <>
      <div className="Feed-container">

        {stories.map(story => <StoryTile story={story} key=""/>)}

      </div>
    </>
  );
}

export default Feed;
