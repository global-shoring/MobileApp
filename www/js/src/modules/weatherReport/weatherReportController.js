/**
 * Created by Ramesh sharma on 4/1/2015.
 */

'use strict';
define([], function () {
    var weatherReportController = function ($scope, $state,controllerConstants, weatherReportService) {
        var self = this;
        
        $scope.getWeatherForLocation = function () {
            var location = $state.params.location;
            if (location) {
                var foundLocation = _.find(controllerConstants.adpLocations, function(item) {
                    if (item.location === location.toLowerCase()) {
                        return item;
                    }
                    return null;
                });

                weatherReportService.getWeatherForLocation(foundLocation.coords).then(function (results) {
                    $scope.weatherReportData = results;
                });
            }
        };

        $scope.getWeatherForCurrentLocation = function () {
            weatherReportService.getWeatherForLocation().then(function (results) {
                $scope.weatherReportData = results;
            });
        };

        $scope.getWeatherForLocation();
        //weatherReportService.getWeatherReport().then(function (result) {
        //    debugger;
        //    $scope.locationData = result.location;
        //    $scope.weatherReportData = result.forecast[0];
        //    $scope.weatherforecastData = result.forecast;
        //}, function (parameters) {

        //});

        //weatherReportService.getYahooWeatherReport().then(function (result) {
        //    debugger;
        //    $scope.locationData = result.location;
        //    $scope.weatherReportData = result.forecast[0];
        //    $scope.weatherforecastData = result.forecast;
        //}, function (parameters) {

        //});

    };

    weatherReportController.inject = ['$scope', '$state', 'adp.mobile.constants.controllerConstants',
        'adp.mobile.services.weatherReportService'];

    return weatherReportController;
});