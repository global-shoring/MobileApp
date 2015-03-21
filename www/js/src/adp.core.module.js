'use strict';

define([
  'jquery',
  'underscore',
  'bootstrap',
  'angular-animate',
  'ui-router',
   './services/httpInterceptorService',
   'src/apiProxies/baseApiProxy',
   'src/core/apiProxies',
   'src/core/services',
    'src/core/routes',
   'src/core/constants',
   'src/core/providers',
   
   'src/core/utilities',
   'src/core/directives'
],
  function ($, _, bootstrap, angularAnimate,uiRouter,
         httpInterceptorService, baseApiProxy, apiProxies, services) {
     
     
      angular.module('core.apiProxies', [])
         .service('adp.services.baseApiProxy', baseApiProxy);

      angular.module('core.apiProxies')
          .service(apiProxies);

      angular.module('core.services', [])         
          .service(services);

      var app = angular.module('adp.core.module', [
              'ui.bootstrap',
              'ngAnimate',
              'ui.router',

              'core.routes',
              'core.constants',
              'core.providers',
              'core.apiProxies',
              'core.services',
              'core.utilities',
              'core.widgets'
      ]);
      

      app.service('adp.services.httpInterceptorService', httpInterceptorService)        
          .directive("loader", function ($rootScope) {
              return function ($scope, element, attrs) {
                  $scope.$on("loader_show", function () {
                      return element.show();
                  });
                  return $scope.$on("loader_hide", function () {
                      return element.hide();
                  });
              };
          })
          .config(['$httpProvider', function ($httpProvider) {
              $httpProvider.interceptors.push('adp.services.httpInterceptorService');
          }]);

      return app;
  });