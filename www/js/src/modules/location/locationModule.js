/**
 * Created by GadhamsN on 3/29/2015.
 */

define(['angular',
    'src/modules/location/locationController',
    'src/modules/location/locationDetailsController'],
    function (angular, locationController, locationDetailsController) {

    return angular.module('adp.mobile.locationModule',[])
        .controller('adp.mobile.controllers.locationController', ['$scope', '$location', 'adp.mobile.services.weatherReportService', locationController])
        .controller('adp.mobile.controllers.locationDetailsController', locationDetailsController);
});
