/**
 * Created by Ramesh sharma on 4/1/2015.
 */

'use strict';
define([], function () {
    var weatherReportController = function ($scope, $state, weatherReportService) {
        var self = this;

        weatherReportService.getWeatherReport().then(function (result) {
            debugger;
            $scope.locationData = result.location;
            $scope.weatherReportData = result.forecast[0];
            $scope.weatherforecastData = result.forecast;
        }, function (parameters) {

        });
    };

    weatherReportController.inject = ['$scope', '$state', 'adp.mobile.services.weatherReportService'];

    return weatherReportController;
});