
// Get current user from backend
function getUser () {
  return fetch('/auth/current-user')
    .then(response => response.json())
    .catch(error => console.log('User not logged in / can not get user: ', error));
}

// Object to cache stories
const cache = {
  stories : null,
  business : null,
  sports : null,
  science : null,
  health : null,
  entertainment : null,
  tech : null,
  world : null
};

// Object to store timers
const timers = {
  stories : false,
  business : false,
  sports : false,
  science : false,
  health : false,
  entertainment : false,
  tech : false,
  world : false
};

// Get UK news and cache results
async function getStories () {
  if (cache.stories) return cache.stories;
  cache.stories = await fetch('/api/getStories')
    .then(response => response.json())
    .catch(err => console.log(err));
  if (timers.stories === false) {
    timers.stories = true;
    setTimeout(() => {
      cache.stories = null;
      timers.stories = false;
    }, 480000);
  }
  return cache.stories;
}

async function getBusiness () {
  if (cache.business) return cache.business;
  cache.business = await fetch('/api/getBusiness')
    .then(response => response.json())
    .catch(err => console.log(err));
  if (timers.business === false) {
    timers.business = true;
    setTimeout(() => {
      cache.business = null;
      timers.business = false;
    }, 960000);
  }
  return cache.business;
}

async function getSports () {
  if (cache.sports) return cache.sports;
  cache.sports = await fetch('/api/getSports')
    .then(response => response.json())
    .catch(err => console.log(err));
  if (timers.sports === false) {
    timers.sports = true;
    setTimeout(() => {
      cache.sports = null;
      timers.sports = false;
    }, 960000);
  }
  return cache.sports;
}

async function getScience () {
  if (cache.science) return cache.science;
  cache.science = await fetch('/api/getScience')
    .then(response => response.json())
    .catch(err => console.log(err));
  if (timers.science === false) {
    timers.science = true;
    setTimeout(() => {
      cache.science = null;
      timers.science = false;
    }, 960000);
  }
  return cache.science;
}

async function getHealth () {
  if (cache.health) return cache.health;
  cache.health = await fetch('/api/getHealth')
    .then(response => response.json())
    .catch(err => console.log(err));
  if (timers.health === false) {
    timers.health = true;
    setTimeout(() => {
      cache.health = null;
      timers.health = false;
    }, 960000);
  }
  return cache.health;
}

async function getEntertainment () {
  if (cache.entertainment) return cache.entertainment;
  cache.entertainment = await fetch('/api/getEntertainment')
    .then(response => response.json())
    .catch(err => console.log(err));
  if (timers.entertainment === false) {
    timers.entertainment = true;
    setTimeout(() => {
      cache.entertainment = null;
      timers.entertainment = false;
    }, 960000);
  }
  return cache.entertainment;
}

async function getTechnology () {
  if (cache.tech) return cache.tech;
  cache.tech = await fetch('/api/getTechnology')
    .then(response => response.json())
    .catch(err => console.log(err));
  if (timers.tech === false) {
    timers.tech = true;
    setTimeout(() => {
      cache.tech = null;
      timers.tech = false;
    }, 960000);
  }
  return cache.tech;
}

async function getWorld () {
  if (cache.world) return cache.world;
  cache.world = await fetch('/api/getWorld')
    .then(response => response.json())
    .catch(err => console.log(err));
  if (timers.world === false) {
    timers.world = true;
    setTimeout(() => {
      cache.world = null;
      timers.world = false;
    }, 960000);
  }
  return cache.world;
}

// Store atricle user clicked on in DB
function createArticle (articleInfo) {
  try {
    return fetch('/api/newarticle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: articleInfo.title,
        subtitle: articleInfo.subtitle,
        link: articleInfo.link,
        source: articleInfo.source,
        stance: articleInfo.stance
      })
    });
  } catch (err) {
    console.log(err);
  }
}

// Store atricle history in DB
function createUserHistory (userId, articleInfo) {
  try {
    return fetch('/api/createUserHistory',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        articleInfo
      })
    });
  } catch (err) {
    console.log(err);
  }
}

// Update user profile settings
function updateUserNewsSettings (userId, settings) {
  try {
    return fetch('/api/updateUserNewsSettings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        settings
      })
    });
  } catch (error) {
    console.log(err);
  }
}


export {
  getUser,
  getStories,
  getBusiness,
  getSports,
  getScience,
  getHealth,
  getEntertainment,
  getTechnology,
  getWorld,
  createArticle,
  createUserHistory,
  updateUserNewsSettings
};