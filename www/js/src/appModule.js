/**
 * Created by Ramesh on 3/22/2015.
 */

'use strict';

define([
  'angular',
  'Q',
  'jquery',
  './coreModule',
  './modules/home/homeModule',
  './modules/account/accountModule',
  './modules/login/loginModule',
  './modules/location/locationModule',
  './modules/weatherReport/weatherReportModule',
  './modules/contacts/contactsModule',
        './modules/events/eventsModule',
        './modules/news/newsModule'
],
  function (angular, Q, $) {
    
      var app = angular.module('adp.mobileApp', [
           'adp.mobile.coreModule',
           'adp.mobile.homeModule',
           'adp.mobile.accountModule',
           'adp.mobile.loginModule',
           'adp.mobile.locationModule',
           'adp.mobile.weatherReportModule',
           'adp.mobile.contactsModule',
          'adp.mobile.eventsModule',
          'adp.mobile.newsModule'
      ]);

      var bootstrap = function (app) {
          var deferred = Q.defer();
          var injector = angular.bootstrap($('#mobileApp'), ['adp.mobileApp']);
          deferred.resolve([injector, app]);

          return deferred.promise;
      };

      return { bootstrap: bootstrap };
  });
