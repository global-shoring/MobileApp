/**
 * Created by gadhamsn on 4/5/15.
 */

'use strict';
define([], function () {

    var mapsController = function ($scope, $ionicLoading, $q, $compile, mapsService, controllerConstants) {

        function initialize() {

            var mapOptions = {
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content:controllerConstants.adpHydAddress
            });

            $scope.map = new google.maps.Map(document.getElementById("map"),
                mapOptions);


            var marker = new google.maps.Marker({
                map: $scope.map,
                title: 'Gmap'
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open($scope.map, marker);
            });

            navigator.geolocation.getCurrentPosition(function (pos) {
                var latlang = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
                $scope.map.setCenter(latlang);
                marker.setPosition(latlang);
                //$scope.loading.hide();
            }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
        }

        initialize();
    };
    mapsController.inject = ['$scope', '$ionicLoading', '$q',
        '$compile', 'adp.mobile.services.mapsService', 'adp.mobile.constants.controllerConstants'];
    return mapsController;
});