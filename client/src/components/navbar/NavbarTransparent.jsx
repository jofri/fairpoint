import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import './Navbar.css';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import ShareIcon from '@material-ui/icons/Share';


const menuWidth = '45vw';

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
    opacity: 0.5,
    justifySelf: 'flex-end',
  },
  arrowBackIcon: {
    color: 'white',
    justifyContent: 'flex-start',
  },
  toolbar: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    width: '95%',
    backgroundColor: 'transparent',
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
    opacity: 0.5,
    justifySelf: 'flex-start'
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
}));

// function HideOnScroll (props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

export default function NavBarTransparent (props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          <IconButton className={classes.backButton}>
            <ArrowBackIcon className={classes.arrowBackIcon}></ArrowBackIcon>
          </IconButton>
          <div>
            <IconButton className={classes.shareIcon}>
              <ShareIcon className={classes.shareIconPic}></ShareIcon>
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={classes.open}
            >
              <MenuIcon className={classes.menubutton} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Edward Chan'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><Avatar>Ed</Avatar></ListItemIcon>
              <ListItemText primary={<Typography type="body2" style={{ fontSize: 14, fontWeight: '700' }}>{text}</Typography>} style={{ fontSize: 20, }} />
            </ListItem>
          ))}
        </List>
        <List>
          {['Analytics', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <SettingsIcon></SettingsIcon>
              <ListItemText primary={<Typography type="body2" style={{ fontSize: 14, fontWeight: '700' }}>{text}</Typography>} style={{ fontSize: 20, }} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Donate', 'About Us', 'Terms & Conditions', 'Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><LogoutIcon></LogoutIcon></ListItemIcon>
              <ListItemText primary={<Typography type="body2" style={{ fontSize: 14, fontWeight: '700' }}>{text}</Typography>} style={{ fontSize: 20, }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

//profile, logout analytics