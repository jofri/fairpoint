// import React, {useState, useEffect} from 'react';
import React from 'react';
import './Analytics.css';
import Loader from '../../helpers/loader/Loader';

function Analytics (props) {

  console.log('props',props.loginUser);
    
  return !props ? <Loader /> : (
    <>
      <h1>Analytics page!</h1> 
    </>
  );
}

export default Analytics;
