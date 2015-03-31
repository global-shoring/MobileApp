/**
 * Created by GadhamsN on 3/29/2015.
 */

define(['angular','src/modules/login/controllers/adp.mobile.login.loginController'],
    function(angular, loginController){

    return angular.module('adp.mobile.login.loginModule',[])
        .controller('adp.mobile.login.loginController', loginController);
});
