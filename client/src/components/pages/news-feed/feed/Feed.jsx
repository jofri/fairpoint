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


  const convertStory = (story) => {

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
    return storyObj;
  };



  return (
    <>
      <div className="Feed-container">


        {stories.map( (story, i) => {
          // Render a HeadStory from first object in stories array
          if (i === 0) {return <HeadStory story={convertStory(story)} key=""/>;}
          return false;
        })}

        {stories.map((story, i) => {
          // Render a StoryTile per story object (exept first object)
          if (i === 0) {return false;}
          return <SubStory story={convertStory(story)} key={story._id}/>;
        })};


      </div>
    </>
  );
}

export default Feed;
