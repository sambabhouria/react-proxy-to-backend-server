
/*
Rewrite the Path URL
Whenever there is a change in the URLs, we often rewrite the path of the backend server endpoints. We can do that with the pathRewrite.
Let’s understand the pathRewrite option. For instance, our backend URL /api/settings is changed to 
/api/app/settings and we want to test in development before it goes to production. We can achieve this with the option pathRewrite like below.

*/

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
      pathRewrite: {
        '^/api/settings': '/api/app/settings'
      },
    })
  );
};
