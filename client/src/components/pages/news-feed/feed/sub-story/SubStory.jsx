import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import HolderImage from '../story-tiles/HolderImage.jpg';

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

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardContent>
          <div className={classes.rowOne}>
            <h3>Keir Starmer faces shadow cabinet split on support for Brexit deal!</h3>
            <img src={HolderImage} alt="Holder Text" className={classes.image}></img>
          </div> 
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" className={classes.button}>
                    Share
        </Button>
        <Button size="small" color="primary" className={classes.button}>
                    Learn More
        </Button>
      </CardActions>
    </Card>
  );
}