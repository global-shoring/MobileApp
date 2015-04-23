/**
 * Created by Ramesh on 3/22/2015.
 */

'use strict';

define([], function () {
    var userContext = function ($rootScope, commonApiProxy) {
        var self = this;

        self.getUserInfo = function() {
            var userinfo = null;
            commonApiProxy.getUserContext().then(function(result) {
                userinfo = result;
            });
            return userinfo;
        };
    };

    userContext.$inject = ['$rootScope', 'adp.mobile.services.commonApiProxy'];

    return userContext;
});