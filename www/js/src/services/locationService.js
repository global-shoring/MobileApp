/**
 * Created by Ramesh on 4/7/2015.
 */

'use strict';

define([], function () {
    var locationService = function (serviceConstants) {
        var self = this;

        self.getCurrentGeoLocation = function () {
            var deferred = $q.defer();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (result) {
                    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        }
    };

    locationService.$inject = ['adp.mobile.constants.serviceConstants'];
    return locationService;
});