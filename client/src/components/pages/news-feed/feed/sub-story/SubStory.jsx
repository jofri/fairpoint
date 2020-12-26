import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  root: {
    width: '94vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1vh',
  },
  image: {
    width: '30%',
    height: '100%',
    borderRadius: '5%',
    marginLeft: '2vw',
  },
  rowOne: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionArea :{
    height: '80%',
  },
  cardActions : {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    fontSize: 12,
  },
  storyTitle : {
    fontSize: '1.8vh'
  }
});


export default function SubStory (props) {
  const classes = useStyles();

  // Import useHistory for redirect functionality
  const history = useHistory();

  const matches = useMediaQuery('(min-width:600px)');

  const clickHandler = () => {
    props.setClickedFromScroll(()=> {
      const oldArray = [...props.clickedFromScroll];
      oldArray[props.tabIndex] = props.index;
      return oldArray;
    });
    props.setClickedFromSwipe(props.tabIndex);
    props.setClickedStory(props.story);
    if (props.story.story) history.push('/story');
    else window.open(props.story.links[0]);
  };

  return (
    <Card className={classes.root} onClick={clickHandler}>
      <CardActionArea className={classes.actionArea}>
        <CardContent>
          <div className={classes.rowOne}>
            <h3 className={classes.storyTitle}>{props.story.title}</h3>
            <img src={matches ? props.articleThumbnail.replace('-rw', '').replace('h100', 'h300').replace('w100', 'w300') : props.articleThumbnail.replace('-rw', '')} alt="News Img" className={classes.image}></img>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}