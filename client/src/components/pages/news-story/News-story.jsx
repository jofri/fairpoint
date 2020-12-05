import React, {useState} from 'react';
import ArticleScroll from './article-scroll/Article-scroll';
import StoryHead from './story-head/Story-head';
import './News-story.css';
import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    top: '25vh',
    left:'10vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '5%',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '40vh'
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
    fontSize: 35,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomText: {
    fontSize: 16,
    marginBottom: '2vh',
  },
  sourceText: {
    fontSize: 15,
  },
}));


function NewsStory (props) {
  const [menuState, setMenuState] = useState(false);
  const [clickedArticle, setClickedArticle] = useState({});
  const classes = useStyles();


  const handleClose = () => {
    setMenuState(false);
  };


  return (
    <div>
      <div className="ArticleStoryWrap">
        <StoryHead story={props.clickedStory} articleThumbnail={props.clickedStory.articles[0].image} setMenuState={setMenuState} className="StoryHead"></StoryHead>
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === 1)} setClickedArticle={setClickedArticle} setMenuState={setMenuState} scrollColor={'#E11F1C'}></ArticleScroll>
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === (5 || 11))} setClickedArticle={setClickedArticle} setMenuState={setMenuState} scrollColor={'rgb(160, 87, 160)'}></ArticleScroll>
        <ArticleScroll articles={props.clickedStory.articles.filter(article => article.stance === 10)} setClickedArticle={setClickedArticle} setMenuState={setMenuState} scrollColor={ '#0195DF'}></ArticleScroll>
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
              <IconButton style={{ backgroundColor: ' #1DA1F2', color: 'white'}}>
                <TwitterIcon className={classes.icons}></TwitterIcon>
              </IconButton>
              <IconButton style={{ backgroundColor: '#4267B2', color: 'white'}}>
                <FacebookIcon className={classes.icons}></FacebookIcon>
              </IconButton>
              <IconButton style={{ backgroundColor: 'grey', color: 'white' }}>
                <LinkIcon className={classes.icons}></LinkIcon>
              </IconButton>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NewsStory;
