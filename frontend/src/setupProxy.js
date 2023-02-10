const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
<<<<<<< HEAD
    app.use(
        '/',
        createProxyMiddleware({
          target: 'http://localhost:8000',
          changeOrigin: true,
        })
      );
=======
  app.use(
    ['/parking_remain_spaces', '/data'],
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
  /*
  app.use(
    '/data',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
  */
>>>>>>> 15f941f944595396ec9eba6963e3b90d773b944e
};