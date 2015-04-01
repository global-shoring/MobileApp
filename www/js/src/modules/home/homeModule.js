/**
 * Created by Ramesh on 3/22/2015.
 */

'use strict';

define(['angular',    
      'src/modules/home/dashboardController'
], function (angular, dashboardController) {

    return angular.module('adp.mobile.homeModule', [])
        .controller('adp.mobile.controllers.dashboardController', ['$rootScope', '$scope', '$q', '$location',
                                           'adp.mobile.services.userContext',
                                           'adp.mobile.constants.serviceConstants',
                                           'adp.mobile.constants.controllerConstants',
                                           dashboardController]);
});