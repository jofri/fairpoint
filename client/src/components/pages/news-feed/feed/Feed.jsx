import React from 'react';
import HeadStory from './story-tiles/HeadStory';
import { useEffect } from 'react';
import './Feed.css';
import SubStory from './sub-story/SubStory';
import { getStories } from '../../../../services/api';
import LoadingSkeleton from './LoadingSkeleton';

function Feed (props) {

  // Get top/uk stories from backend
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const [storyLoaded, setStoryLoaded] = React.useState(false);

  useEffect(() => {
    async function loadedStories () {
      setStoryLoaded(false);
      const response = await getStories();
      props.setStories(response);
      setStoryLoaded(true);
    }
    loadedStories();
  }, []);

  console.log(props.stories,storyLoaded, 'HI THERE');


  /*  function convertStory (story) {

    // Create standard story object
    let image = 'https://icon-library.com/images/news-icon-free/news-icon-free-7.jpg';
    let storyObj = {
      headline: 'No title',
      image: image,
    };
    // If it's a Google story object, set image of first article as image
    if (story.story === true) {
      if (story.articles[0].image)
        image = story.articles[0].image;
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
  } */



  return (
    <>
      {storyLoaded ? <div className="Feed-container">


        {props.stories.map( (story, i) => {
          // Render a HeadStory from first object in stories array
          if (i === 0) {
            let articleImg = 'https://icon-library.com/images/news-icon-free/news-icon-free-7.jpg';
            if (story.articles[0]) articleImg = story.articles[0].image;
            return <HeadStory setClickedStory={props.setClickedStory} articleThumbnail={articleImg} story={story} key=""/>;
          }
          return false;
        })}

        {props.stories.map((story, i) => {
          // Render a StoryTile per story object (exept first object)
          if (i === 0) {return false;}
          let articleImg = 'https://icon-library.com/images/news-icon-free/news-icon-free-7.jpg';
          if (story.articles[0]) articleImg = story.articles[0].image;
          return <SubStory setClickedStory={props.setClickedStory} articleThumbnail={articleImg} story={story} key={story._id}/>;
        })};


      </div> : <div className="Feed-container"><LoadingSkeleton></LoadingSkeleton></div>}
    </>
  );
}

export default Feed;
