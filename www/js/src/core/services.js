/**
 * Created by Ramesh on 3/22/2015.
 */

"use strict";

define(['angular',
    '../services/apiUtilityService',   
    '../services/userContext'
], function (angular, apiUtilityService, userContext) {
    
    return {
        'adp.mobile.services.userContext': userContext,
        'adp.mobile.services.apiUtilityService': apiUtilityService
    }
});