
/**
 * Created by Ramesh on 3/22/2015.
 */

define(['require'],
    function (require) {
        'use strict';
        require([]);
        var baseController = function ($rootScope, $scope, $location, userContext) {

            $rootScope.$on('userAuthentication', function(x , y) {
                $scope.isUserAuthenticated = y;
            });

            $scope.userLogoff = function () {
                $scope.isUserAuthenticated = null;
                $location.path('login');
            }

            $scope.navigateToView = function(viewName) {
                $location.path('login');
            };

        };

        baseController.$inject = ['$rootScope', '$scope', '$location'];

        return baseController;
    });