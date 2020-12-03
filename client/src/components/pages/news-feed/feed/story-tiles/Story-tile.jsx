import React from 'react';
import './Story-tile.css';

function StoryTile (props) {


  return (
    <>
      <div className="Story-tile-container">
        <h2>{props.story.headline}</h2>
        <img src={props.story.image} alt=""></img>
      </div>
    </>
  );
}

export default StoryTile;
