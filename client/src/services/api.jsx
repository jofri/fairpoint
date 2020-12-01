function getUser () {
  return fetch('/auth/current-user')
    .then(response => response.json());
  // .catch(error => console.log(error));
}


export {
  getUser
};