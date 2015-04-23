/**
 * Created by Ramesh on 4/22/2015.
 */

'use strict';

define([], function() {
    var asscociateSearchService = function ($q, serviceConstants, associateSearchApiProxy) {
        var self = this;

        self.getAssociates = function () {
            var deferred = $q.defer();

            associateSearchApiProxy.getAssociates().then(function (results) {
                deferred.resolve(results);
            }, function (error) {
                 deferred.resolve(error);
            });
            return deferred.promise;
        }        
    };

    asscociateSearchService.$inject = ['$q', 'adp.mobile.services.serviceConstants','adp.mobile.services.associateSearchApiProxy'];

    return asscociateSearchService;
});