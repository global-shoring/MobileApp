/**
 * Created by Ramesh on 4/12/2015.
 */
define([], function () {
    'use strict';
    var adminApiProxy = function ($http, $q, baseApiProxy, apiUtilityService, serviceConstants) {
        var self = this;

        self.getAdminDetails = function (params) {
            var httpConfig = {
                url: apiUtilityService.getApiUrlFromConfig(serviceConstants.adminDetailsApi),
                method: serviceConstants.httpVerb.GET,
                type: 'application/json',
                params: params
            };

            return baseApiProxy.getHttpPromiseForReadApi(httpConfig);
        };

        self.saveAdminInfo = function (data, params) {
            var httpConfig = {
                url: apiUtilityService.getApiUrlFromConfig(serviceConstants.postAdminInfoApi),
                method: serviceConstants.httpVerb.Post,
                type: 'application/json',
                data:data,
                params: params
            };

            return baseApiProxy.getHttpPromiseForUpdateApi(httpConfig);
        };
       
    };

    adminApiProxy.$inject = ['$http', '$q', 'adp.mobile.services.baseApiProxy',
        'adp.mobile.services.apiUtilityService',
        'adp.mobile.constants.serviceConstants'];

    return adminApiProxy;
});