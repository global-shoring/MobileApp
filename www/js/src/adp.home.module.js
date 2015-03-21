'use strict';

define(['angular',    
      'src/modules/home/dashboardController'
], function (angular, dashboardController) {

    return angular.module('adp.home.module', [])
        .controller('adp.dashboardController', ['$rootScope', '$scope', '$q', '$location',
                                           'adp.services.userContext',
                                           'adp.constants.serviceConstants',
                                           'adp.constants.controllerConstants', dashboardController]);
});