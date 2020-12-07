import React from 'react';
import './Article-tile.css';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import {createArticle, createUserHistory} from '../../../../../services/api';


function ArticleTile (props) {

  const ShareClick = () => {
    props.setClickedArticle(props.article);
    props.setMenuState(true);
  };

  function clickHandler () {
    createArticle(props.article)
      .then((res) => res.json())
      .then(res => {
        const articleId = res._id;
        const existingArticle = props.loginUser.article.filter(el => el._id === articleId);

        if (existingArticle.length === 0) {
          createUserHistory(props.loginUser.googleId, articleId)
            .then((res) => res.json())
            .then(res => props.setLoginUser(res)); 
        }
      });
      
  }
  

  return (
    <Card className="ArticleTileCardWrapper" >
      <div className="ArticleTileWrapper">
        <p className="ArticleTileSource">{props.article.source}</p>
        <a href={props.article.link} target="_blank" rel="noreferrer noopener" className="StoryAttribute" onClick={clickHandler}>
          <div className="RowOne">
            <div className="TextOne">
              <h2 className="ArticleTileTitle">{props.article.title}</h2>
            </div>
            <img src={props.article.image.replace('-rw', '')} alt={props.article.subtitle} className="ArticleTileImage"></img>
          </div>
          {/* <p>{props.article.subtitle}</p> */}
        </a>

        <div className="RowTwo">
          <p className="ArticleTileTime">{props.article.time}</p>
          <IconButton onClick={ShareClick}>
            <ShareIcon style={{fontSize: 18,}}></ShareIcon>
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default ArticleTile;


