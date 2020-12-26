import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Import authentication service
import { getUser } from './services/api';
import ReactGA from 'react-ga';

// Import components
import Loader from './components/helpers/loader/Loader';
import NewsStory from './components/pages/news-story/News-story';
import Navbar from './components/navbar/Navbar';
import FourOFour from './components/helpers/404';
import Profile from './components/pages/Profile/profile';
import Donate from './components/pages/donate/Donate';
import Analytics from './components/pages/analytics/Analytics';
import About from './components/pages/about/about';
import Terms from './components/pages/terms/terms';

import NavBarUnauth from './components/navbar/NavBarUnauth'; // Unauthenticated navbar for news feed
import NavBarTransparent from './components/navbar/NavbarTransparent'; // Authenticated navbar for news feed
import NavBarTransparentUnauth from './components/navbar/NavbarTransparentUnauth'; // Navbar in story component
import CategoryTabs from './components/navbar/CategoryTabs';
import UnauthCategoryTabs from './components/navbar/UnauthCategoryTabs';

// Set background color of app according to user stance
import backgroundCalc from './components/helpers/backgroundCalc';


function App () {

  // Set login user info to state
  const [loginUser, setLoginUser] = useState({});

  // Set news to state
  const [stories, setStories] = useState([]);
  const [world, setWorld] = useState([]);
  const [business, setBusiness] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [health, setHealth] = useState([]);
  const [science, setScience] = useState([]);
  const [sports, setSports] = useState([]);
  const [technology, setTechnology] = useState([]);

  // Set news story user clicked on to state (to render story component)
  const [clickedStory, setClickedStory] = useState({});
  const [clickedFromSwipe, setClickedFromSwipe] = useState(0);
  const [clickedFromScroll, setClickedFromScroll] = useState([]);
  // Per user settings, set number of category tabs
  const [numberOfTabs, setNumberOfTabs] = useState(8);

  // Save authenticated user to state
  useEffect (() => {
    getUser()
      .then((userInfo) => {
        setLoginUser(userInfo);
      })
      .catch(err => console.log(err));
  }, [setLoginUser]);

  // Set number of news categores per user setting
  useEffect (()=> {
    setClickedFromScroll(new Array(numberOfTabs).fill(0));
  }, [numberOfTabs]);

  // Variable to authenticate user
  const userIsLoggedIn =
    loginUser !== undefined
    && loginUser !== {}
    && loginUser._id !== undefined;

  // Initialize Google Analytics
  ReactGA.initialize('UA-185114095-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    /* Sets background color corresponding to user political stance */
    <div style={{backgroundColor: backgroundCalc(loginUser)[0]}}>
      <div style={{backgroundColor: `rgba(255, 255, 255, ${backgroundCalc(loginUser)[1]})`}}>
        <Router>
          <Switch>
            <Route exact path='/'>
              {/* Render authenticated or unathenticated navbar and content feed */}
              {userIsLoggedIn ?
                <Navbar loginUser={loginUser}></Navbar>
                : <NavBarUnauth></NavBarUnauth>}
              <div className="content">
                {userIsLoggedIn ?
                  <CategoryTabs setClickedStory={setClickedStory}
                    stories={stories}
                    setStories={setStories}
                    world={world}
                    setWorld={setWorld}
                    business={business}
                    setBusiness={setBusiness}
                    entertainment={entertainment}
                    setEntertainment={setEntertainment}
                    health={health}
                    setHealth={setHealth}
                    science={science}
                    setScience={setScience}
                    sports={sports}
                    setSports={setSports}
                    technology={technology}
                    setTechnology={setTechnology}
                    setClickedFromSwipe={setClickedFromSwipe}
                    setClickedFromScroll={setClickedFromScroll}
                    clickedFromSwipe={clickedFromSwipe}
                    clickedFromScroll={clickedFromScroll}
                    loginUser={loginUser}
                    setNumberOfTabs={setNumberOfTabs}
                  ></CategoryTabs>
                  :
                  <UnauthCategoryTabs setClickedStory={setClickedStory}
                    stories={stories}
                    setStories={setStories}
                    world={world}
                    setWorld={setWorld}
                    business={business}
                    setBusiness={setBusiness}
                    entertainment={entertainment}
                    setEntertainment={setEntertainment}
                    health={health}
                    setHealth={setHealth}
                    science={science}
                    setScience={setScience}
                    sports={sports}
                    setSports={setSports}
                    technology={technology}
                    setTechnology={setTechnology}
                    setClickedFromSwipe={setClickedFromSwipe}
                    setClickedFromScroll={setClickedFromScroll}
                    clickedFromSwipe={clickedFromSwipe}
                    clickedFromScroll={clickedFromScroll}
                    setNumberOfTabs={setNumberOfTabs}
                  ></UnauthCategoryTabs>
                }
              </div>
            </Route>
            <Route exact path='/story'>
              {/* Render story component when user clicks story */}
              {clickedStory._id ? <>{userIsLoggedIn ? <NavBarTransparent loginUser={loginUser}></NavBarTransparent>:<NavBarTransparentUnauth></NavBarTransparentUnauth>}
                <NewsStory
                  clickedStory={clickedStory}
                  loginUser={loginUser}
                  setLoginUser={setLoginUser}/></> : <FourOFour loginUser={loginUser}/>}
            </Route>
            <Route exact path='/donate'>
              {/* Render donation page */}
              <Navbar
                loginUser={loginUser}/>
              <div className="content">
                <Donate></Donate>
              </div>
            </Route>
            <Route exact path='/profile'>
              {/* Render profile page */}
              {userIsLoggedIn ?
                <Navbar loginUser={loginUser}/>
                : <FourOFour loginUser={loginUser}/>}
              {userIsLoggedIn ?
                <div className="content">
                  <Profile setNumberOfTabs={setNumberOfTabs} loginUser={loginUser} setLoginUser={setLoginUser}/></div>
                : <></>}
            </Route>
            <Route exact path='/analytics' >
              {/* Render analytics page */}
              {userIsLoggedIn ?
                <><Navbar loginUser={loginUser}/>
                  <Analytics loginUser = {loginUser}/></>
                : <Loader/>}
            </Route>
            <Route exact path='/about' >
              {/* Render about page */}
              {userIsLoggedIn ?
                <><Navbar loginUser={loginUser}/>
                  <About /></>
                : <Loader/>}
            </Route>
            <Route exact path='/terms' >
              {/* Render terms & conditions page */}
              {userIsLoggedIn ?
                <><Navbar loginUser={loginUser}/>
                  <Terms /></>
                : <Loader/>}
            </Route>
            <Route exact path='/404'> {/* Specify 404 route */}
              <FourOFour loginUser={loginUser}/>
            </Route>
            <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
              <FourOFour loginUser={loginUser}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}


export default App;