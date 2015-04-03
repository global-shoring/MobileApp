/**
 * Created by Janardhan on 03-04-2015.
 */

'use strict';
define([],function(){
    var eventsController = function($scope, $state){
        $scope.events = [{'name':'company day','registration':{'startDate':'02-04-2015','endDate':'03-04-2015'},eventDate:'10-04-2015'},
            {'name':'family day','registration':{'startDate':'02-12-2015','endDate':'03-12-2015'},eventDate:'12-12-2015'}];

    };
    eventsController.inject = ['$scope', '$state'];
    return eventsController;
});
