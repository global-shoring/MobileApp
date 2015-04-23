/**
 * Created by Ramesh on 04-22-2015.
 */

'use strict';
define([], function () {
    var searchResultController = function ($scope, $state, associateSearchService) {

        associateSearchService.getAssociates().then(function(results) {
            $scope.associates = results;
        });
    };
    searchResultController.inject = ['$scope', '$state', 'adp.mobile.services.associateSearchService'];
    return searchResultController;
});

