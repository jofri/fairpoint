
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


export {
  getUser,
  getStories
};