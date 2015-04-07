/**
 * Created by GadhamsN on 3/29/2015.
 */

'use strict';
define([],function(){
    var loginController = function ($rootScope, $scope, $state) {
        
        $scope.user = {
            isAuthenticated: $rootScope.isUserAuthenticated
        };

        $scope.userLogin = function () {
            $rootScope.$broadcast('userAuthentication', {isUserAuthenticated : true});
            $state.go("app.dashboard",{user:$scope.user});
        };
        $scope.userLogoff = function () {
            $rootScope.isUserAuthenticated = false;
        };
    };

    loginController.inject = ['$rootScope','$scope', '$state'];

    return loginController;
});