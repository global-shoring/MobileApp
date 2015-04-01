/**
 * Created by GadhamsN on 3/29/2015.
 */

'use strict';
define([],function(){



    var locationController = function($scope, $state){
        $scope.items = ['Chennai','Hyderabad','Banglore','Mumbhai'];

    };
    locationController.inject = ['$scope','$state']
    return locationController;
});