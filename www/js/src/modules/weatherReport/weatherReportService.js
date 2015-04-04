/**
 * Created by Ramesh on 4/1/2015.
 */

'use strict';

define([], function () {
    var weatherReportService = function ($q,serviceConstants, weatherReportApiProxy) {
        var self = this;

       
        var showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $rootScope.$broadcast("onBrowserGeoLocationError", "User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    $rootScope.$broadcast("onBrowserGeoLocationError", "Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    $rootScope.$broadcast("onBrowserGeoLocationError", "The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    $rootScope.$broadcast("onBrowserGeoLocationError", "An unknown error occurred.");
                    break;
            }
        };

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

        self.getWeatherReport = function(params) {
            var deferred = $q.defer();

            getGeoLocation().then(function (position) {
               var geoLocation = {
                   lat: position.coords.latitude,
                   lon: position.coords.longitude
               };

               weatherReportApiProxy.getWeatherReport(geoLocation).then(function (result) {
                   deferred.resolve(weatherTranfromation(result));
               }, function (error) {
                   deferred.reject(error);
               });
            });
            return deferred.promise;
        };

        self.getWeatherForecast = function (params) {
            var deferred = $q.defer();

            getGeoLocation().then(function(position) {
                var geoLocation = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };

                weatherReportApiProxy.getWeatherForecast(geoLocation).then(function(result) {
                    deferred.resolve(weatherTranfromation(result));
                }, function(error) {
                    deferred.reject(error);
                });
            });

            return deferred.promise;
        };

        var weatherTranfromation = function(data) {
            var records = [];
            var transformedResult = {
                location: {},
                forecast: []
            };
            
            
            if (data && data.list) {
                records = data.list;
            } else {
                records.push(data);
            }

            for (var i = 0; i < records.length; i++) {
                transformedResult.forecast.push({
                    groundLevel: records[i].main.grnd_level,
                    seaLevel: records[i].main.sea_level,
                    humidity: records[i].main.humidity,
                    rain: records[i].rain,
                    clouds: records[i].clouds,
                    dateTime:records[i].dt_txt,
                    wind: {
                        deg:records[i].wind.deg,
                        speed:records[i].wind.speed
                    },
                    pressure: records[i].main.pressure,
                    description: records[i].weather[0].description,
                    temp: {
                        current: records[i].main.temp,
                        min: records[i].main.temp_min,
                        max: records[i].main.temp_max
                    }
                });
            }

            if (data && data.city) {
                transformedResult.location = data.city;
            } else {
                transformedResult.location = {
                    coord: {
                        lat: data.coord.lat,
                        lon: data.coord.lon
                    },
                    country: data.sys.country,
                    place: data.name
                }
            }


          
            return transformedResult;
        };
    };

    weatherReportService.$inject = ['$q','adp.mobile.services.serviceConstants', 'adp.mobile.services.weatherReportApiProxy'];
    return weatherReportService;
});