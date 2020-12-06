// // import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// // import SportsTennisIcon from '@material-ui/icons/SportsTennis';
// // import Button from '@material-ui/core/Button';
// // import MailIcon from '@material-ui/icons/Mail';
// // import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// // import SettingsIcon from '@material-ui/icons/Settings';
// // import InboxIcon from '@material-ui/icons/MoveToInbox';
// // import Drawer from '@material-ui/core/Drawer';

// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Slide from '@material-ui/core/Slide';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// // import Avatar from '@material-ui/core/Avatar';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import LogoBrain from './logoBrain.svg';
// // import AssessmentIcon from '@material-ui/icons/Assessment';
// import './Navbar.css';
// // import LoyaltyIcon from '@material-ui/icons/Loyalty';
// import InfoIcon from '@material-ui/icons/Info';
// // import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
// // import LogoutIcon from '@material-ui/icons/ExitToApp';
// import { Route, MemoryRouter } from 'react-router';
// import { Link as RouterLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Paper from '@material-ui/core/Paper';



// const menuWidth = '55vw';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//             background: 'red',
//         }),
//     },
//     title: {
//         flexGrow: 1,
//         fontSize: '1.6rem',
//         color: '#364f6b',
//         fontWeight: 'bold',
//     },
//     menubutton: {
//         height: '5vh',
//         width: '5vw',
//         color: '#364f6b',
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: menuWidth,
//         overflow: 'hidden',
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0, 1),
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-start',
//         height: '8.5vh'
//     },
//     list: {
//         width: menuWidth,
//     },
//     fullList: {
//         width: 'auto',
//     },
//     listItemText: {
//         fontSize: 15,
//         fontWeight: '400',
//     },
//     listItemTextMain: {
//         fontSize: 18,
//         fontWeight: '500',
//     }
// }));



// function HideOnScroll (props) {
//     const { children, window } = props;
//     const trigger = useScrollTrigger({ target: window ? window() : undefined });

//     return (
//         <Slide appear={false} direction="down" in={!trigger}>
//             {children}
//         </Slide>
//     );
// }



// export default function NavBar (props) {
//     const classes = useStyles();
//     // const theme = useTheme();
//     const [state, setState] = React.useState({
//         right: false,
//     });

//     // let iconSize = 25;

//     const toggleDrawer = (anchor, open) => (event) => {
//         if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };

//     function ListItemLink (props) {
//         const { icon, primary, to } = props;
//         console.log(icon, primary, to, 'HELP');
//         const renderLink = React.useMemo(
//             () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
//             [to],
//         );

//         return (
//             <li>
//                 <ListItem button component={renderLink}>
//                     {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
//                     <ListItemText primary={primary} />
//                 </ListItem>
//             </li>
//         );
//     }

//     ListItemLink.propTypes = {
//         icon: PropTypes.element,
//         primary: PropTypes.string.isRequired,
//         to: PropTypes.string.isRequired,
//     };

//     const renderDrawer = (anchor) => (
//         <div
//             className={clsx(classes.list, {
//                 [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//             })}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <MemoryRouter initialEntries={['/']} initialIndex={0}>
//                 <Route>
//                     {({ location }) => {
//                         console.log(location.pathname, 'HELLO'); (
//                             <RouterLink to={location.pathname}></RouterLink>
//                         );
//                     }}
//                 </Route>
//                 <Paper elevation={0}>
//                     <List aria-label="main mailbox folders">
//                         <ListItemLink to="/donate" primary="Inbox" icon={<InfoIcon />} />
//                         <ListItemLink to="/drafts" primary="Drafts" icon={<InfoIcon />} />
//                     </List>
//                     <Divider />
//                     <List aria-label="secondary mailbox folders">
//                         <ListItemLink to="/trash" primary="Trash" />
//                         <ListItemLink to="/profile" primary="Spam" />
//                     </List>
//                 </Paper>
//             </MemoryRouter>
//         </div>
//     );

//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <HideOnScroll {...props}>
//                 <AppBar
//                     position="fixed"
//                     className={clsx(classes.appBar)}
//                     style={{ background: '#FAF9F8' }}
//                 >
//                     <Toolbar>
//                         <a href="/">
//                             <img src={LogoBrain} alt="logo" className="NavBarLogo" />
//                         </a>
//                         <Typography variant="h6" noWrap className={classes.title}>
//                             Anchored News
//             </Typography>
//                         <IconButton onClick={toggleDrawer('right', true)}>
//                             <MenuIcon className={classes.menubutton}></MenuIcon>
//                         </IconButton>
//                     </Toolbar>
//                     <div className="NavBarColorLine"></div>
//                 </AppBar>
//             </HideOnScroll>
//             <div>
//                 {['right'].map((anchor) => (
//                     <React.Fragment key={anchor}>
//                         <SwipeableDrawer
//                             anchor={anchor}
//                             open={state[anchor]}
//                             onClose={toggleDrawer(anchor, false)}
//                             onOpen={toggleDrawer(anchor, true)}
//                         >
//                             {renderDrawer(anchor)}
//                         </SwipeableDrawer>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </div>
//     );
// }