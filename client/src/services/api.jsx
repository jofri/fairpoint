
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




export {
  getUser,
  getStories,
  createArticle,
  createUserHistory
};