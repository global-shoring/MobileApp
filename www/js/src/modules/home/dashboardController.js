/**
 * Created by Ramesh on 3/22/2015.
 */

define(['require'],
    function (require) {
        'use strict';
        require([]);
        var dashboardController = function ($rootScope, $scope, $q, $location,
            userContext, serviceConstants,  controllerConstants) {


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

            $scope.navigateToLocationView  = function(whichLocation) {
                $location.path('location').search('location', whichLocation);
            }
        };

        
        dashboardController.$inject = ['$rootScope', '$scope', '$q', '$location',
                                           'adp.mobile.services.userContext',
                                           'adp.mobile.constants.serviceConstants',
                                           'adp.mobile.constants.controllerConstants'];

        return dashboardController;
    });