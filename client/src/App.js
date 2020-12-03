import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Carrot, pantry } from 'carrot-js';
//*API service
import {getUser} from './services/api';
import './services/stories-api';

//*Components
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
import NavBarTransparent from './components/navbar/NavbarTransparent';


function App () {

  //**Set login user info */
  const [loginUser, setLoginUser] = useState({});
  const [loginstatus, setLoginstatus] = useState(false);
  

  useEffect (() => {
    getUser()
      .then((userInfo) => setLoginUser(userInfo))
      .then(()=> setLoginstatus(true))
      .catch(err => console.log(err));
  }, []);

  console.log('in app.js', loginUser);


  if (loginstatus === true) {
    console.log('login', loginUser);
    return (
      <Carrot value={pantry}>
        <Router>
          <Switch>
            <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
              <CategoryTabs></CategoryTabs>
              <NewsFeed />
            </Route>
            <Route exact path='/story'>
              <NavBarTransparent></NavBarTransparent>
              <NewsStory />
            </Route>
            <Route exact path='/donate'>
              <Donate></Donate>
            </Route>
            <Route exact path='/profile'>
              <Profile></Profile>
            </Route>
            <Route exact path='/analytics'>
              <Analytics loginUser = {
                loginUser}/>
            </Route>
            <Route exact path='/404'> {/* Specify 404 route */}
              <FourOFour />
            </Route>
            <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
              <FourOFour />
            </Route>
          </Switch>
        </Router>
      </Carrot>
    );
  } else {
    console.log('NOT LOGIN RENDER');
    return (
      <Carrot value={pantry}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
              <Navbar />
              <div className="content">
                <CategoryTabs></CategoryTabs>
                <NewsFeed />
              </div>
            </Route>
            <Route exact path='/story'>
              <NewsStory />
            </Route>
            <Route exact path='/donate'>
              <Donate></Donate>
            </Route>
            <Route exact path='/profile'>
              <Navbar />
              <div className="content">
                <Profile></Profile>
              </div>
            </Route>
            <Route exact path='/404'> {/* Specify 404 route */}
              <FourOFour />
            </Route>
            <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
              <FourOFour />
            </Route>
          </Switch>
        </Router>
      </Carrot>
    );
  }

}

export default App;