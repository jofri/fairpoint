import React, {useState} from 'react';
import ArticleScroll from './article-scroll/Article-scroll';
import StoryHead from './story-head/Story-head';
import './News-story.css';
import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles';


import MenuPopUp from './menu-pop-up/MenuPopUp';
import Card from '@material-ui/core/Card';


function NewsStory (props) {
  // const classes = useStyles();
  const [menuState, setMenuState] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});


  return (
    <div>
      <div className="ArticleStoryWrap">
        <StoryHead story={props.clickedStory} articleThumbnail={props.clickedStory.articles[0].image || 'https://icon-library.com/images/news-icon-free/news-icon-free-7.jpg'} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="StoryHead"></StoryHead>
        <Divider></Divider>
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === 1)} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
        <Divider></Divider>
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === (5 || 11))} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
        <Divider></Divider>
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === 10)} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
      </div>
      {menuState &&
        <div className="NewsStoryBlackScreen">
          <Card className="MenuPopUp">
            <MenuPopUp setMenuState={setMenuState} selectedStory={selectedStory}></MenuPopUp>
          </Card>
        </div>}
    </div>
  );
}

export default NewsStory;
