import React from 'react';
// import '../style/style.css';
import './Navbar.css';
import Loader from './Loader';



function Navbar () {
  return (
    <>
      <div className="test">
        <p>Navbar rendered!</p>
      </div>
      <div className="test2">
        <p>styling test</p>
      </div>
      <Loader />
    </>
  );
}

export default Navbar;
