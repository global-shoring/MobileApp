/**
 * Created by Ramesh on 3/22/2015.
 */

"use strict";

define(['angular',
        '../constants/serviceConstants',
        '../constants/controllerConstants'
],
function (angular,serviceConstants, controllerConstants) {
    return angular.module('adp.mobile.core.constants', [])
        .constant('adp.mobile.constants.serviceConstants', serviceConstants)
        .constant('adp.mobile.constants.controllerConstants', controllerConstants);

});