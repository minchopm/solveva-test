const PROXY_CONFIG = [
  {
    context: [
      "/data"
    ],
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    autoRewrite: true,
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
];
module.exports = PROXY_CONFIG;
