import {plant} from 'carrot-js';

function getUser () {
  return fetch('/auth/current-user')
    .then(response => response.json())
    .catch(error => console.log('in here', error));
}

function getHeadlines () {
  return fetch('/api/getStories')
    .then(response => response.json())
    .then(data => plant('stories', data));
}

export {
  getUser,
  getHeadlines
};