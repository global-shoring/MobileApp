/**
 * Created by Ramesh on 3/22/2015.
 */

"use strict";

define(['angular','../providers/httpProvider'
], function (angular, httpProvider) {

    return angular.module('adp.mobile.core.providers', [])
       .provider('adp.mobile.providers.httpProvider', [httpProvider]);

});