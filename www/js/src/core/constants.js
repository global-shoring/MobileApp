"use strict";

define(['angular',
        '../constants/serviceConstants',
        '../constants/controllerConstants'
],
function (angular,serviceConstants, controllerConstants) {
    return angular.module('core.constants', [])
        .constant('adp.constants.serviceConstants', serviceConstants)
        .constant('adp.constants.controllerConstants', controllerConstants);

});