import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HolderImage from './HolderImage.jpg';

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
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0.5vh',
  }
});

export default function HeadStory (props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <>
          <img src={HolderImage} alt="Holder Text" className={classes.headlineImage}/> 
        </>
        <Typography gutterBottom variant="h5" component="h2" className={classes.headlineText}>
           Boris orders Barnies to respect UKs fundamental Brexit aims Were taking back Control
        </Typography>
      </CardActionArea>
      <CardActions className={classes.cardActionsHead}>
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
