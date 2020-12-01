import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//*API service
import {getUser} from './services/api';

//*Components
// import NewsFeed from './components/pages/news-feed/News-feed';
// import NewsStory from './components/pages/news-story/News-story';
import Navbar from './components/navbar/Navbar';
import Analytics from './components/pages/analytics/Analytics';
// import FourOFour from './components/helpers/404';


import './App.css';


function App () {
  
  //**set user login info */
  const [loginUser, setLoginUser] = useState({});

  useEffect (() => {
    getUser()
      .then((userInfo) => setLoginUser(userInfo))
      .catch(err => console.log(err));
  }, []);

  console.log('in app.js', loginUser);

  if (loginUser) {
    return (
      <Router>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
              {/* <NewsFeed /> */}
            </Route>
            <Route exact path='/story'>
              {/* <NewsStory /> */}
            </Route>
            <Route exact path='/analytics'>
              <Analytics loginUser = {
                loginUser}/>
            </Route>
            <Route exact path='/404'> {/* Specify 404 route */}
              {/* <FourOFour /> */}
            </Route>
            <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
              {/* <FourOFour /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
              {/* <NewsFeed /> */}
            </Route>
            <Route exact path='/story'>
              {/* <NewsStory /> */}
            </Route>
            <Route exact path='/404'> {/* Specify 404 route */}
              {/* <FourOFour /> */}
            </Route>
            <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
              {/* <FourOFour /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;