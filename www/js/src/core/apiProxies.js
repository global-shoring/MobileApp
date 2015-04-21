/**
 * Created by Ramesh on 3/22/2015.
 */

"use strict";

define(['angular',  
        '../apiProxies/accountApiProxy',
        '../apiProxies/commonApiProxy',
        '../apiProxies/adminApiProxy',
        '../apiProxies/weatherReportApiProxy',
        '../apiProxies/associateSearchApiProxy'
],
    function (angular, accountApiProxy,commonApiProxy,adminApiProxy,weatherReportApiProxy, associateSearchApiProxy) {
        var proxies = {     
            'adp.mobile.services.accountApiProxy': accountApiProxy,
            'adp.mobile.services.commonApiProxy': commonApiProxy,
            'adp.mobile.services.adminApiProxy': adminApiProxy,
            'adp.mobile.services.weatherReportApiProxy': weatherReportApiProxy,
            'adp.mobile.services.associateSearchApiProxy': associateSearchApiProxy
        };
        return proxies;
    });