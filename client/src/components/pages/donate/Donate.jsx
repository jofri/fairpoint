import React from 'react';
import './donate.css';

function Donate () {
//   let source = 'https://donorbox.org/widget.js';
//   let paypal = true;
  {/* <script src={source} paypalexpress={paypal}></script> */}


  return (
    <div >
      <iframe className="donorForm" title="donatePlease" allowpaymentrequest="" frameBorder="0" name="donorbox" scrolling="yes" seamless="seamless" src="https://donorbox.org/embed/anchored-news">
      </iframe>    
    </div>
  );
}

export default Donate;

