/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');

module.exports = function(app) {
    var env = app.get('env');

    app.set('views', config.root + '/server/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());

    app.use(function(req, res, next) {
        res.header('X-XSS-Protection', '1; mode=block');

        // IEがコンテンツを sniff してHTML以外のものをHTML扱いしてしまうことを防ぐため
        res.header('X-Content-Type-Options', 'nosniff');

        // contents security polisy
        res.header('Content-Security-Policy', 'default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:; script-src \'self\' \'unsafe-eval\'');
        res.header('X-WebKit-CSP', 'default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:; script-src \'self\' \'unsafe-eval\'');
        res.header('X-Content-Security-Policy', 'default-src \'self\' \'unsafe-inline\'; img-src \'self\' data:; script-src \'self\' \'unsafe-eval\'');

        // 同じサイト内のページでフレームに読み込まれた場合だけ許可（クリックジャッキング攻撃を防止）
        res.header('X-Frame-Options', 'sameorigin');

        res.header('Cache-Control', 'no-store, no-cache, must-revalidate, private, post-check=0, pre-check=0');
        res.header('Pragma', 'no-cache');
        next();
    });

    if ('production' === env) {
        app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
        app.use(express.static(path.join(config.root, 'public')));
        app.set('appPath', config.root + '/public');
        app.use(morgan('dev'));
    }

    if ('development' === env || 'test' === env) {
        //app.use(require('connect-livereload')());
        app.use(express.static(path.join(config.root, '.tmp')));
        app.use(express.static(path.join(config.root, 'dist')));
        app.set('appPath', 'dist');
        app.use(morgan('dev'));
        app.use(errorHandler()); // Error handler - has to be last
    }
};
