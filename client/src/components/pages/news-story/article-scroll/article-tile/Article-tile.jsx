import React from 'react';
import './Article-tile.css';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

import {createArticle, createUserHistory} from '../../../../../services/api';


function ArticleTile (props) {

  let articleText = props.article.title;

  if (articleText.split('').length > 100) {
    articleText = articleText.split('');
    articleText = articleText.slice(0, 100);
    articleText.push('.', '.', '.');
    articleText = articleText.join('');
  }

  const ShareClick = () => {
    props.setClickedArticle(props.article);
    props.setMenuState(true);
  };

  function clickHandler () {
    createArticle(props.article)
      .then((res) => res.json())
      .then(res => {
        const articleInfo = res;
        const existingArticle = props.loginUser.article.filter(el => el._id === articleInfo._id);

        if (existingArticle.length === 0) {
          createUserHistory(props.loginUser.googleId, articleInfo)
            .then((res) => res.json())
            .then(res => props.setLoginUser(res));
        }
      });

  }


  return (
    <Card className="ArticleTileCardWrapper"  style={{marginLeft: '2.5vw', backgroundColor: props.scrollColor }}>
      <div className="ArticleTileWrapper">
        <a href={props.article.link} target="_blank" rel="noreferrer noopener" className="StoryAttribute" onClick={clickHandler}>
          <div className="RowOne">
            <div className="TextOne">
              <p className="ArticleTileSource">{props.article.source}</p>
              <h2 className="ArticleTileTitle">{articleText}</h2>
            </div>
            <img src={props.article.image.replace('-rw', '')} alt={props.article.subtitle.split('').slice(0, 110).join('')} className="ArticleTileImage"></img>
          </div>
        </a>

        <div className="RowTwo">
          <p className="ArticleTileTime">{props.article.time}</p>
          <IconButton onClick={ShareClick} style={{ alignSelf: 'center'}}>
            <ShareIcon style={{fontSize: 18,}}></ShareIcon>
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default ArticleTile;


