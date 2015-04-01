/**
 * Created by Ramesh on 3/22/2015.
 */

'use strict';

define([], function () {

    var baseApiProxy = function ($http, $q) {
        
        //#region private functions       

        this.getHttpPromiseForReadApi = function (httpConfig, apiResponseValidator, apiResponseFormatter) {
            var deferred = $q.defer();           
            $http(httpConfig)
                   .success(function (data) {
                       if (getCartResponseFormatter(data)) {
                           var formattedApiResponse = getCartResponseFormatter(data);
                           deferred.resolve(formattedApiResponse);
                       } else {                          
                           deferred.reject(data);
                       }
                   }).error(function (error) {                      
                       deferred.reject(error);
                   });

            return deferred.promise;
        };

        this.getHttpPromiseForCreateApi = function (httpConfig) {
            var deferred = $q.defer();            
            $http(httpConfig)
                   .success(function (data) {
                       if (getCartResponseFormatter(data)) {
                           var formattedApiResponse = getCartResponseFormatter(data);
                           deferred.resolve(formattedApiResponse);
                       } else {                          
                           deferred.reject(data);
                       }
                   }).error(function (error) {                     
                       deferred.reject(error);
                   });

            return deferred.promise;
        };

        this.getHttpPromiseForUpdateApi = function (httpConfig) {
            var deferred = $q.defer();           
            $http(httpConfig)
                   .success(function (data) {
                       if (getCartResponseFormatter(data)) {
                           var formattedApiResponse = getCartResponseFormatter(data);
                           deferred.resolve(formattedApiResponse);
                       } else {                        
                           deferred.reject(data);
                       }
                   }).error(function (error) {                      
                       deferred.reject(error);
                   });

            return deferred.promise;
        };

        //TODO: refactor as required
        var getCartResponseFormatter = function (data) {
            return data;
        };

        var getCartCountResponseValidator = function (data) {
            if (data && !data.error && data.searchResult && data.searchResult.summary) {
                return true;
            }
            return false;
        };

        var getCartCountResponseFormatter = function (data) {
            return data.searchResult.summary.totalCarts;
        };

        //#endregion private functions
        
    };

    baseApiProxy.$inject = ['$http', '$q'];

    return baseApiProxy;
});