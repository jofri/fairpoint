
function getUser () {
  return fetch('/auth/current-user')
    .then(response => response.json())
    .catch(error => console.log('in here', error));
}

function getStories () {
  return fetch('/api/getStories')
    .then(response => response.json())
    .catch(err => console.log(err));
}

function getBusiness () {
  return fetch('/api/getBusiness')
    .then(response => response.json())
    .catch(err => console.log(err));
}
function getSports () {
  return fetch('/api/getSports')
    .then(response => response.json())
    .catch(err => console.log(err));
}
function getScience () {
  return fetch('/api/getScience')
    .then(response => response.json())
    .catch(err => console.log(err));
}
function getHealth () {
  return fetch('/api/getHealth')
    .then(response => response.json())
    .catch(err => console.log(err));
}
function getEntertainment () {
  return fetch('/api/getEntertainment')
    .then(response => response.json())
    .catch(err => console.log(err));
}
function getTechnology () {
  return fetch('/api/getTechnology')
    .then(response => response.json())
    .catch(err => console.log(err));
}
function getWorld () {
  return fetch('/api/getWorld')
    .then(response => response.json())
    .catch(err => console.log(err));
}

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
        // image: articleInfo.image,
        source: articleInfo.source,
        // time: articleInfo.time,
        stance: articleInfo.stance
      })
    });
  } catch (err) {
    console.log(err);
  }
}

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

function updateUserNewsSettings (userId, settings) {
  console.log('in api service', userId, settings);
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