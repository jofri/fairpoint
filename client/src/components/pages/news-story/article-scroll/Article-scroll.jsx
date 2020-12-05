import React from 'react';
import './Article-scroll.css';
import ArticleTile from './article-tile/Article-tile';

function ArticleScroll (props) {
  let scrollColor = props.scrollColor;
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
    <div className="ArticleScrollWrapper" style={{backgroundColor: scrollColor}}>
      {renderArticles}
    </div>
  );
}

export default ArticleScroll;
