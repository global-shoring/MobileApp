/**
 * Created by gadhamsn on 4/5/15.
 */

'use strict';
define([], function () {

    var mapsController = function ($scope, $ionicLoading, $q, $compile, mapsService, controllerConstants) {

        function initialize() {

            var mapOptions = {
                zoom: 16,
                mapTypeId: window.google.maps.MapTypeId.ROADMAP
            };

            var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
            var compiled = $compile(contentString)($scope);

            var infowindow = new window.google.maps.InfoWindow({
                content:controllerConstants.adpHydAddress
            });

            $scope.map = new window.google.maps.Map(document.getElementById("map"),
                mapOptions);


            var marker = new window.google.maps.Marker({
                map: $scope.map,
                title: 'Gmap'
            });

            window.google.maps.event.addListener(marker, 'click', function () {
                infowindow.open($scope.map, marker);
            });

            window.navigator.geolocation.getCurrentPosition(function (pos) {
                var latlang = new window.google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                $scope.map.setCenter(latlang);
                marker.setPosition(latlang);
                //$scope.loading.hide();
            }, function (error) {
                window.alert('Unable to get location: ' + error.message);
            });
        }

        initialize();
    };
    mapsController.inject = ['$scope', '$ionicLoading', '$q',
        '$compile', 'adp.mobile.services.mapsService', 'adp.mobile.constants.controllerConstants'];
    return mapsController;
});