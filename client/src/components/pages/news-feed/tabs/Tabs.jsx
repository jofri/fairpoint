import React from 'react';
import './Tabs.css';

function Tabs () {
  return (
    <>
      <div className="Tabs-link-div">

        <div></div>
        <a className="Tabs-link" href="/uk">UK</a>
        <a className="Tabs-link" href="/business">BUSINESS</a>
        <a className="Tabs-link" href="/tech">TECH</a>
        <a className="Tabs-link" href="/entertainment">ENTERTAINMENT</a>
        <a className="Tabs-link" href="/science">SCIENCE</a>
        <a className="Tabs-link" href="/sports">SPORTS</a>
        <a className="Tabs-link" href="/health">HEALTH</a>
        <div></div>

      </div>
    </>
  );
}

export default Tabs;
