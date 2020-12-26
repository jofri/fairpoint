import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logoBrain from './assets/logoBrain.svg';

ReactDOM.render(
  <React.StrictMode>
    <div className="desktopOverlay">
      <div className="desktopOverlayBox">
        <img src={logoBrain} alt="FairPoint News"/>
        <h2>We&apos;re currently optimizing FairPoint News for desktop - continue to our app by visiting fairpointnews.com via a smartphone device</h2>
      </div>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


