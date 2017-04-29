/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');

// Setup server
var app = express();

//proxy
var httpProxy = require('http-proxy');

/*********** プロキシ設定 start ***********/
/*

var proxy = new httpProxy.createProxyServer({target:'http://localhost:8080'});

function apiProxy(host, port) {
  return function(req, res, next) {
    if(req.url.match(new RegExp('^\/api\/'))) {
      // クライアント証明書CNダミー
      req.headers['X-CLIENT-SSL-CN'] = 'dummy';

      res.set('X-XSS-Protection','1; mode=block');

      // IEがコンテンツを sniff してHTML以外のものをHTML扱いしてしまうことを防ぐため
      res.set('X-Content-Type-Options','nosniff');

      // contents security polisy
      res.set('Content-Security-Policy','default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:');
      res.set('X-WebKit-CSP','default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:');
      res.set('X-Content-Security-Policy','default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:');

      // 同じサイト内のページでフレームに読み込まれた場合だけ許可（クリックジャッキング攻撃を防止）
      res.set('X-Frame-Options','sameorigin');

      res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private, post-check=0, pre-check=0');
      res.set('Pragma', 'no-cache');

      proxy.proxyRequest(req, res, {host: host, port: port});
    } else {
      next();
    }
  }
}

//proxy
app.use(apiProxy('localhost', 8080));
*/
/*********** プロキシ設定 end ***********/

/**********  Geo API プロキシ設定 **********/
/*
var geoApiProxy = new httpProxy.createProxyServer({
  target:'http://geoapi.heartrails.com:80'
});

function geoProxy(host, port) {
  return function(req, res, next) {
    if(req.url.match(new RegExp('^\/geoapi\/'))) {
      req.url = req.url.replace( /geoapi/g , "");
      geoApiProxy.proxyRequest(req, res, {target:{host: host, port: port}});
    } else {
      next();
    }
  }
}

app.use(geoProxy('geoapi.heartrails.com', 80));
*/
/**********  Geo API プロキシ設定 **********/

var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;


