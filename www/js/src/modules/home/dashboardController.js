define(['require'],
    function (require) {
        'use strict';
        require([]);
        var dashboardController = function ($rootScope, $scope, $q, $location, userContext, serviceConstants,
            controllerConstants) {

            $scope.tiles = [{
                location: 'Hyderabad',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor:'#cccccc'
            }, {
                location: 'Pune ',
                capacity: 100,
                occupied: 20, 
                empty: 80,
                bgColor: '#abc34d'
            }, {
                location: '',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor: '#dddfcc'
            }, {
                location: '',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor: '#aa44aa'
            }];
        };

        
        dashboardController.$inject = ['$rootScope', '$scope', '$q', '$location',
                                           'adp.services.userContext',
                                           'adp.constants.serviceConstants',
                                           'adp.constants.controllerConstants'];

        return dashboardController;
    });