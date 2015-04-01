
/**
 * Created by Ramesh on 3/22/2015.
 */

define(['require'],
    function (require) {
        'use strict';
        require([]);
        var baseController = function ($rootScope, $scope, $location, userContext, bookApiProxy, $modal) {

            $scope.navigateToView = function(viewName) {
                $location.path('login');
            };

        };

        baseController.$inject = ['$rootScope', '$scope', '$location'];

        return baseController;
    });