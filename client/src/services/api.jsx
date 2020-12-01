
// fetch('/api/get')
//   .then(response => response.json())
//   .then(data => console.log('Template data recived form API:', data));

const URL = '/api/';

async function createUser (data) {
  // eslint-disable-next-line no-unused-vars
  const createUser = await fetch(URL + '/newuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

async function getUser (id) {
  const user = await fetch(URL + 'getUser/' + id)
    .then(response => response.json());
  return user[0];
}


export {
  createUser,
  getUser
};