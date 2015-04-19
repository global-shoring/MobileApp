/**
 * Created by Ramesh on 3/22/2015.
 */

"use strict";

define(['angular',  
        '../apiProxies/accountApiProxy',
        '../apiProxies/commonApiProxy',
        '../apiProxies/adminApiProxy',
        '../apiProxies/weatherReportApiProxy'
],
    function (angular, accountApiProxy,commonApiProxy,adminApiProxy, weatherReportApiProxy) {
        var proxies = {     
            'adp.mobile.services.accountApiProxy': accountApiProxy,
            'adp.mobile.services.commonApiProxy': commonApiProxy,
            'adp.mobile.services.adminApiProxy': adminApiProxy,
            'adp.mobile.services.weatherReportApiProxy': weatherReportApiProxy
        };
        return proxies;
    });