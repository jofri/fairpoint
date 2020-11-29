import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './style/style.css';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import FourOFour from './components/404';


// Import template API services file
import './services/api';


function App () {
  return (
    <Router>
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'> {/* If user visits root, redict to homepage */}
            <Homepage />
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