import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  donateBox: {
    marginTop: '12vh',
    display: 'flex', 
    justifyContent: 'center',
    marginBottom: '5vh'
  },
  
  donorForm: {
    width: '97vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '115vh'
  }
  
});

function Donate () {
  const classes = useStyles();


  return (
    <div className={classes.donateBox}>
      <iframe className={classes.donorForm} title="donatePlease" allowpaymentrequest="" frameBorder="0" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/anchored-news">
      </iframe>    
    </div>
  );
}

export default Donate;

