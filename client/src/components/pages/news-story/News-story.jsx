import React, {useState} from 'react';
import ArticleScroll from './article-scroll/Article-scroll';
import StoryHead from './story-head/Story-head';
import './News-story.css';

//USING EXAMPLE JSON 
import example from '../../../example.json';
import MenuPopUp from './menu-pop-up/MenuPopUp';
 


function NewsStory () {
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
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="ArticleScroll"></ArticleScroll>
      </div>
      {menuState && <div className="MenuPopUp">
        <MenuPopUp setMenuState={setMenuState} selectedStory={selectedStory}></MenuPopUp>
      </div>}
    </div>  
  );
}

export default NewsStory;
