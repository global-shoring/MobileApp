/**
 * Created by ravadaj on 06/04/15.
 */

'use strict';
define([],function(){
    var eventDetailsController = function($scope, $state){
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

    };
    eventDetailsController.inject = ['$scope', '$state'];
    return eventDetailsController;
});
