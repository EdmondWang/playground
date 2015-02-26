require.config({

  paths: {
    // lib files
    'domReady': ['/lib/requirejs-domReady/domReady'],
    'jquery': ['/lib/jquery/dist/jquery'],
    'bootstrap': ['/lib/bootstrap/dist/js/bootstrap'],
    'angular': ['/lib/angular/angular'],
    'angular-route': ['/lib/angular-route/angular-route'],

  },

  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular'],
      exports: 'angular-route'
    }
  },

  });

require(
  [
    'require',
    'angular',
    'angular-route',
    'jquery',
    '../modules/html5S'
  ],
  function(require, angular, angularRouter, $) {
    require(['domReady!'], function() {
      angular.bootstrap(document, ['html5SModule']);
    });
  }
);

