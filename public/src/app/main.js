requirejs.config({
  paths: {
    'text': '../vendor/requirejs-text/text',
    'durandal':'../vendor/durandal/js',
    'plugins' : '../vendor/durandal/js/plugins',
    'knockout': '../vendor/knockout.js/knockout',
    'jquery': '../vendor/jquery/jquery'
  }
});

define([
  'durandal/system',
  'durandal/app',
  'durandal/viewLocator'
], function (system, app, viewLocator) {

    system.debug(true);
    app.title = 'DEMO';

    app.configurePlugins({
        router: true,
        widget: true
    });

    app.start().then(function() {

      viewLocator.useConvention('shell', 'views');

      app.setRoot('shell/app');
    });
});