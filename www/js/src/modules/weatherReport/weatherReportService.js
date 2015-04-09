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

            if (locationCoords) {
                locationService.getGeoLocationDetails(locationCoords).then(function (results) {
                    weatherReportApiProxy.getWeatherForLocation(results).then(function (data) {
                        deferred.resolve(weatherTranfromation(data));
                    }, function (error) {
                        deferred.reject(error);
                    });
                });
            }
            
            return deferred.promise;
        };

        var weatherTranfromation = function (data) {
            var forecastArr = [];
            _.each(data.item.forecast, function (forecast) {
                forecastArr.push({
                    date: forecast.date,
                    day: forecast.day,
                    high: forecast.high,
                    low: forecast.low,
                    text: forecast.text,
                    cssClass: forecast.text ? forecast.text.toLowerCase().replace('/','-').replace(' ', '-') : forecast.text.toLowerCase()
                });
            });

            var transformedResult = {
                astronomy: data.astronomy,
                location: data.location,
                weather: {},
                coords: {
                    lat: data.item.lat,
                    lon: data.item.long
                },
                forecast: forecastArr,
                units: data.units
            };

           

            transformedResult.weather = {
                condition: data.item.condition,
                conditionClass: data.item.condition.text ? data.item.condition.text.toLowerCase().replace('/','-').replace(' ', '-') : data.item.condition.text.toLowerCase(),
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

    weatherReportService.$inject = ['$q', 'adp.mobile.services.serviceConstants',
        'adp.mobile.services.locationService',
        'adp.mobile.services.weatherReportApiProxy'];

    return weatherReportService;
});