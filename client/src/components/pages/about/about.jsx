import React from 'react';
import './About.css';
import { Avatar } from '@material-ui/core';
import brainImg from '../../../assets/placeholder_brain_square.png';
import Card from '@material-ui/core/Card';

function About () {
  return (
    <div className="AboutProfileWrapper">
      <Card>
        <div className="profileRow">
          <span className="AvatarName">
            <Avatar src={brainImg}></Avatar>
            <h4 className="ProfilePageName">About us</h4>
          </span>
        </div>
        <div className="AboutProfileRow">
          <br></br>
          <p>FairPoint provides you with every side of the story. We aggregate online media to keep you updated with the latest news, categorized by the UK political spectrum. Our vision is to empower the informed reader, by allowing our readers to track their news intake.</p>
          <br></br>
          <p><b>Sign up for free </b>to receive analytics about your news habits and access ColorShift – a function which shifts the color of your app based on your political stance – keeping you aware of your readership bias.
            For press, partnership or any other inquiries: info@fairpointnews.com</p>
          <br></br>
          <p><i>We take privacy very seriously – we’re not storing any passwords or secret keys on our server. We will never transmit or sell your data to a 3rd party company. FairPoint was created by Oliver, Sooyeon, Edward and Johan as a graduation project during our CodeWorks Immersive Software Engineer bootcamp / Autumn 2020.</i></p>
          <br></br>
        </div>
      </Card>
    </div>
  );
}

export default About;

