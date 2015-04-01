/**
 * Created by GadhamsN on 3/29/2015.
 */

define(['angular','src/modules/location/controllers/locationController'],
    function(angular, locationController){

    return angular.module('adp.mobile.locationModule',[])
        .controller('adp.mobile.controllers.locationController', locationController);
});
