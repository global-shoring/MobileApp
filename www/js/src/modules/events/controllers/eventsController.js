/**
 * Created by Janardhan on 03-04-2015.
 */


'use strict';

define([], function () {
    var eventsController = function ($scope, $state , $location) {
        $scope.collapse = false;
        $scope.events = [{
            "name": "Company day",
            "registration": {"startDate": "02-04-2015", "endDate": "03-04-2015"},
            "eventDate": "10-04-2015"
        },
            {
                "name": "Family day",
                "registration": {"startDate": "02-12-2015", "endDate": "03-12-2015"},
                "eventDate": "12-12-2015"
            }];

        $scope.navigateToView = function(viewName) {
            $location.path(viewName);
        }
        $scope.expand= function(){
            $scope.collapse = !$scope.collapse;
        }
    };


    eventsController.inject = ['$scope', '$state', '$location'];
    return eventsController;
});
