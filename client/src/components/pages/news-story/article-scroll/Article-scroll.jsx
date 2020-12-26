import React, { useState, useEffect } from 'react';
import './Article-scroll.css';
import ArticleTile from './article-tile/Article-tile';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Card from '@material-ui/core/Card';

function ArticleScroll (props) {
  const [scrollLeft, setScrollLeft] = useState(true);
  const [scrollRight, setScrollRight] = useState(false);
  const [articleState, setArticleState] = useState(true);


  const handleScroll = (e) => {
    if (e.target.scrollLeft < 50) {
      setScrollLeft(false);
    } else {
      setScrollLeft(true);
    }
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const renderArticles = props.articles.map((article) => {
    return (
      <div className="ArticleTile" key={article.title}>
        <ArticleTile
          scrollColor={props.scrollColor}
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
      {scrollLeft && <ArrowBackIosIcon style={{ position: 'absolute', left: '0.6vw', fontSize: '4.8vw', opacity: '0.50' }}></ArrowBackIosIcon>}
      {articleState ? <>{renderArticles}</> : <><Card className="ArticleTileCardWrapper" style={{ marginLeft: '2.5vw', backgroundColor: props.scrollColor}}>
        <div className="ArticleTileWrapper">
          <div className="tileText">
            <h2 className="emptyTileText">No {props.scrollDescription} Stories Available</h2>
          </div>
        </div>
      </Card></> }
      {scrollRight && <ArrowForwardIosIcon style={{ position: 'absolute', right: '-0.3vw', fontSize: '4.8vw', opacity: '0.50'}}></ArrowForwardIosIcon>}
    </div>
  );
}

export default ArticleScroll;
