import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainCard: {
    width: '94vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1vh',
    height: '36vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '2%',
  },
  HeadImage : {
    width: '100%',
    height: '24vh',
  },
  HeadText : {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1.5vh',
  },
  SubCard: {
    width: '94vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1vh',
    height: '20vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SubTextWrapper: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '3vw',
    marginRight: '1vw',
  },
  SubText: {
    marginTop: '0.5vh',
    marginBottom: '0.5vh',
  },
  SubImageWrapper: {
    width: '25%',
    height: '12vh',
    // borderRadius: '5%',
    marginLeft: '4vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  SubImage: {
    borderRadius:'5%',
    height: '100%',
  },
});

export default function LoadingSkeleton () {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.mainCard}>
        <Skeleton variant="rect" animation="wave" className={classes.HeadImage}/>    
        <Skeleton animation="wave" className={classes.HeadText} />
        <Skeleton animation="wave" className={classes.HeadText} />
        <Skeleton animation="wave" className={classes.HeadText} />
      </Card>
      <Card className={classes.SubCard}>
        <div className={classes.SubTextWrapper}>
          <Skeleton animation="wave" className={classes.SubText} />
          <Skeleton animation="wave" className={classes.SubText} />
          <Skeleton animation="wave" className={classes.SubText} />
        </div>
        <div className={classes.SubImageWrapper}>
          <Skeleton variant="rect" animation="wave" className={classes.SubImage} />    
        </div>

      </Card>
      <Card className={classes.SubCard}>
        <div className={classes.SubTextWrapper}>
          <Skeleton animation="wave" className={classes.SubText} />
          <Skeleton animation="wave" className={classes.SubText} />
          <Skeleton animation="wave" className={classes.SubText} />
        </div>
        <div className={classes.SubImageWrapper}>
          <Skeleton variant="rect" animation="wave" className={classes.SubImage} />
        </div>
      </Card>
    </div>
  );
}
