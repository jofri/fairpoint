
// Give development environment access to .env file
require('dotenv').config();

// Import dependencies
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const apiRouter = require('./server/routers/router');
const authRouter = require('./server/routers/auth_router');
const mongoose = require('mongoose');


// If app is in dev mode
if (process.env.NODE_ENV !== 'production') {
  // Inform developer to use React's localhost port when testing server
  app.get('/', (req, res) => res.status(200).send(`Looks like you are in development mode: Back-end is now listening on port ${process.env.PORT}. Please start front-end server and use while testing the app (http://localhost:3000)`));
}

// Parse API requests as JSON
app.use(express.json());

// Setup login middleware
const cookieSession = require('cookie-session');
const passport = require('passport');
app.use(
  cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 30, // 1month
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Specify api & auth routes
app.use('/api', apiRouter);
app.use('/auth', authRouter);

// Serve static files (index.html) from from build folder
app.use(express.static(path.join(__dirname, '/client/build')));
// Leverage React routing, return requests to React
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// Ping Heroku server every 5 min to prevent sleep
/*
const serverFetch = require('https');
setInterval( () => {
  serverFetch.get('https://front-pages-dev.herokuapp.com/');
}, 300000); */


// Import scraper scripts
const newsScraper = require('./server/scrapers/index');
const categoriesScraper = require('./server/scrapers/categories');

// Start Top-line/UK news scraping
setInterval(() => {
  newsScraper();
}, 480000);

// Set up category scraping at different life-cycles to run every 40 minutes
setTimeout(() => {
  setInterval(() => {
    categoriesScraper('World');
  }, 2400000);
}, 600000);

setTimeout(() => {
  setInterval(() => {
    categoriesScraper('Business');
  }, 2400000);
}, 900000);

setTimeout(() => {
  setInterval(() => {
    categoriesScraper('Technology');
  }, 2400000);
}, 1200000);

setTimeout(() => {
  setInterval(() => {
    categoriesScraper('Entertainment');
  }, 2400000);
}, 1500000);

setTimeout(() => {
  setInterval(() => {
    categoriesScraper('Sports');
  }, 2400000);
}, 1800000);

setTimeout(() => {
  setInterval(() => {
    categoriesScraper('Science');
  }, 2400000);
}, 2100000);

setTimeout(() => {
  setInterval(() => {
    categoriesScraper('Health');
  }, 2400000);
}, 2400000);


// Connect to MongoDB and listen for new requests
server.listen(process.env.PORT, async (req, res) => { // eslint-disable-line no-unused-vars
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    // Function that finds all broadcasts in DB and start their timers
    console.log(`Server connected to DB - listening on port: ${process.env.PORT}`);
  } catch (error) {
    console.log('Could not connect to database', error);  // eslint-disable-line no-console
  }
});


