/**
 * Created by Ramesh on 3/22/2015.
 */

'use strict';

define(['angular',    
    'src/modules/account/accountController'
],
function (angular, accountController) {
    
    return angular.module('adp.mobile.accountModule', [])
        .controller('adp.mobile.controllers.accountController', accountController);
});