
fetch('/api/get')
  .then(response => response.json())
  .then(data => console.log('Template data recived form API:', data));

function getUser () {
  return fetch('/auth/current-user')
    .then(response => response.json());
}


export {
  getUser
};