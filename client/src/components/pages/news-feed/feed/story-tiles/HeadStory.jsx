import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '94vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1vh',
    height: '36vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '2%',
  },
  headlineImage: {
    width: '100%',
    height: '24vh',
  },
  actionArea: {
    height: '90%',
  },
  cardActionsHead: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button : {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  headlineText : {
    fontWeight: '600',
    fontSize: '1.7rem',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0.5vh',
  }
});

export default function HeadStory (props) {
  const classes = useStyles();

  // Import useHistory for redirect functionality
  const history = useHistory();

  const clickHandler = () => {
    props.setClickedStory(props.story);
    if (props.story.story) history.push('/story');
    else window.open(props.story.links[0]);
  };


  return (
    <Card className={classes.root} onClick={clickHandler}>
      <CardActionArea className={classes.actionArea}>
        <img src={props.articleThumbnail.replace('h100', 'h300').replace('w100', 'w500').replace('-rw', '')} alt="Holder Text" className={classes.headlineImage}/>
        <Typography gutterBottom variant="h5" component="h2" className={classes.headlineText}>
          {props.story.title}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
