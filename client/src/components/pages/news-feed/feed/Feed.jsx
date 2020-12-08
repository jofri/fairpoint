import React from 'react';
import HeadStory from './story-tiles/HeadStory';
import { useEffect } from 'react';
import './Feed.css';
import SubStory from './sub-story/SubStory';
import LoadingSkeleton from './LoadingSkeleton';
import brainSquare from '../../../../assets/placeholder_brain_square.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Virtuoso } from 'react-virtuoso';

function Feed (props) {

  // Get top/uk stories from backend
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const [storyLoaded, setStoryLoaded] = React.useState(false);

  const matches = useMediaQuery('(min-width:600px)');


  useEffect(() => {
    async function loadedStories () {
      setStoryLoaded(false);
      console.log('Fetch');
      const response = await props.setStoryApi();
      props.setStories(response);
      if (response) {
        setStoryLoaded(true);
      } ///MAYBE RENDER A NO RESPONSE PAGE??
    }
    loadedStories();
  }, []);

  const GenerateItem = index => {
    const story = props.stories[index];
    let articleImg = brainSquare;
    if (story.articles[0]) articleImg = story.articles[0].image;
    if (index === 0) {
      if (matches) {
        return <SubStory
          tabIndex={props.tabIndex}
          index={index}
          setClickedFromSwipe={props.setClickedFromSwipe}

          setClickedFromScroll={props.setClickedFromScroll} setClickedStory={props.setClickedStory} articleThumbnail={articleImg} story={story} key=""/>;
      } else {
        return <HeadStory
          tabIndex={props.tabIndex}
          index={index}
          setClickedFromSwipe={props.setClickedFromSwipe}

          setClickedFromScroll={props.setClickedFromScroll} setClickedStory={props.setClickedStory} articleThumbnail={articleImg} story={story} key=""/>;
      }
    } else {
      return <SubStory
        tabIndex={props.tabIndex}
        index={index}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll} setClickedStory={props.setClickedStory} articleThumbnail={articleImg} story={story} key={story._id}>{index}</SubStory>;
    }
  };

  return (
    <>
      {storyLoaded ? <div className="Feed-container">
        <Virtuoso style={{ width: '100vw', height: '100vh', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center' }} totalCount={props.stories.length}
          item={GenerateItem} />
      </div> : <div className="Feed-container"><LoadingSkeleton></LoadingSkeleton></div>}
    </>
  );
}

export default Feed;
