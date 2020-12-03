import React from 'react';
import './profile.css';
import { Avatar } from '@material-ui/core';
import CheckBox from './checkboxes/CheckBox';
import CheckBoxPreferences from './checkboxes/CheckBoxPreferences';
import Divider from '@material-ui/core/Divider';

function Profile () {


  return (
    <div className="ProfileWrapper">
      <div className="profileRow"><span className="AvatarName"><Avatar>H</Avatar><h4 className="ProfilePageName">Edward Chan</h4></span><p>edwardklc1993@gmail.com</p></div>
      <Divider></Divider>
      <div className="profileRow"><h5>Objective Score</h5><h1>5</h1></div>
      <Divider></Divider>
      <div className="profileColumn">
        <h5 className="ProfileHeaderNews">NewsLetter Preferences</h5>
        <div className="profileCheckBoxWrap">
          <CheckBoxPreferences></CheckBoxPreferences>
        </div>
      </div>
      <Divider></Divider>
      <div className="profileColumn">
        <h5 className="ProfileHeaderNews">News Settings</h5>
        <div className="profileCheckBoxWrap">
          <CheckBox></CheckBox>
        </div>
      </div>
      <Divider></Divider>
    </div>
  );
}

export default Profile;

