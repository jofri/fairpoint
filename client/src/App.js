import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Carrot, pantry } from 'carrot-js';

//*API service
import {getUser} from './services/api';

//*Components
import NewsFeed from './components/pages/news-feed/News-feed';
import NewsStory from './components/pages/news-story/News-story';
import Navbar from './components/navbar/Navbar';
import FourOFour from './components/helpers/404';
import Profile from './components/pages/Profile/profile';
import Donate from './components/pages/donate/Donate';
import Analytics from './components/pages/analytics/Analytics';
import Login from './components/pages/login/login';

import './App.css';


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

  //TODO: Create logout button: change loginstatus into false again


  if (loginstatus === true) {
    console.log('login', loginUser);
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
          </div>
        </Router>
      </Carrot>
    );
  } else {
    console.log('logout', loginUser);
    return (
      <Carrot value={pantry}>
        <Router>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path='/login'>
                <Login />
              </Route>
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

}

export default App;