import React, { useState, useEffect } from 'react';
import './Article-scroll.css';
import ArticleTile from './article-tile/Article-tile';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function ArticleScroll (props) {
  // let scrollColor = props.scrollColor;
  const [scrollLeft, setScrollLeft] = useState(true);
  const [scrollRight, setScrollRight] = useState(false);
  const [articleState, setArticleState] = useState(true);


  const handleScroll = (e) => {
    // console.log(e.target.scrollLeft, 'LEFT', e.target.clientWidth, 'RIGHT');
    if (e.target.scrollLeft < 50) {
      setScrollLeft(false);
    } else {
      setScrollLeft(true);
    }
    // console.log(e.target.scrollLeft, (e.target.scrollWidth- e.target.clientWidth), 'TESTER');
    if (e.target.scrollLeft > e.target.scrollWidth - (e.target.clientWidth*1.2)) {
      setScrollRight(false);
    } else {
      setScrollRight(true);
    }
  };

  useEffect(() => {
    if (props.articles.length <= 1) {
      setScrollLeft(false);
    }

    if (props.articles.length === 0) {
      setArticleState(false);
    }
  }, []);

  
  const renderArticles = props.articles.map((article) => {
    return (
      <div className="ArticleTile" key={article.title}>
        <ArticleTile 
          article={article} 
          setMenuState={props.setMenuState} 
          setClickedArticle={props.setClickedArticle}
          loginUser = {props.loginUser}
          setLoginUser = {props.setLoginUser}
        />
      </div>);
  });
  


  return (
    <div className="ArticleScrollWrapper"  onScroll={handleScroll}>
      {scrollLeft && <ArrowBackIosIcon style={{ position: 'absolute', left: '0.6vw', fontSize: '4.5vw' }}></ArrowBackIosIcon>}
      {articleState ? <>{renderArticles}</> : <><h1>TO RENDER SOMETHING MEANINGFUL</h1></> }
      {scrollRight && <ArrowForwardIosIcon style={{ position: 'absolute', right: '-0.3vw', fontSize: '4.5vw'}}></ArrowForwardIosIcon>}
    </div>
  );
}

export default ArticleScroll;
