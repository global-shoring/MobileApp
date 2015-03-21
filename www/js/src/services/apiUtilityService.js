define([],
    function () {

      var apiUtilityService = function (serviceConstants) {

        this.getHttpConfig = function (requestObj) {

            if (!requestObj) {
                requestObj = {};
          }        
         
          return getHttpConfigObject(requestObj);
        };              
             

        //TODO: Refactor?
        var getHttpConfigObject = function (api, method, params, data) {
          var config = {
            url: api,
            method: method,
            data: data,
            params: params
          };
          return config;
        };
        
        //TODO: Check Sonar for complexity - check Rules 
        this.getApiUrlFromConfig = function (configName) {
          var apiUrl = "";
          var httpMapping = getHttpMapping(configName);
          apiUrl = httpMapping.scheme + '://' + httpMapping.hostname;
          if (httpMapping.port && !isNaN(httpMapping.port)) {
                apiUrl += ":" + httpMapping.port;
          }
            apiUrl += httpMapping.pattern;
          
          return apiUrl;
        };

        var getHttpMapping = function (configName) {           
            var httpMappings = serviceConstants.httpMappings;

          var httpMapping = _.find(httpMappings, function(mapping) {
            return mapping.name === configName;
          });

          if (!httpMapping) {
            throw new Error('Http Mapping not found for ' + configName);
          }
          return httpMapping;
        };

      };

      apiUtilityService.$inject = ['adp.constants.serviceConstants'];
      return apiUtilityService;
    });