/**
 * Created by gadhamsn on 4/5/15.
 */

define(['angular','src/modules/map/controllers/mapsController',
        'src/modules/map/services/mapsService',
        'src/modules/map/directives/mapDirective'],

    function(angular, mapController, mapsService, mapDirective){

    return angular.module('adp.mobile.mapsModule',[])
        .service('adp.mobile.services.mapsService', mapsService)
        .directive("renderMap", mapDirective)
        .controller('adp.mobile.controllers.mapsController',['$scope','$state', 'adp.mobile.constants.controllerConstants', mapController]);

});