// import LogoutIcon from '@material-ui/icons/ExitToApp';
// import Avatar from '@material-ui/core/Avatar';
// import SettingsIcon from '@material-ui/icons/Settings';
// import SportsTennisIcon from '@material-ui/icons/SportsTennis';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import Drawer from '@material-ui/core/Drawer';
// import MailIcon from '@material-ui/icons/Mail';
// import List from '@material-ui/core/List';


import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import LogoBrain from './logoBrain.svg';
import './Navbar.css';
import Backdrop from '@material-ui/core/Backdrop';
import ButtonBase from '@material-ui/core/ButtonBase';
import FacebookSignIn from '../../assets/facebookButton.png';
import GoogleSignIn from '../../assets/googleButton.png';
import TwitterSignIn from '../../assets/twitterButton.png';



import Button from '@material-ui/core/Button';


const menuWidth = '43vw';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      background: 'red',
    }),
  },
  title: {
    flexGrow: 1,
    fontSize: '1.6rem',
    color: '#364f6b',
    fontWeight: 'bold',
  },
  menubutton: {
    height: '5vh',
    width: '5vw',
    color: '#364f6b',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: menuWidth,
    overflow: 'hidden',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    height: '8.5vh'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    borderRadius: '5%',
    width: '80%',
    height: '45vh',
    position: 'absolute',
    top: '30vh',
    textAlign: 'center',
  },
  buttonHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  google: {
    width: '90%',
    borderRadius: '5%',
    // backgroundColor: 'red',
  },
  facebook: {
    borderRadius: '4%',
    width: '87%',
  }, 
  buttonBase: {
    width: 'fit-content',
  }
}));

function HideOnScroll (props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar (props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignIn = () => {
    handleOpen();
  };

  const facebookClick = () => {
    console.log('FB');
  };
  const twitterClick = () => {
    console.log('TW');
  };
  const googleClick = () => {
    console.log('GOOGLE');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar)}
          style={{ background: '#FAF9F8' }}
        >
          <Toolbar>
            <a href="/">
              <img src={LogoBrain} alt="logo" className="NavBarLogo" />
            </a>
            <Typography variant="h6" noWrap className={classes.title}>
                            Anchored News UnAuth
            </Typography>
            <Button color="primary" style={{fontSize: 14,}} onClick={handleSignIn}>
                          Sign In
            </Button>
          </Toolbar>
          <div className="NavBarColorLine"></div>
        </AppBar>
      </HideOnScroll>
      <Modal
        aria-labelledby="login-box"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.buttonHolder}>
              <h1>Login with the Following Methods:</h1>
              <ButtonBase
                className={classes.buttonBase}
                focusRipple
                onClick={facebookClick}>
                <img src={FacebookSignIn} alt="facebook" className={classes.facebook}></img>
              </ButtonBase>
              <ButtonBase
                className={classes.buttonBase}
                focusRipple
                onClick={twitterClick}>
                <img src={TwitterSignIn} alt="twitter" className={classes.google}></img>
              </ButtonBase>
              <ButtonBase
                className={classes.buttonBase}
                focusRipple
                onClick={googleClick}>
                <img src={GoogleSignIn} alt="google" className={classes.google}></img>
              </ButtonBase>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}