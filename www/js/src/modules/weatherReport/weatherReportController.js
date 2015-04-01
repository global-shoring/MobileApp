/**
 * Created by Ramesh sharma on 4/1/2015.
 */

'use strict';
define([], function () {
    var weatherReportController = function($scope, $state, weatherReportService) {
        var self = this, zipCode, cityName, cordinates;
        
        self.showPosition = function (position) {
            var geoLocation = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
           
           weatherReportService.getWeatherReport(geoLocation).then(function (result) {
              $scope.weatherReportData = result;
            }, function (parameters) {

            });
        };

        self.showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $rootScope.$broadcast("onBrowserGeoLocationError", "User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    $rootScope.$broadcast("onBrowserGeoLocationError", "Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    $rootScope.$broadcast("onBrowserGeoLocationError", "The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    $rootScope.$broadcast("onBrowserGeoLocationError", "An unknown error occurred.");
                    break;
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(self.showPosition, self.showError);
        }
    };

    weatherReportController.inject = ['$scope', '$state','adp.mobile.services.weatherReportService'];

    return weatherReportController;
});