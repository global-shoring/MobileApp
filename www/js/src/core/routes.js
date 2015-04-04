/**
 * Created by Ramesh on 3/22/2015.
 */

define(['angular','ui-router'], function(angular) {
    var routesModule = angular.module('adp.mobile.core.routes', ['ionic'])
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider
                .state('app', {
                    url: "",
                    abstract: true,
                    templateUrl: "js/src/templates/menu.html",
                    controller: 'adp.mobile.controllers.baseController'
                })
                .state('app.dashboard', {
                    url: "/dashboard",
                    views: {
                        'menuContent': {
                            templateUrl: "js/src/modules/home/dashboard.html",
                            controller: 'adp.mobile.controllers.dashboardController'
                        }
                    }
                }).state('app.login', {
                    url: "/login",
                    views: {
                        'menuContent': {
                            templateUrl: "js/src/modules/login/templates/login.html",
                            controller: 'adp.mobile.controllers.loginController'
                        }
                    }
                }).state('app.location', {
                    url: "/location",
                    views: {
                        'menuContent': {
                            templateUrl: "js/src/modules/location/location.html",
                            controller: 'adp.mobile.controllers.locationController'
                        }
                    }
                }).state('app.locationDetails', {
                    url: "/locationDetails",
                    views: {
                        'menuContent': {
                            templateUrl: "js/src/modules/location/locationDetails.html",
                            controller: 'adp.mobile.controllers.locationDetailsController'
                        }
                    }
                }).state('app.contacts', {
                    url: "/contacts",
                    views: {
                        'menuContent': {
                            templateUrl: "js/src/modules/contacts/templates/contacts.html",
                            controller: 'adp.mobile.controllers.contactsController'
                        }
                    }
                }).state('app.weatherReport', {
                    url: "/weatherReport",
                    views: {
                        'menuContent': {
                            templateUrl: "js/src/modules/weatherReport/weather-report.html",
                            controller: 'adp.mobile.controllers.weatherReportController'
                        }
                    }
                }).state('app.events', {
                    url: "/events",
                    views: {
                        'menuContent': {
                            templateUrl: "js/src/modules/events/templates/events.html",
                            controller: 'adp.mobile.controllers.eventsController'
                        }
                    }
                }).state('app.news', {
                    url: "/news",
                    views: {
                        'menuContent': {
                            templateUrl: "js/src/modules/news/templates/news.html",
                            controller: 'adp.mobile.controllers.newsController'
                        }
                    }
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/login');

        });
});