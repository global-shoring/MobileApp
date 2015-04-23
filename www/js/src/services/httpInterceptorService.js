﻿/**
 * Created by Ramesh on 3/22/2015.
 */

define([],
    function () {
        var httpInterceptor = function ($rootScope, $q, $location, $injector) {

            var numLoadings = 0;

            return {
                request: function (config) {

                    numLoadings++;

                    // Show loader
                    $rootScope.$broadcast("loader_show");
                    return config || $q.when(config);

                },
                response: function (response) {                    
                    if ((--numLoadings) === 0) {
                        // Hide loader
                        $rootScope.$broadcast("loader_hide");
                    }                                  

                    return response || $q.when(response);

                },
                responseError: function (response) {                    
                    if (!(--numLoadings)) {
                        // Hide loader
                        $rootScope.$broadcast("loader_hide");
                    }

                    return $q.reject(response);
                }
            };
        };

        httpInterceptor.$inject = ['$rootScope', '$q', '$location', '$injector'];

        return httpInterceptor;

    });
 