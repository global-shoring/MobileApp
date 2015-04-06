/**
 * Created by Ramesh on 3/22/2015.
 */

'use strict';

define([], function () {
    var userContext = function ($rootScope,serviceConstants) {
        var self = this;
                
        self.getUserInfo = function() {
            return $rootScope.isUserAuthenticated;
        }
    };

    userContext.$inject = ['$rootScope','adp.mobile.constants.serviceConstants'];
    return userContext;
});