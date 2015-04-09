/**
 * Created by Janardhan on 03-04-2015.
 */


'use strict';

define([], function () {
    var eventsController = function ($scope, $state , $location) {
        $scope.events = [{
            "name": "Company day",
            "registration": {"startDate": "02-04-2015", "endDate": "03-04-2015"},
            "eventDate": "10-04-2015",
            "active":false
        },
            {
                "name": "Family day",
                "registration": {"startDate": "02-12-2015", "endDate": "03-12-2015"},
                "eventDate": "12-12-2015",
                "active":false
            }];

        $scope.toggleEvents = function(event) {
            event.active = !event.active;
        };
    };


    eventsController.inject = ['$scope', '$state', '$location'];
    return eventsController;
});
