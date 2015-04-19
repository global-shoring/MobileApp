/**
 * Created by Ramesh on 4/1/2015.
 */

'use strict';

define([], function () {
    var adminService = function($q, adminApiProxy) {
        var self = this;

        self.getAdminDetails = function(params) {
            var deferred = $q.defer();

            adminApiProxy.getAdminDetails().then(function(result) {
                deferred.resolve(result);
            }, function(err) {
                deferred.reject(err);
            });

            return deferred.promise;
        };

        self.saveAdminInfo = function(data, params) {
            var deferred = $q.defer();

            adminApiProxy.saveAdminInfo().then(function(result) {
                deferred.resolve(result);
            }, function(err) {
                deferred.reject(err);
            });

            return deferred.promise;
        };
    };

    adminService.$inject = ['$q', 'adp.mobile.services.adminApiProxy'];

    return adminService;
});