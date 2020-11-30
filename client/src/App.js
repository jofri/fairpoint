import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './style/style.css';

import NewsFeed from './components/pages/news-feed/News-feed';
import NewsStory from './components/pages/news-story/News-story';
import Navbar from './components/navbar/Navbar';
import FourOFour from './components/helpers/404';


// Import template API services file
// import './services/api';


function App () {
  return (
    <Router>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="content">
        <Switch>
          <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
            <NewsFeed />
          </Route>
          <Route exact path='/story'>
            <NewsStory />
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
  );
}

export default App;