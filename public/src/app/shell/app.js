define([
  'plugins/router',
  'durandal/app',
], function (router, app) {
  return {
    router: router,
    activate: function () {
      router.map([
        {
          route: '',
          moduleId: 'shell/static/home',
          title: 'Welcome',
          nav: true
        },{
          route: 'about',
          moduleId: 'shell/static/about',
          title: 'About',
          nav: true
        }
      ]).buildNavigationModel();

      return router.activate();
    }
  };
});