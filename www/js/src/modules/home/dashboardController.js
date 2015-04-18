/**
 * Created by Ramesh on 3/22/2015.
 */

define(['require'],
    function (require) {
        'use strict';
        require([]);
        var dashboardController = function ($rootScope, $scope, $q, $location,
            userContext, serviceConstants,  controllerConstants) {

            //Test log to know user object is navigating or not
            console.log('rootScope user dashboard: '+ JSON.stringify($rootScope.user));

            $scope.tiles = [{
                location: 'hyderabad',
                text: 'Hyderabad',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor:'#cccccc'
            },  {
                location: 'pune',
                text: 'Pune',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor: '#dddfcc'
            }, {
                location: 'manila',
                text: 'Manila',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor: '#aa44aa'
            }, {
                location: 'romania',
                text: 'Romania',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor: '#cccccc'
            }, {
                location: 'elpaso',
                text: 'El Paso',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor: '#abc34d'
            }, {
                location: 'augusta',
                text: 'Augusta',
                capacity: 100,
                occupied: 20,
                empty: 80,
                bgColor: '#dddfcc'
            }, {
                location: 'brazil',
                text: 'Brazil',
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