'use strict';

define([
  'angular',
  'Q',
  'jquery',
  './adp.core.module',
  './adp.home.module',
  './adp.account.module'
],
  function (angular, Q, $) {
    
      var app = angular.module('adp.mobileApp', [
           'adp.core.module',
           'adp.home.module',
           'adp.account.module'
      ]);

      var bootstrap = function (app) {
          var deferred = Q.defer();
          var injector = angular.bootstrap($('#mobileApp'), ['adp.mobileApp']);
          deferred.resolve([injector, app]);

          return deferred.promise;
      };

      return { bootstrap: bootstrap };
  });
