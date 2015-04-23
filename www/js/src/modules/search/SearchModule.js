/**
 * Created by Ramesh on 21-04-2015.
 */

define(['angular',
    'src/modules/search/searchResultController',
    'src/modules/search/associateSearchService'
],
    function (angular, searchResultController, associateSearchService) {
        return angular.module('adp.mobile.searchModule', [])
            .service('adp.mobile.services.associateSearchService', ['$q', 'adp.mobile.constants.serviceConstants', 'adp.mobile.services.associateSearchApiProxy', associateSearchService])
            .controller('adp.mobile.controllers.searchResultController', ['$scope', '$state', 'adp.mobile.services.associateSearchService', searchResultController]);
    });
