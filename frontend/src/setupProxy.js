const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/parking_remain_spaces', '/data'],
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000',
      secure: false,
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
};