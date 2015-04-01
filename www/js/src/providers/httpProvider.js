/**
 * Created by Ramesh on 3/22/2015.
 */

'use strict';

define([], function () {

    var cartHttpProvider = function($httpProvider) {
               
        this.$get = ['$http', function($http) {
            return $http;
        }];

    };

    cartHttpProvider.$inject = ['$httpProvider'];
    
    return cartHttpProvider;
    
});