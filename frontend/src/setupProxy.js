const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/parking_remain_spaces', '/parking_spaces', '/data',
      "/A_parking_spaces", "/B_parking_spaces", "/C_parking_spaces", "/D_parking_spaces",
      "/parking_events",
      "/reservation/:id","/delete_reservation/:id", "/reservation"
    ],
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
      secure: false
    })
  );
  
  app.use(
    '/my_car_parking_space/:target',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/my_car_parking_space/:target': '/my_car_parking_space/'
      }
    })
  );
  
};