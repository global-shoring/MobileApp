/**
 * Created by Ramesh on 4/1/2015.
 */

'use strict';

define([], function () {
    var weatherReportService = function ($q,serviceConstants, weatherReportApiProxy) {
        var self = this;
        
        var getGeoLocation = function () {
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
        
        self.getWeatherForLocation = function () {
            var deferred = $q.defer();

            getGeoLocation().then(function (position) {
                var coords = position.coords;
                var location = "";
                var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + coords.latitude + "," + coords.longitude + "&sensor=true";
                

                $.ajax({
                    url: url,
                    dataType: 'json',
                    cache: true,
                }).success(function (data) {
                    if (data.results[0].address_components) {
                        location = data.results[0].address_components[4]["long_name"] + ", " + data.results[0].address_components[6]["short_name"];
                    }

                    
                    weatherReportApiProxy.getWeatherForLocation(location).then(function (results) {
                        deferred.resolve(weatherTranfromation(results));
                    }, function (error) {
                        deferred.reject(error);
                    });
                });
            });
            
            return deferred.promise;
        };

        var weatherTranfromation = function(data) {
            var transformedResult = {
                astronomy: data.astronomy,
                location: data.location,
                weather: {},
                coords: {
                    lat:data.item.lat,
                    lon:data.item.long
                },
                forecast: data.item.forecast,
                units:data.units
            };


            transformedResult.weather = {
                condition: data.item.condition,
                tempMin: data.item.forecast[0].low,
                tempMax: data.item.forecast[0].high,
                humidity: data.atmosphere.humidity,
                dateTime: data.item.pubDate,
                wind: data.wind,
                pressure:  data.atmosphere.pressure,
                description: data.item.description,
                title: data.item.title,
                visibility: data.atmosphere.visibility
            };

            console.log(data);
            console.log(transformedResult);
            return transformedResult;
        };
    };

    weatherReportService.$inject = ['$q','adp.mobile.services.serviceConstants', 'adp.mobile.services.weatherReportApiProxy'];
    return weatherReportService;
});