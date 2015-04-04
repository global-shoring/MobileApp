/**
 * Created by Ramesh on 4/1/2015.
 */

define([], function () {
    'use strict';
    var weatherReportApiProxy = function ($http, $q, baseApiProxy, apiUtilityService, serviceConstants) {
        var self = this;

        this.getWeatherReport = function (params) {
            var httpConfig = {
                url: apiUtilityService.getApiUrlFromConfig(serviceConstants.weatherReportApi),
                method: serviceConstants.httpVerb.GET,
                type: 'application/json',
                params: params
            };

            return baseApiProxy.getHttpPromiseForReadApi(httpConfig);
        };

        this.getWeatherForecast = function (params) {
            var httpConfig = {
                url: apiUtilityService.getApiUrlFromConfig(serviceConstants.weatherForecastApi),
                method: serviceConstants.httpVerb.GET,
                type: 'application/json',
                params: params
            };

            return baseApiProxy.getHttpPromiseForReadApi(httpConfig);
        };

    };

    weatherReportApiProxy.$inject = ['$http', '$q', 'adp.mobile.services.baseApiProxy',
        'adp.mobile.services.apiUtilityService',
        'adp.mobile.constants.serviceConstants'];

    return weatherReportApiProxy;
});