/**
 * Created by Ramesh on 4/7/2015.
 */

'use strict';

define([], function () {
    var locationService = function ($q,serviceConstants, commonApiProxy) {
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

        self.getGeoLocationDetails = function (locationCoords) {
            var deferred = $q.defer();
            var location = "";
           
            commonApiProxy.getGeoLocationDetails(locationCoords).then(function (results) {
                if (results[0].address_components) {
                    _.each(results[0].address_components, function(addressComp) {
                        if (addressComp.types[0] === "locality") {
                            location = addressComp.long_name;
                        }
                        if (addressComp.types[0] === "country") {
                            location = location + ", " + addressComp.short_name;
                        }
                    });
                }
                deferred.resolve(location);
            });

            return deferred.promise;
        }
    };

    locationService.$inject = ['$q','adp.mobile.constants.serviceConstants', 'adp.mobile.services.commonApiProxy'];
    return locationService;
});