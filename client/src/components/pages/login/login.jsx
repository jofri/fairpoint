import React from 'react';
import './login.css';
import GoogleButton from '../../../assets/googleButton.png';

function Login () {
  return (
    <>
      <div className="LoginWrapper">
        <h1>Sign up</h1>
        <p className="SignInText">Need an account? Sign Up for free</p>
        <a href="/auth/google"><img src={GoogleButton} alt="GoogleButton" className="googleButton"></img></a>
        <h1>Sign In</h1>
        <p className="SignInText">Do you have account? Sign in now</p>
        <a href="/auth/google"><img src={GoogleButton} alt="GoogleButton" className="googleButton"></img></a>
      </div>
    </>
  );
}

export default Login;
