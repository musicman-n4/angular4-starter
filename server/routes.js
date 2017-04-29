/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function (app) {

  app.use(function (req, res, next) {
    res.set('X-XSS-Protection', '1; mode=block');

    // IEがコンテンツを sniff してHTML以外のものをHTML扱いしてしまうことを防ぐため
    res.set('X-Content-Type-Options', 'nosniff');

    // contents security polisy
    res.set('Content-Security-Policy', 'default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:');
    res.set('X-WebKit-CSP', 'default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:');
    res.set('X-Content-Security-Policy', 'default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:');

    // 同じサイト内のページでフレームに読み込まれた場合だけ許可（クリックジャッキング攻撃を防止）
    res.set('X-Frame-Options', 'sameorigin');

    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private, post-check=0, pre-check=0');
    res.set('Pragma', 'no-cache');
    next();
  });

  // sample
  app.use('/api/sample', require('./api/sample'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets|filters)/*').get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*').get(function (req, res) {
    res.sendfile(app.get('appPath') + '/index.html');
  });
};
