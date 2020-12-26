const { createProxyMiddleware } = require('http-proxy-middleware');

// Create proxy to backend server to enable backend API & auth requests if app is in development mode
module.exports = (app) => {
  app.use(
    ['/api', '/auth'],
    createProxyMiddleware({
      target: 'http://localhost:4000'
    })
  );
};