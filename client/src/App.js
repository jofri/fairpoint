import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Carrot, pantry } from 'carrot-js';
//*API service
import {getUser} from './services/api';

//*Components
import Loader from './components/helpers/loader/Loader';
import NewsFeed from './components/pages/news-feed/News-feed';
import NewsStory from './components/pages/news-story/News-story';
import Navbar from './components/navbar/Navbar';
import FourOFour from './components/helpers/404';
import Profile from './components/pages/Profile/profile';
import Donate from './components/pages/donate/Donate';
import Analytics from './components/pages/analytics/Analytics';
import CategoryTabs from './components/navbar/CategoryTabs';
import Login from './components/pages/login/login';


import './App.css';


function App () {

  //**Set login user info */
  const [loginUser, setLoginUser] = useState({});
  const [loginstatus, setLoginstatus] = useState(false);
  

  useEffect (() => {
    getUser()
      .then((userInfo) => {
        setLoginUser(userInfo);
        console.log('userInfo', userInfo);
      })
      .catch(err => console.log(err));
  }, []);


  // if (loginUser && loginUser._id) {
  //   console.log('logged in');
  return (
    <Carrot value={pantry}>
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
              <NewsFeed />
            </Route>
            <Route exact path='/story'>
              <NewsStory />
            </Route>
            <Route exact path='/donate'>
              <Donate></Donate>
            </Route>
            <Route exact path='/profile'>
              <Profile></Profile>
            </Route>
            {loginUser && loginUser._id 
              ? <Route exact path='/analytics' >
                <Analytics loginUser = {
                  loginUser ? loginUser : <Loader />}/> 
              </Route> 
              : null} 
            {/* TODO: make an alert or redirect   */}
            <Route exact path='/404'> {/* Specify 404 route */}
              <FourOFour />
            </Route>
            <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
              <FourOFour />
            </Route>
          </Switch>
        </div>
      </Router>
    </Carrot>
  );
} 




export default App;