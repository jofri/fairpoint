

import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


const menuWidth = '58vw';

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
  title: {
    flexGrow: 1,
    fontSize: '1.6rem',
    color: '#364f6b',
    fontWeight: 'bold',
  },
  menubutton: {
    color: 'white',
    justifySelf: 'flex-end',
  },
  open: {
    backgroundColor: 'black',
    opacity: 0.6,
    justifySelf: 'flex-end',
    marginRight: '0vw'
  },
  arrowBackIcon: {
    color: 'white',
    justifyContent: 'flex-start',
  },
  toolbar: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  shareIcon: {
    backgroundColor: 'black',
    opacity: 0.5,
    margin: '2vw',
  },
  drawer: {
    width: menuWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: menuWidth,
  },
  shareIconPic: {
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  backButton: {
    backgroundColor: 'black',
    opacity: 0.6,
    justifySelf: 'flex-start',
  },
  list: {
    width: menuWidth,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -menuWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  fullList: {
    width: 'auto',
  },
  listItemText: {
    fontSize: 15,
    fontWeight: '400',
  },
  listItemTextMain: {
    fontSize: 18,
    fontWeight: '500',
  }
}));


export default function NavBarTransparent (props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  let iconSize = 25;

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  let history = useHistory();


  const renderDrawer = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/profile" key="profile">
          <ListItemIcon><Avatar src={props.loginUser.photo}></Avatar></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemTextMain }} primary={props.loginUser.username} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="home" component={Link} to="/" >
          <ListItemIcon><HomeIcon style={{ fontSize: iconSize }}></HomeIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Home" />
        </ListItem>
      </List>
      {props.loginUser ? <List>
        <ListItem button component={Link} to="/profile"  key="profile">
          <ListItemIcon><AccountBoxIcon style={{ fontSize: iconSize }}></AccountBoxIcon></ListItemIcon>
          <ListItemText classes={{primary: classes.listItemTextMain}} primary={'Profile'} />
        </ListItem>
      </List> : null}
      <List>
        <ListItem button key="Analytics" component={Link} to="/analytics" >
          <ListItemIcon><AssessmentIcon style={{ fontSize: iconSize }}></AssessmentIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Analytics" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Donate" component={Link} to="/donate" >
          <ListItemIcon><LoyaltyIcon style={{ fontSize: iconSize }}></LoyaltyIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Donate" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="About us" component={Link} to="/about" >
          <ListItemIcon><InfoIcon style={{ fontSize: iconSize }}></InfoIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="About us" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Terms & Conditions">
          <ListItemIcon><DescriptionOutlinedIcon style={{ fontSize: iconSize }}></DescriptionOutlinedIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Terms & Conditions" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Log Out">
          <ListItemIcon><LogoutIcon style={{ fontSize: iconSize }}></LogoutIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Log Out" />
        </ListItem>
      </List>
    </div>
  );


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
          <div>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer('right', true)}
              className={classes.open}
            >
              <MenuIcon className={classes.menubutton} style={{ fontSize: 18 }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {renderDrawer(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}