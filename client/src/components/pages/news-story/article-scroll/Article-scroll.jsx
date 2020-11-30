import React from 'react';
import './Article-scroll.css';
import ArticleTile from './article-tile/Article-tile';

function ArticleScroll (props) {

  console.log(props.articles, 'ARTICLES');

  const renderArticles = props.articles.map((article) => {
    return (<div className="ArticleTile" key={article.title}><ArticleTile article={article} setMenuState={props.setMenuState} setSelectedStory={props.setSelectedStory}/></div>);
  });

  return (
    <div className="ArticleScrollWrapper">
      {renderArticles}
    </div>
  );
}

export default ArticleScroll;
