import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
//import HolderImage from '../story-tiles/HolderImage.jpg';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '94vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1vh',
    height: '20vh',
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
  }
});



export default function SubStory (props) {
  const classes = useStyles();

  // Import useHistory for redirect functionality
  const history = useHistory();

  const clickHandler = () => {
    props.setClickedStory(props.story);
    history.push('/story');
  };

  return (
    <Card className={classes.root} onClick={clickHandler}>
      <CardActionArea className={classes.actionArea}>
        <CardContent>
          <div className={classes.rowOne}>
            <h3>{props.story.title}</h3>
            <img src={props.articleThumbnail.replace('-rw', '')} alt="News Img" className={classes.image}></img>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" className={classes.button}>
                    Read story
        </Button>
      </CardActions>
    </Card>
  );
}