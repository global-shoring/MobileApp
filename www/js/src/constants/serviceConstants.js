/**
 * Created by Ramesh on 3/22/2015.
 */

define([],
    function () {
        return {
            "httpVerb": { GET: "GET", POST: "POST", DELETE: "DELETE", PUT: "PUT" },
            'weatherReportApi': 'weatherReportApi',
            "httpMappings": [
                {
                    "name": "weatherReportApi",
                    "hostname": "localhost:8100",
                    "scheme": "http",
                    "pattern": "/weatherApi"
                }
            ]
        };
    });