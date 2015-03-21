"use strict";

define(['angular',  
        '../apiProxies/accountApiProxy'
],
    function (angular, accountApiProxy) {

        var proxies = {     
            'adp.services.accountApiProxy': accountApiProxy
        };

        return proxies;
    });