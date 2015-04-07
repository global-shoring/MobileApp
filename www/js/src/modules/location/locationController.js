/**
 * Created by Ramesh on 4/3/2015.
 */

'use strict';
define([], function () {
    var locationController = function ($scope, $location, weatherReportService) {
        $scope.navigateToView = function(viewName) {
            alert(viewName);
            $location.path(viewName);
        }

        $scope.getWeatherForLocation = function () {
            weatherReportService.getWeatherForLocation().then(function (results) {
                $scope.weatherReportData = results;
            });
        };

        $scope.getWeatherForLocation();

    };
    locationController.inject = ['$scope', '$location', 'adp.mobile.services.weatherReportService'];
    return locationController;
});