/**
 * Created by gadhamsn on 4/14/15.
 */

'use strict';

define(['angular'], function (angular) {

    var renderMap = function () {
        return {
            restrict: 'AE',
            template: '<div id="map" data-tap-disabled="true"></div>',
            controller: "adp.mobile.controllers.mapsController",
            link: function ($scope, element, attrs) {
                console.log('attrs from renderMap: ' + attrs.location+ " $scope location "+$scope.location);
                var mapOptions = {
                    zoom: 1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                $scope.map = new google.maps.Map(document.getElementById("map"),
                    mapOptions);
                $scope.initialize(attrs.location);

            }
        }
    };
    return renderMap;
});

