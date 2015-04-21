/**
 * Created by Ramesh on 4/22/2015.
 */

define([], function () {
    'use strict';
    var associateSearchApiProxy = function ($http, $q, baseApiProxy, apiUtilityService, serviceConstants) {
        var self = this;

        
        self.getAssociates = function (params) {
            var httpConfig = {
                url: apiUtilityService.getApiUrlFromConfig(serviceConstants.associateSearchApi),
                method: serviceConstants.httpVerb.GET,
                type: 'application/json',
                params: params
            };

            return baseApiProxy.getHttpPromiseForReadApi(httpConfig);
        };
    };

    associateSearchApiProxy.$inject = ['$http', '$q', 'adp.mobile.services.baseApiProxy',
        'adp.mobile.services.apiUtilityService',
        'adp.mobile.constants.serviceConstants'];

    return associateSearchApiProxy;
});