/**
 * Created by GadhamsN on 3/29/2015.
 */

'use strict';
define([],function(){
    var locationDetailsController = function($scope, $state){
        $scope.items = ['Chennai','Hyderabad','Banglore','Mumbhai'];

    };
    locationDetailsController.inject = ['$scope', '$state'];
    return locationDetailsController;
});