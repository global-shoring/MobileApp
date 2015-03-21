'use strict';

define(['angular',    
    'src/modules/account/accountController'
],
function (angular, accountController) {
    
    return angular.module('adp.account.module', [])
        .controller('adp.accountController', accountController);
});