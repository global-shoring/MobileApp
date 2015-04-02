/**
 * Created by GadhamsN on 3/29/2015.
 */

'use strict';
define([],function(){
    var loginController = function($scope, $state){
        $scope.user = {};
        $scope.userLogin = function(){
            $state.go("app.dashboard",{user:$scope.user});
        };
    };

    loginController.inject = ['$scope', '$state'];

    return loginController;
});