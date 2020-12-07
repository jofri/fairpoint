// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import { makeStyles } from '@material-ui/core/styles';

import React, {useState} from 'react';
import ArticleScroll from './article-scroll/Article-scroll';
import StoryHead from './story-head/Story-head';
import './News-story.css';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Snackbar from '@material-ui/core/Snackbar';
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from 'react-share';
import SnackbarContent from '@material-ui/core/SnackbarContent';



const useStyles = makeStyles((theme) => ({
  paper: {
    width: '85vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    top: '25vh',
    left:'7.5vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '5%',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '50vh'
  },
  divider: {
    width: '95%',
  },
  iconContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  icons: {
    fontSize: 45,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomText: {
    fontSize: 18,
    marginBottom: '1vh',
    marginTop: '1vh',
  },
  sourceText: {
    fontSize: 15,
  },
  SnackbarText: {
    fontSize: 18,
    color: 'white',
    marginBottom: '-5%',
  }
}));


function NewsStory (props) {
  const [menuState, setMenuState] = useState(false);
  const [clickedArticle, setClickedArticle] = useState({});
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = snackBarState;
  const classes = useStyles();

  const openSnack = (newState) => () => {
    console.log('CATCH',clickedArticle.link); 
    navigator.clipboard.writeText(clickedArticle.link);
    setSnackBarState({ open: true, ...newState });
  };

  const handleCloseSnack = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  
  console.log(clickedArticle, 'CLICKED ARTICLE');

  const handleClose = () => {
    setMenuState(false);
  };



  console.log(clickedArticle, 'CLICKED');

  return (
    <div>
      <div className="ArticleStoryWrap">
        <StoryHead story={props.clickedStory} articleThumbnail={props.clickedStory.articles[0].image || 'https://icon-library.com/images/news-icon-free/news-icon-free-7.jpg'} setMenuState={setMenuState} className="StoryHead"></StoryHead>
        {/* <Divider></Divider> */}
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === 1)} setClickedArticle={setClickedArticle} setMenuState={setMenuState} loginUser={props.loginUser} setLoginUser={props.setLoginUser} scrollColor={'#E11F1C'}></ArticleScroll>
        {/* <Divider></Divider> */}
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === (5 || 11))} setClickedArticle={setClickedArticle} setMenuState={setMenuState} loginUser={props.loginUser} setLoginUser={props.setLoginUser} scrollColor={'rgb(160, 87, 160)'}></ArticleScroll>
        {/* <Divider></Divider> */}
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === 10)} setClickedArticle={setClickedArticle} setMenuState={setMenuState} loginUser={props.loginUser} setLoginUser={props.setLoginUser} scrollColor={ '#0195DF'}></ArticleScroll>
      </div>
      <Modal
        open={menuState}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <span><h3 className={classes.sourceText}>{clickedArticle.source}</h3>
            <h1>{clickedArticle.title}</h1></span>
          <Divider className={classes.divider}></Divider>
          <div className={classes.bottomContainer}>
            <h2 className={classes.bottomText}>Share this via:</h2>
            <div className={classes.iconContainer}>
              <IconButton style={{ backgroundColor: '#00aced'}}>
                <TwitterShareButton
                  url={clickedArticle.link}
                  quote={clickedArticle.title}>
                  <TwitterIcon size={45}></TwitterIcon>
                </TwitterShareButton>
              </IconButton>
              <IconButton style={{ backgroundColor: '#3b5998' }}>
                <FacebookShareButton
                  url={clickedArticle.link}
                  quote={clickedArticle.title}
                  style={{outline: 'none'}}>
                  <FacebookIcon size={45} />
                </FacebookShareButton>
              </IconButton>
              <IconButton style={{ backgroundColor: 'grey', color: 'white'}} onClick={openSnack({ vertical: 'bottom', horizontal: 'right' })}>
                <LinkIcon className={classes.icons}></LinkIcon>
              </IconButton>
            </div>
          </div>
        </div>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleCloseSnack}
      ><SnackbarContent message={  
          <h2 className={classes.SnackbarText}>Link Copied to Clipboard!</h2>
        }></SnackbarContent>
      </Snackbar>
    </div>
  );
}

export default NewsStory;
