import React from 'react';
import './login.css';
import GoogleButton from '../../../assets/googleButton.png';

function Login () {


  return (
    <div className="LoginWrapper">
      <h1>Sign In</h1>
      <p className="SignInText">Need an account? Sign Up for free</p>
      <img src={GoogleButton} alt="GoogleButton" className="googleButton"></img>
    </div>
  );
}

export default Login;
