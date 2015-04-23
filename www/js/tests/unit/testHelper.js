'use strict';

define([
        'angular',
        'angular-mocks'
],
    function (angular, mocks) {

      var testHelper = {
           
            mockAppContextProvider: function () {
                var testApiWithPortConfigName = "testApiConfig",
                  testApiWithPortConfigNamePart1 = "testApiConfigPart1",
                          httpMappings = [
                         
                          ];
                var appContext = function () {
                    return {
                        current: function () {
                            return {
                                getSetting: function () {
                                    return httpMappings;
                                },
                                name: function () {
                                    return "cart";
                                }
                            };
                        }
                    };
                };
                this.$get = [
                  '$injector', function ($injector) {
                      return $injector.instantiate(appContext);
                  }
                ];
            },

            mockConfigManagerProvider: function () {
                var configManager = function () {
                    return {
                        get: function () {
                            return null;
                        }
                    };
                };
                this.$get = [
                  '$injector', function ($injector) {
                      return $injector.instantiate(configManager);
                  }
                ];
            },

            mockUserContextProvider: function () {
                var userContext = function () {
                    return {
                        getUserName: function () { return "testUser"; }
                    };
                };

                this.$get = ['$injector', function ($injector) {
                    return $injector.instantiate(userContext);
                }];
            },          

            mockUrlService: function () {
                this.getGeneratedUrl = function () {
                    return "http://testUrl.com/apiEndpoint";
                };
            }
        };

        return testHelper;
    });
