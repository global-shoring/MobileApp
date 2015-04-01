/**
 * Created by Ramesh on 3/22/2015.
 */

"use strict";

define(['angular',  
        '../apiProxies/accountApiProxy',
        '../apiProxies/weatherReportApiProxy'
],
    function (angular, accountApiProxy, weatherReportApiProxy) {

        var proxies = {     
            'adp.mobile.services.accountApiProxy': accountApiProxy,
            'adp.mobile.services.weatherReportApiProxy': weatherReportApiProxy
        };

        return proxies;
    });