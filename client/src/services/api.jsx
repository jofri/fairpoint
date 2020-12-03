
function getUser () {
  return fetch('/auth/current-user')
    .then(response => response.json())
    .catch(error => console.log('in here', error));
}


export {
  getUser
};