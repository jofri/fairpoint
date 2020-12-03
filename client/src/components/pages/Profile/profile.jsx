import React from 'react';
import './profile.css';
import { Avatar } from '@material-ui/core';
import CheckBox from './checkboxes/CheckBox';
import CheckBoxPreferences from './checkboxes/CheckBoxPreferences';

function Profile () {


  return (
    <div className="ProfileWrapper">
      <div className="profileRow"><span className="AvatarName"><Avatar>H</Avatar><h4>Edward Chan</h4></span><p>ROW HOLD</p></div><hr></hr>
      <div className="profileRow"><h5>Objective Score</h5></div><hr></hr>
      <div className="profileColumn">
        <h5>NewsLetter Preferences</h5>
        <div className="profileCheckBoxWrap">
          <CheckBoxPreferences></CheckBoxPreferences>
        </div>
      </div><hr></hr>
      <div className="profileColumn">
        <h5>News Settings</h5>
        <div className="profileCheckBoxWrap">
          <CheckBox></CheckBox>
        </div>
      </div><hr></hr>
    </div>
  );
}

export default Profile;

// World Business Tech Health Sport 
