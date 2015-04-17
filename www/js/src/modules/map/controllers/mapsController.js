/**
 * Created by gadhamsn on 4/5/15.
 */

'use strict';
define([], function () {

    var mapsController = function ($scope, $state, controllerConstants) {
        $scope.location = $state.params.location;
        var bounds = new google.maps.LatLngBounds();

        $scope.initialize = function (location) {

            var locationDetails = [];
            if (location) {
                _.find(controllerConstants.adpLocations, function (item) {
                    if (item.location === location.toLowerCase()) {
                        locationDetails.push(item);
                    }
                    return null;
                });
            }

            angular.forEach(locationDetails, function (locationDetail) {

                var infoWindow = new google.maps.InfoWindow({
                    content: locationDetail.fullAddress,
                    disableAutoPan: true
                });

                var latlang = new google.maps.LatLng(locationDetail.coords.latitude, locationDetail.coords.longitude);
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    title: 'Location',
                    position: latlang
                });

                google.maps.event.addListener(marker, 'mouseover', function () {
                    infoWindow.open($scope.map, marker);
                });

                google.maps.event.addListener(marker, 'mouseout', function () {
                    infoWindow.close();
                });
                bounds.extend(marker.position);

            });
            $scope.map.fitBounds(bounds);
        }
    };
    mapsController.inject = ['$scope', '$state', 'adp.mobile.constants.controllerConstants'];
    return mapsController;
});