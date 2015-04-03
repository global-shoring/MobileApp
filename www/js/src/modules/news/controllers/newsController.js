/**
 * Created by Janardhan on 03-04-2015.
 */

'use strict';
define([],function(){
    var newsController = function($scope, $state){
        $scope.items = ['Chennai','Hyderabad','Banglore','Mumbhai'];

    };
    newsController.inject = ['$scope', '$state'];
    return newsController;
});

