/**
 * Created by GadhamsN on 3/29/2015.
 */

define(['angular','src/modules/login/controllers/loginController'],
    function(angular, loginController){

    return angular.module('adp.mobile.loginModule',[])
        .controller('adp.mobile.controllers.loginController', loginController);
});
