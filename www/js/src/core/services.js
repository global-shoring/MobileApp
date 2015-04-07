/**
 * Created by Ramesh on 3/22/2015.
 */

"use strict";

define(['angular',
    '../services/apiUtilityService',   
    '../services/locationService',
    '../services/userContext'
], function (angular, apiUtilityService,locationService, userContext) {
    return {
        'adp.mobile.services.userContext': userContext,
        'adp.mobile.services.apiUtilityService': apiUtilityService,
        'adp.mobile.services.locationService': locationService
    }
});