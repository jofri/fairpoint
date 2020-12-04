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

//USING EXAMPLE JSON 
import example from '../../../example.json';
// import MenuPopUp from './menu-pop-up/MenuPopUp';
// import Card from '@material-ui/core/Card';
 
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


function NewsStory () {
  const [menuState, setMenuState] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});
  console.log(menuState, selectedStory, 'HOLDER');
  const classes = useStyles();


  const handleClose = () => {
    setMenuState(false);
  };


  //   const [NewsStory, setNewsStory] = useState([]);
  console.log(example.stories[0].articles); //ARTICLES ARRAY
  console.log(example.stories[0].title);
  console.log(example.stories[0].pubDate);
  console.log(example.stories[0].contentSnippet);

  const firstArticle = example.stories[0].articles[0];
  //   example.stories[0].articles.shift();
  const articles = example.stories[0].articles;

  

  return (
    <div>
      <div className="ArticleStoryWrap">
        <StoryHead firstArticle={firstArticle} setMenuState={setMenuState} setSelectedStory={setSelectedStory} className="StoryHead"></StoryHead>
        {/* <Divider></Divider> */}
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} scrollColor={'#E11F1C'}></ArticleScroll>
        {/* <Divider></Divider> */}
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} scrollColor={'rgb(160, 87, 160)'}></ArticleScroll>
        {/* <Divider></Divider> */}
        <ArticleScroll articles={articles} setMenuState={setMenuState} setSelectedStory={setSelectedStory} scrollColor={ '#0195DF'}></ArticleScroll>
      </div>
      <Modal
        open={menuState}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <span><h3 className={classes.sourceText}>{selectedStory.source}</h3>
            <h1>{selectedStory.title}</h1></span>
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

