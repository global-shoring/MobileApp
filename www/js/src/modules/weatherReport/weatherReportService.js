/**
 * Created by Ramesh on 4/1/2015.
 */

'use strict';

define([], function () {
    var weatherReportService = function ($q,serviceConstants, weatherReportApiProxy) {
        var self = this;

        self.getWeatherReport = function (params) {
            //var params = {
            //    q: 'hyderabad, india'
            //};
            var deferred = $q.defer();

            weatherReportApiProxy.getWeatherReport(params).then(function(result) {
                deferred.resolve(result);
            }, function(parameters) {

            });

            return deferred.promise;
        };
    };

    weatherReportService.$inject = ['$q','adp.mobile.services.serviceConstants', 'adp.mobile.services.weatherReportApiProxy'];
    return weatherReportService;
});