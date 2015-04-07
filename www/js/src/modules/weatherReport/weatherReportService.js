/**
 * Created by Ramesh on 4/1/2015.
 */

'use strict';

define([], function () {
    var weatherReportService = function ($q, serviceConstants, locationService, weatherReportApiProxy) {
        var self = this;
        
        self.getWeatherForCurrentLocation = function () {
            var deferred = $q.defer();
            locationService.getCurrentGeoLocation().then(function (position) {
                deferred.resolve(self.getWeatherForLocation(position));
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        self.getWeatherForLocation = function (locationCoords) {
            var deferred = $q.defer();
            var location = "";

            if (locationCoords) {
                var url = serviceConstants.googleGeoLocationEndPoint + locationCoords.latitude + "," + locationCoords.longitude;

                $.ajax({
                    url: url,
                    dataType: 'json',
                    cache: true,
                }).success(function (data) {
                    if (data.results[0].address_components) {
                        _.each(data.results[0].address_components, function(addressComp) {
                            if (addressComp.types[0] === "locality") {
                                location = addressComp.long_name;
                            }
                            if (addressComp.types[0] === "country") {
                                location = location + ", " + addressComp.short_name;
                            }
                        });
                    }
                    weatherReportApiProxy.getWeatherForLocation(location).then(function (results) {
                        deferred.resolve(weatherTranfromation(results));
                    }, function (error) {
                        deferred.reject(error);
                    });
                });
            }
            
            return deferred.promise;
        };

        var weatherTranfromation = function (data) {
            var transformedResult = {
                astronomy: data.astronomy,
                location: data.location,
                weather: {},
                coords: {
                    lat: data.item.lat,
                    lon: data.item.long
                },
                forecast: data.item.forecast,
                units: data.units
            };


            transformedResult.weather = {
                condition: data.item.condition,
                tempMin: data.item.forecast[0].low,
                tempMax: data.item.forecast[0].high,
                humidity: data.atmosphere.humidity,
                dateTime: data.item.pubDate,
                wind: data.wind,
                pressure: data.atmosphere.pressure,
                description: data.item.description,
                title: data.item.title,
                visibility: data.atmosphere.visibility
            };

            console.log(data);
            console.log(transformedResult);
            return transformedResult;
        };
    };

    weatherReportService.$inject = ['$q', 'adp.mobile.services.serviceConstants','adp.mobile.services.locationService',
        'adp.mobile.services.weatherReportApiProxy'];

    return weatherReportService;
});