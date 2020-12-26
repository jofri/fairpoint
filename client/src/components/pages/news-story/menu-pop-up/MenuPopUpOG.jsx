import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  iconButton: {
    position: 'absolute',
    top: '3%',
    right: '3%',
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '80%',
  },
  closeIcon: {
    width: '5vw',
    height: '5vw'
  }
}));


function MenuPopUp (props) {
  const classes = useStyles();

  const CloseBox = () => {
    props.setMenuState(false);
  };


  return (
    <div className={classes.menuWrapper}>
      <div className="SelectedStoryDetailsWrap">
        <IconButton onClick={CloseBox} className={classes.iconButton}>
          <CloseIcon className={classes.closeIcon}></CloseIcon>
        </IconButton>
        <h3>{props.selectedStory.source}</h3>
        <h2>{props.selectedStory.title}</h2>
      </div>
      <div className="SocialMediaIconsWrap">
        <h1>HOLDER SOCIAL </h1>
      </div>
    </div>
  );
}

export default MenuPopUp;


