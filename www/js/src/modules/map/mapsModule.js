/**
 * Created by gadhamsn on 4/5/15.
 */

define(['angular','src/modules/map/controllers/mapsController',
        'src/modules/map/services/mapsService'],

    function(angular, mapController, mapsService){

    return angular.module('adp.mobile.mapsModule',[])
        .service('adp.mobile.services.mapsService', mapsService)
        .controller('adp.mobile.controllers.mapsController',['$scope', '$ionicLoading', '$q', '$compile', 'adp.mobile.services.mapsService', 'adp.mobile.constants.controllerConstants',  mapController]);

});