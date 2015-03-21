"use strict";

define(['angular',
    '../services/apiUtilityService',   
    '../services/userContext',
], function (angular, apiUtilityService, userContext) {
    
    return {
        'adp.services.userContext': userContext,
        'adp.services.apiUtilityService': apiUtilityService
    }
});