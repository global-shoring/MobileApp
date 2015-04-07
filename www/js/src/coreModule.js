/**
 * Created by Ramesh on 3/22/2015.
 */

'use strict';

define([
  'jquery',
  'underscore',
  'bootstrap',
  'angular-animate',
  'ui-router',
   './services/httpInterceptorService',
   'src/apiProxies/baseApiProxy',
   'src/controllers/baseController',
   'src/core/apiProxies',
   'src/core/services',
    'src/core/routes',
   'src/core/constants',
   'src/core/providers',
   
   'src/core/utilities',
   'src/core/directives'
],
  function ($, _, bootstrap, angularAnimate,uiRouter,
         httpInterceptorService, baseApiProxy, baseController, apiProxies, services) {
     
     
      angular.module('adp.mobile.core.apiProxies', [])
         .service('adp.mobile.services.baseApiProxy', baseApiProxy);

      angular.module('adp.mobile.core.apiProxies')
          .service(apiProxies);

      angular.module('adp.mobile.core.services', [])
          .service(services);

      var app = angular.module('adp.mobile.coreModule', [
              'ui.bootstrap',
              'ngAnimate',
              'ui.router',

              'adp.mobile.core.routes',
              'adp.mobile.core.constants',
              'adp.mobile.core.providers',
              'adp.mobile.core.apiProxies',
              'adp.mobile.core.services',
              'adp.mobile.core.utilities',
              'adp.mobile.core.widgets'
      ]);
      
     

      app.service('adp.mobile.services.httpInterceptorService', httpInterceptorService)
          .controller('adp.mobile.controllers.baseController', baseController)
          .config(['$httpProvider', function ($httpProvider) {
              $httpProvider.interceptors.push('adp.mobile.services.httpInterceptorService');
          }]);

      app.run(['adp.mobile.services.userContext','$location',
           function (userContext, $location) {
               if (!userContext.getUserInfo()) {
                   $location.path('login');
               }
           }]);
      return app;
  });