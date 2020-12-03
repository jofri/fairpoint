import React from 'react';
import StoryTile from './story-tiles/Story-tile';
import { useEffect, useState } from 'react';
import './Feed.css';

function Feed () {

  const [stories, setStories] = useState([]);


  // Get top/uk stories from backend
  useEffect( () => {
    fetch('/api/getStories')
      .then(response => response.json())
      .then(data => setStories(data));
  }, []);

  return (
    <>
      <div className="Feed-container">

        {stories.map(story => {
          // Create standard story object
          let image = 'https://icon-library.com/images/news-icon-free/news-icon-free-7.jpg';
          let storyObj = {
            headline: 'No title',
            image: image,
          };
          // If it's a Google story object, set image of first article as image
          if (story.story === true) {
            if (story.articles[0].image) image = story.articles[0].image;
            storyObj = {
              headline: story.title,
              image: image,
            };
          }
          // If it's just an article, keep template image but set headline
          if (story.story === false) {
            storyObj = {
              headline: story.title,
            };
          }
          // Render a StoryTile per story object
          return <StoryTile story={storyObj} key={story._id}/>;
        })}

      </div>
    </>
  );
}

export default Feed;
