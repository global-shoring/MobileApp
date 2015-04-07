/**
 * Created by Ramesh on 4/3/2015.
 */

'use strict';
define([], function () {
    var locationController = function ($scope, $state, $location, controllerConstants, weatherReportService) {
        $scope.navigateToView = function(viewName) {
            //alert(viewName);
            $location.path(viewName);
        }

        $scope.getWeatherForLocation = function () {
            var location = $state.params.location;
            if (location) {
                var foundLocation = _.find(controllerConstants.adpLocations, function (item) {
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

        $scope.getWeatherForLocation();

    };
    locationController.inject = ['$scope', '$state', '$location', 'adp.mobile.constants.controllerConstants', 'adp.mobile.services.weatherReportService'];
    return locationController;
});