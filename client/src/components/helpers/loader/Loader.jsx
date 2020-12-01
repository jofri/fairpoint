import React from 'react';
import './Loader.css';

function Loader () {
  return (
    <>
      <div className="spin-wrapper">
        <div className="spinner">
          <div className="spinner-circle spinner-circle-outer"></div>
          <div className="spinner-circle-off spinner-circle-inner"></div>
          <div className="spinner-circle spinner-circle-single-1"></div>
          <div className="spinner-circle spinner-circle-single-2"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;

