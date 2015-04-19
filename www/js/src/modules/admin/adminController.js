/**
 * Created by Ramesh on 04/10/15.
 */

'use strict';
define([], function () {
    var adminController = function ($scope, $state, adminService) {

        $scope.isNewsFormVisible = false;
        $scope.isEventFormVisible = false;
        $scope.adminViewModel = {};

        adminService.getAdminDetails().then(function(results) {
            if (results) {
                $scope.adminViewModel = result;
                $scope.eventsList = results.events;
                $scope.newsList = results.news;
            }
        }, function() {
            
        });


        $scope.showEventForms = function() {
            $scope.isEventFormVisible = true;
        };

        $scope.showNewForms = function() {
            $scope.isNewsFormVisible = true;
        };

        $scope.saveNewNews = function() {
            $scope.isNewsFormVisible = false;

            adminService.saveAdminInfo().then(function(result) {

            });
        };

        $scope.saveNewEvent = function() {
            $scope.isEventFormVisible = false;
            
            adminService.saveAdminInfo().then(function (result) {
               
            });
        };
    };

    adminController.inject = ['$scope', '$state','adp.mobile.services.adminService'];

    return adminController;
});
