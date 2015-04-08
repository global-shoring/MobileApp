/**
 * Created by Ramesh on 4/1/2015.
 */

define([], function () {
    'use strict';
    var weatherReportApiProxy = function ($http, $q, baseApiProxy, apiUtilityService, serviceConstants) {
        var self = this;

        
        self.getWeatherReport = function (params) {
            var httpConfig = {
                url: apiUtilityService.getApiUrlFromConfig(serviceConstants.weatherReportApi),
                method: serviceConstants.httpVerb.GET,
                type: 'application/json',
                params: params
            };

            return baseApiProxy.getHttpPromiseForReadApi(httpConfig);
        };

        self.getWeatherForecast = function (params) {
            var httpConfig = {
                url: apiUtilityService.getApiUrlFromConfig(serviceConstants.weatherForecastApi),
                method: serviceConstants.httpVerb.GET,
                type: 'application/json',
                params: params
            };

            return baseApiProxy.getHttpPromiseForReadApi(httpConfig);
        };

        self.getWeatherForLocation= function(location) {
            var deferred = $q.defer();
           
            $http.get("https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + location + "')&format=json")
                .success(function(data) {
                    deferred.resolve(data.query.results.channel);
                })
                .error(function(err) {
                    console.log('Error retrieving markets');
                    deferred.reject(err);
                });

            return deferred.promise;
        };
    };

    weatherReportApiProxy.$inject = ['$http', '$q', 'adp.mobile.services.baseApiProxy',
        'adp.mobile.services.apiUtilityService',
        'adp.mobile.constants.serviceConstants'];

    return weatherReportApiProxy;
});