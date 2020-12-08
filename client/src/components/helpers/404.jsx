import React from 'react';
import Navbar from '../navbar/Navbar';

function FourOFour (props) {
  return (
    <>
      {<Navbar loginUser={props.loginUser}/>}
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <h1>404 - Page not found</h1>
    </>
  );
}

export default FourOFour;
