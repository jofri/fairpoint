import React from 'react';
import './Story-tile.css';

function StoryTile (props) {


  return (
    <>
      <div className="Story-tile-container">
        <h2>{props.story.title}</h2>
        <img src={props.story.articles[0].image} alt=""></img>
      </div>
    </>
  );
}

export default StoryTile;
