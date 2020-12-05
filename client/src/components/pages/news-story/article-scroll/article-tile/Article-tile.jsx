import React from 'react';
import './Article-tile.css';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import {saveArticle} from '../../../../../services/api';


function ArticleTile (props) {

  const ShareClick = () => {
    props.setMenuState(true);
  };

  function clickHandler () {
    saveArticle(props.article);
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
            <img src={props.article.image} alt={props.article.subtitle} className="ArticleTileImage"></img>
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
