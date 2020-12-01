import React from 'react';
import './MenuPopUp.css';

function MenuPopUp (props) {

  const CloseBox = () => {
    props.setMenuState(false);
  };


  return (
    <div className="MenuPopUpWrapper">
      <div className="SelectedStoryDetailsWrap">
        <button onClick={CloseBox} className="CloseButtonMenuPopUp">X</button>
        {/* <h1>MENU POP UP! lalalaal</h1> */}
        <h3>{props.selectedStory.source}</h3>
        <h2>{props.selectedStory.title}</h2>
      </div>
      <div className="SocialMediaIconsWrap">
        <h1>HOLDER SOCIAL MEDIA</h1>
      </div>
    </div>
  );
}

export default MenuPopUp;