import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//*API service
import { getUser } from './services/api';

//*Components
import Loader from './components/helpers/loader/Loader';
// import NewsFeed from './components/pages/news-feed/News-feed';
import NewsStory from './components/pages/news-story/News-story';
import Navbar from './components/navbar/Navbar';
import FourOFour from './components/helpers/404';
import Profile from './components/pages/Profile/profile';
import Donate from './components/pages/donate/Donate';
import Analytics from './components/pages/analytics/Analytics';


import './App.css';
import NavBarUnauth from './components/navbar/NavBarUnauth';
import NavBarTransparent from './components/navbar/NavbarTransparent';
import CategoryTabs from './components/navbar/CategoryTabs';

// Set background color of app according to user stance
import backgroundCalc from './components/helpers/backgroundCalc';


function App () {

  //**Set login user info */
  const [loginUser, setLoginUser] = useState({});
  const [stories, setStories] = useState([]);
  const [world, setWorld] = useState([]);
  const [business, setBusiness] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [health, setHealth] = useState([]);
  const [science, setScience] = useState([]);
  const [sports, setSports] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [clickedStory, setClickedStory] = useState({});

  const [clickedFromSwipe, setClickedFromSwipe] = useState(0);
  const [clickedFromScroll, setClickedFromScroll] = useState([]);
  const [numberOfTabs, setNumberOfTabs] = useState(8);

  useEffect (() => {
    getUser()
      .then((userInfo) => {
        setLoginUser(userInfo);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect (()=> {
    setClickedFromScroll(new Array(numberOfTabs).fill(0));
  }, [numberOfTabs]);

  const userIsLoggedIn =
    loginUser !== undefined
    && loginUser !== {}
    && loginUser._id !== undefined;

  return (
    /* Sets background color corresponding to user stance */
    <div style={{backgroundColor: backgroundCalc(loginUser)[0]}}>
      <div style={{backgroundColor: `rgba(255, 255, 255, ${backgroundCalc(loginUser)[1]})`}}>
        <Router>
          <Switch>
            <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
              {userIsLoggedIn ?
                <Navbar loginUser={loginUser}></Navbar>
                : <NavBarUnauth></NavBarUnauth>}
              <div className="content">
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
                ></CategoryTabs>
              </div>
            </Route>
            <Route exact path='/story'>
              {clickedStory._id ? <><NavBarTransparent></NavBarTransparent>
                <NewsStory
                  clickedStory={clickedStory}
                  loginUser={loginUser}
                  setLoginUser={setLoginUser}/></> : <FourOFour loginUser={loginUser}/>}
            </Route>
            <Route exact path='/donate'>
              <Navbar
                loginUser={loginUser}/>
              <div className="content">
                <Donate></Donate>
              </div>
            </Route>
            <Route exact path='/profile'>
              {userIsLoggedIn ?
                <Navbar loginUser={loginUser}/>
                : <FourOFour loginUser={loginUser}/>}
              {userIsLoggedIn ?
                <div className="content">
                  <Profile setNumberOfTabs={setNumberOfTabs} loginUser={loginUser}/></div>
                : <></>}
            </Route>
            <Route exact path='/analytics' >
              {userIsLoggedIn ?
                <><Navbar loginUser={loginUser}/>
                  <Analytics loginUser = {loginUser}/></>
                : <Loader/>}
            </Route>
            <Route exact path='/about'>
              <Navbar />
              <div className="content">
                <Profile></Profile>
              </div>
            </Route>
            <Route exact path='/terms'>
              <Navbar />
              <div className="content">
                <Profile></Profile>
              </div>
            </Route>
            {/* TODO: make an alert or redirect   */}
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