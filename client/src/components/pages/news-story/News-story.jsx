import React, {useState} from 'react';
import ArticleScroll from './article-scroll/Article-scroll';
import StoryHead from './story-head/Story-head';
import './News-story.css';
import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles';

//USING EXAMPLE JSON 
import example from '../../../example.json';
import MenuPopUp from './menu-pop-up/MenuPopUp';
import Card from '@material-ui/core/Card';
 
// const useStyles = makeStyles(() => ({
//   cardPopup : {
//     zIndex: 10,
//     opacity: 1,
//   },
// }));


function NewsStory () {
  // const classes = useStyles();
  const [menuState, setMenuState] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});
  console.log(menuState, selectedStory, 'HOLDER');


  //   const [NewsStory, setNewsStory] = useState([]);
  console.log(example.stories[0].articles); //ARTICLES ARRAY
  console.log(example.stories[0].title);
  console.log(example.stories[0].pubDate);
  console.log(example.stories[0].contentSnippet);

  const firstArticle = example.stories[0].articles[0];
  //   example.stories[0].articles.shift();
  const articles = example.stories[0].articles;

  return (
    <div>
      <div className="ArticleStoryWrap">
        <StoryHead firstArticle={firstArticle} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="StoryHead"></StoryHead>
        <Divider></Divider>
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
        <Divider></Divider>
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
        <Divider></Divider>
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
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
