import React, {useRef} from 'react';
import HeadStory from './story-tiles/HeadStory';
import { useEffect } from 'react';
import './Feed.css';
import SubStory from './sub-story/SubStory';
import LoadingSkeleton from './LoadingSkeleton';
import { Virtuoso } from 'react-virtuoso';
import brainSquare from '../../../../assets/placeholder_brain_square.png';

import useMediaQuery from '@material-ui/core/useMediaQuery';


function Feed (props) {

  // Get top/uk stories from backend
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const [storyLoaded, setStoryLoaded] = React.useState(false);
  const matches = useMediaQuery('(min-width:600px)');
  const virtuoso = useRef(null);

  useEffect(() => {
    async function loadedStories () {
      setStoryLoaded(false);
      const response = await props.setStoryApi();
      props.setStories(response);
      if (response) {
        setStoryLoaded(true);
        if (virtuoso !== null && virtuoso.current !== null) {
          virtuoso.current.scrollToIndex({
            index: props.clickedFromScroll[props.tabIndex]
          });
        }
      }
    }
    loadedStories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(()=>{
    setStoryLoaded(false);
    if (virtuoso !== null && virtuoso.current !== null) {
      virtuoso.current.scrollToIndex({
        index: props.clickedFromScroll[props.tabIndex]
      });
      setStoryLoaded(true);
    }
  },[props.tabIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const GenerateItem = index => {
    const story = props.stories[index];
    let articleImg = brainSquare;
    if (story.articles[0]) articleImg = story.articles[0].image;
    if (index === 0) {
      if (matches) {
        return <SubStory
          tabIndex={props.tabIndex}
          index={index}
          clickedFromScroll={props.clickedFromScroll}
          setClickedFromSwipe={props.setClickedFromSwipe}
          setClickedFromScroll={props.setClickedFromScroll} setClickedStory={props.setClickedStory} articleThumbnail={articleImg} story={story} key=""/>;
      } else {
        return <HeadStory
          tabIndex={props.tabIndex}
          index={index}
          clickedFromScroll={props.clickedFromScroll}
          setClickedFromSwipe={props.setClickedFromSwipe}
          setClickedFromScroll={props.setClickedFromScroll} setClickedStory={props.setClickedStory} articleThumbnail={articleImg} story={story} key=""/>;
      }
    } else {
      return <SubStory
        tabIndex={props.tabIndex}
        index={index}
        clickedFromScroll={props.clickedFromScroll}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll} setClickedStory={props.setClickedStory} articleThumbnail={articleImg} story={story} key={story._id}>{index}</SubStory>;
    }
  };

  return (
    <>
      {storyLoaded ? <div className="Feed-container">
        <Virtuoso ref={virtuoso} style={{ width: '100vw', height: '100vh', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center' }} totalCount={props.stories.length}
          item={GenerateItem} />
      </div> : <div className="Feed-container"><LoadingSkeleton></LoadingSkeleton></div>}
    </>
  );
}

export default Feed;
