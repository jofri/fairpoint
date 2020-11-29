
fetch('/api/get')
  .then(response => response.json())
  .then(data => console.log('Template data recived form API:', data));



