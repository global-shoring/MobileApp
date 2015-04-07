/**
 * Created by Ramesh on 3/22/2015.
 */

define([],
    function () {
        return {
            "googleGeoLocationEndPoint": "http://maps.googleapis.com/maps/api/geocode/json?&sensor=true&latlng=",
            "httpVerb": { GET: "GET", POST: "POST", DELETE: "DELETE", PUT: "PUT" },
            'weatherReportApi': 'weatherReportApi',
            "weatherForecastApi":"weatherForecastApi",
            "httpMappings": [
                {
                    "name": "weatherReportApi",
                    "hostname": "localhost:8100",
                    "scheme": "http",
                    "pattern": "/weatherApi"
                },
                {
                    "name": "weatherForecastApi",
                    "hostname": "localhost:8100",
                    "scheme": "http",
                    "pattern": "/weatherForecastApi"
                }
            ]
        };
    });