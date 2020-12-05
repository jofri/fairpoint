// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import SportsTennisIcon from '@material-ui/icons/SportsTennis';
// import Button from '@material-ui/core/Button';
// import MailIcon from '@material-ui/icons/Mail';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import SettingsIcon from '@material-ui/icons/Settings';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import Drawer from '@material-ui/core/Drawer';

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Avatar from '@material-ui/core/Avatar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import LogoBrain from './logoBrain.svg';
import AssessmentIcon from '@material-ui/icons/Assessment';
import './Navbar.css';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import LogoutIcon from '@material-ui/icons/ExitToApp';



const menuWidth = '55vw';

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
  list: {
    width: menuWidth,
  },
  fullList: {
    width: 'auto',
  },
  listItemText : {
    fontSize: 15,
    fontWeight: '400',
  }, 
  listItemTextMain: {
    fontSize: 18,
    fontWeight: '500',
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
  // const theme = useTheme();
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
        <ListItem button key="profile">
          <ListItemIcon><Avatar>Ed</Avatar></ListItemIcon>
          <ListItemText classes={{primary: classes.listItemTextMain}} primary="Edward Chan" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Analytics">
          <ListItemIcon><AssessmentIcon style={{ fontSize: iconSize }}></AssessmentIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Analytics" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Donate">
          <ListItemIcon><LoyaltyIcon style={{ fontSize: iconSize }}></LoyaltyIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Donate" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="About us">
          <ListItemIcon><InfoIcon style={{ fontSize: iconSize }}></InfoIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="About us" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Terms & Conditions">
          <ListItemIcon><DescriptionOutlinedIcon style={{fontSize: iconSize}}></DescriptionOutlinedIcon></ListItemIcon>
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
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar)}
          style={{ background: '#FAF9F8' }}
        >
          <Toolbar>
            <a href="/">
              <img src={LogoBrain} alt="logo" className="NavBarLogo"/>
            </a>
            <Typography variant="h6" noWrap className={classes.title}>
            Anchored News
            </Typography>
            <IconButton onClick={toggleDrawer('right', true)}>
              <MenuIcon className={classes.menubutton}></MenuIcon>
            </IconButton>
          </Toolbar>
          <div className="NavBarColorLine"></div>
        </AppBar>
      </HideOnScroll>
      <div>
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
    </div>
  );
}
