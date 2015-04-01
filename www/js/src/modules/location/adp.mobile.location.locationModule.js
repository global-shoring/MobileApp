/**
 * Created by GadhamsN on 3/29/2015.
 */

define(['angular','src/modules/location/controllers/adp.mobile.location.locationController'],
    function(angular, locationController){

    return angular.module('adp.mobile.location.locationModule',[])
        .controller('adp.mobile.location.locationController', locationController);
});
