"use strict";

define(['angular',
    '../providers/httpProvider'
], function (angular, httpProvider) {

   return angular.module('core.providers', [])
       .provider('adp.providers.httpProvider', [httpProvider]);

});