/**
 * Created by Janardhan on 03-04-2015.
 */


'use strict';

define([], function () {
    var eventsController = function ($scope, $state , $location) {
        $scope.collapse = false;
        $scope.singleEvent="";
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

        $scope.expand = function(eventName) {
            $scope.collapse = !$scope.collapse;
            $scope.events.forEach(function(event) {
                if (eventName = event.name) {
                    $scope.singleEvent = event;
                    /* $scope.singleEvent.startDate = event.registration.startDate;
                    alert("from loop "+event.registration.startDate);
                    alert("start "+singleEvent.startDate);
                    $scope.singleEvent.endDate = event.registration.endDate;
                    $scope.singleEvent.eventDate = event.eventDate;*/
                }
            });
        };
    };


    eventsController.inject = ['$scope', '$state', '$location'];
    return eventsController;
});
