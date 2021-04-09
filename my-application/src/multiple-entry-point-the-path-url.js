
/*
Multiple app entries to one API endpoint
Sometimes we have multiple modules with services in our app. We might have a scenario where multiple entries or services will call the same API endpoint.
For example, we have two paths that are needed to be redirected to the same endpoint. This is possible with the following setup.

*/

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api','/api2'],
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': '/api', // rewrite path
      },
    })
  );
};
