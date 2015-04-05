/**
 * Created by Ramesh on 4/1/2015.
 */

define(['angular',
    'src/modules/weatherReport/weatherReportController',
    'src/modules/weatherReport/weatherReportService'
],
    function (angular, weatherReportController, weatherReportService, yahooWeatherService) {
       
        return angular.module('adp.mobile.weatherReportModule', [])
            .service('adp.mobile.services.weatherReportService', ['$q','adp.mobile.constants.serviceConstants', 'adp.mobile.services.weatherReportApiProxy', weatherReportService])
            .controller('adp.mobile.controllers.weatherReportController', ['$scope', '$state', 'adp.mobile.services.weatherReportService', weatherReportController]);
    });
