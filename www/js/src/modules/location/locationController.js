/**
 * Created by Ramesh on 4/3/2015.
 */

'use strict';
define([], function () {
    var locationController = function ($scope, $location, weatherReportService) {
        $scope.navigateToView = function(viewName) {
            $location.path(viewName);
        }

        weatherReportService.getWeatherReport().then(function (result) {
            if (result) {
                $scope.weatherReportSummary = result;
            }
        }, function (parameters) {

        });

    };
    locationController.inject = ['$scope', '$location', 'adp.mobile.services.weatherReportService'];
    return locationController;
});