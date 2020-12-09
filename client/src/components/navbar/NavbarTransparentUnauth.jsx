import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import './Navbar.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  arrowBackIcon: {
    color: 'white',
    justifyContent: 'flex-start',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  backButton: {
    backgroundColor: 'black',
    opacity: 0.6,
    justifySelf: 'flex-start'
  },
}));


export default function NavBarTransparentUnauth (props) {
  const classes = useStyles();
  let history = useHistory();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
        style={{ background: 'transparent' }}
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.backButton} onClick={history.goBack}>
            <ArrowBackIcon className={classes.arrowBackIcon} style={{fontSize: 18}}></ArrowBackIcon>
          </IconButton>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}