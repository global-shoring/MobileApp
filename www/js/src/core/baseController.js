define(['require'],
    function (require) {
        'use strict';
        require([]);
        var baseController = function ($rootScope, $scope, $route, $location, userContext) {

        };

        baseController.$inject = ['$rootScope', '$scope', '$route', '$location',
            'adp.services.userContext'];

        return baseController;
    });