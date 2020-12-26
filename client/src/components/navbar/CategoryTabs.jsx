import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import NewsFeed from '../pages/news-feed/News-feed';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {
  getStories,
  getBusiness,
  getSports,
  getScience,
  getHealth,
  getEntertainment,
  getTechnology,
  getWorld, } from '../../services/api';


function TabPanel (props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box>
        <Typography>{children}</Typography>
      </Box>

    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function selectedProps (index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    width: '100vw',
  },
  Tab: {
    fontSize: 13,
  },
  indicator: {
    backgroundColor: '#0195df',
  },
  test: {
    backgroundColor: 'green'
  }
}));

export default function CategoryTabs (props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(props.clickedFromSwipe);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const views = [];

  useEffect(()=>{
    props.setNumberOfTabs(views.length);
  }, [views]); // eslint-disable-line react-hooks/exhaustive-deps

  if (props.loginUser.settings && props.loginUser.settings.newssettings.UK) {
    views.push(<TabPanel key='UK' value={value} index={value} dir={theme.direction} style={{backgroundColor:'transparent'}}>
      <NewsFeed
        key='UK'
        tabIndex={value}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.stories}
        setStories={props.setStories}
        setStoryApi={getStories}
        clickedFromScroll={props.clickedFromScroll}
        clickedFromSwipe={props.clickedFromSwipe}
      >
      </NewsFeed>
    </TabPanel>);
  }
  if (props.loginUser.settings && props.loginUser.settings.newssettings.world) {
    views.push(<TabPanel key='world' value={value} index={value} dir={theme.direction}>
      <NewsFeed
        key='world'
        tabIndex={value}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.world}
        setStories={props.setWorld}
        setStoryApi={getWorld}
        clickedFromScroll={props.clickedFromScroll}
        clickedFromSwipe={props.clickedFromSwipe}
      >
      </NewsFeed>
    </TabPanel>);
  }
  if (props.loginUser.settings && props.loginUser.settings.newssettings.business) {
    views.push(<TabPanel key='business' value={value} index={value} dir={theme.direction}>
      <NewsFeed
        key='business'
        tabIndex={value}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.business}
        setStories={props.setBusiness}
        setStoryApi={getBusiness}
        clickedFromScroll={props.clickedFromScroll}
        clickedFromSwipe={props.clickedFromSwipe}
      >
      </NewsFeed>
    </TabPanel>);
  }
  if (props.loginUser.settings && props.loginUser.settings.newssettings.entertainment) {
    views.push(<TabPanel key='entertainment' value={value} index={value} dir={theme.direction}>
      <NewsFeed
        key='entertainment'
        tabIndex={value}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.entertainment}
        setStories={props.setEntertainment}
        setStoryApi={getEntertainment}
        clickedFromScroll={props.clickedFromScroll}
        clickedFromSwipe={props.clickedFromSwipe}
      >
      </NewsFeed>
    </TabPanel>);
  }
  if (props.loginUser.settings && props.loginUser.settings.newssettings.health) {
    views.push(<TabPanel key='health' value={value} index={value} dir={theme.direction}>
      <NewsFeed
        key='health'
        tabIndex={value}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.health}
        setStories={props.setHealth}
        setStoryApi={getHealth}
        clickedFromScroll={props.clickedFromScroll}
        clickedFromSwipe={props.clickedFromSwipe}
      >
      </NewsFeed>
    </TabPanel>);
  }
  if (props.loginUser.settings && props.loginUser.settings.newssettings.sport) {
    views.push(<TabPanel key='sport' value={value} index={value} dir={theme.direction}>
      <NewsFeed
        key='sport'
        tabIndex={value}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.sports}
        setStories={props.setSports}
        setStoryApi={getSports}
        clickedFromScroll={props.clickedFromScroll}
        clickedFromSwipe={props.clickedFromSwipe}
      >
      </NewsFeed>
    </TabPanel>);
  }
  if (props.loginUser.settings && props.loginUser.settings.newssettings.tech) {
    views.push(<TabPanel key='tech' value={value} index={value} dir={theme.direction}>
      <NewsFeed
        key='tech'
        tabIndex={value}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.technology}
        setStories={props.setTechnology}
        setStoryApi={getTechnology}
        clickedFromScroll={props.clickedFromScroll}
        clickedFromSwipe={props.clickedFromSwipe}
      >
      </NewsFeed>
    </TabPanel>);
  }
  if (props.loginUser.settings && props.loginUser.settings.newssettings.science) {
    views.push(<TabPanel key='science' value={value} index={value} dir={theme.direction}>
      <NewsFeed
        key='science'
        tabIndex={value}
        setClickedFromSwipe={props.setClickedFromSwipe}
        setClickedFromScroll={props.setClickedFromScroll}
        setClickedStory={props.setClickedStory}
        stories={props.science}
        setStories={props.setScience}
        setStoryApi={getScience}
        clickedFromScroll={props.clickedFromScroll}
        clickedFromSwipe={props.clickedFromSwipe}
      >
      </NewsFeed>
    </TabPanel>);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
        >
          {props.loginUser.settings ? props.loginUser.settings.newssettings.UK &&
          <Tab label="UK" {...selectedProps(value)} className={classes.Tab} />: null}
          {props.loginUser.settings ? props.loginUser.settings.newssettings.world &&
          <Tab label="World" {...selectedProps(value)} className={classes.Tab} />: null}
          {props.loginUser.settings ? props.loginUser.settings.newssettings.business &&
          <Tab label="Business" {...selectedProps(value)} className={classes.Tab}/>: null}
          {props.loginUser.settings ? props.loginUser.settings.newssettings.entertainment &&
          <Tab label="Entertainment" {...selectedProps(value)} className={classes.Tab}/>: null}
          {props.loginUser.settings ? props.loginUser.settings.newssettings.health &&
          <Tab label="Health" {...selectedProps(value)} className={classes.Tab}/>: null}
          {props.loginUser.settings ? props.loginUser.settings.newssettings.sport &&
          <Tab label="Sports" {...selectedProps(value)} className={classes.Tab}/>: null}
          {props.loginUser.settings ? props.loginUser.settings.newssettings.tech &&
          <Tab label="Tech" {...selectedProps(value)} className={classes.Tab}/>: null}
          {props.loginUser.settings ? props.loginUser.settings.newssettings.science &&
          <Tab label="Science" {...selectedProps(value)} className={classes.Tab}/>: null}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        containerStyle={{backgroundColor:'transparent'}}
      >
        {views}
      </SwipeableViews>
    </div>
  );
}

