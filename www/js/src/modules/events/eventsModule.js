/**
 * Created by Janardhan on 03-04-2015.
 */
define(['angular',
        'src/modules/events/controllers/eventsController'],
    function(angular, eventsController, eventDetailsController){

        return angular.module('adp.mobile.eventsModule',[])
            .controller('adp.mobile.controllers.eventsController',['$scope', '$state','$location', eventsController]);
    });