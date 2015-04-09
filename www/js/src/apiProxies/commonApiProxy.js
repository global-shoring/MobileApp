/**
 * Created by Ramesh on 4/8/2015.
 */
define([], function () {
    'use strict';
    var commonApiProxy = function ($http, $q, baseApiProxy, apiUtilityService, serviceConstants) {
        var self = this;

        self.getGeoLocationDetails = function (locationCoords) {
            var deferred = $q.defer();

            $http.get("http://maps.googleapis.com/maps/api/geocode/json?sensor:true&latlng=" + locationCoords.latitude + "," + locationCoords.longitude)
               .success(function (data) {
                   deferred.resolve(data.results);
               })
               .error(function (err) {
                   console.log('Error retrieving markets');
                   deferred.reject(err);
               });

            return deferred.promise;
        }
    };

    commonApiProxy.$inject = ['$http', '$q', 'adp.mobile.services.baseApiProxy',
        'adp.mobile.services.apiUtilityService',
        'adp.mobile.constants.serviceConstants'];

    return commonApiProxy;
});