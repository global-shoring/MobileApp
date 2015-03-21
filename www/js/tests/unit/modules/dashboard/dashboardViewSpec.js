/// <reference path="../../src/views/error.js" />
'use  strict';

define(['angular',
        'angular-mocks',
        'modules/search/dashboardController',
        'constants/serviceConstants',
        'constants/controllerConstants',
        '/base/scripts/tests/unit/testHelper.js'
], function (angular, mocks, dashboardController,
    serviceConstants, controllerConstants, testHelper) {

    xdescribe('account View', function () {
        var app, compile, scope, location, ctrl, response,
                 q,
                 rootScope, _window,
                 userContext, windowSpy;

        var templateHtml, // raw markup
            templateElement, // dom element created from markup
            templateDom; //

        //load all modules, including the html template, needed to support the test
        beforeEach(function () {
            app = angular.module("testModule", []);
            app.controller('dashboardController', dashboardController);
        });

        beforeEach(module('testModule', 'js/src/modules/home/dashboard.html'));

        beforeEach(module(function ($provide) {
            $provide.provider('adp.services.userContext', testHelper.mockUserContextProvider);
            $provide.constant('adp.constants.serviceConstants', serviceConstants);
            $provide.constant('adp.constants.controllerConstants', controllerConstants);
        }));

        beforeEach(inject(function ($injector, $rootScope, $compile, $q, $controller, $sniffer, $templateCache, $timeout) {
            q = $q;
            templateHtml = $templateCache.get('js/src/modules/home/dashboard.html');
            rootScope = $rootScope;
            scope = $rootScope.$new();
            compile = $compile;

            userContext = $injector.get('adp.services.userContext');
            serviceConstants = $injector.get('adp.constants.serviceConstants');
            controllerConstants = $injector.get('adp.constants.controllerConstants');

            userContext.getUserName = q.defer();
            userContext.getUserName = jasmine.createSpy('getUserNameSpy').andCallFake(function () {
                var deffered = q.defer();
                deffered.resolve({});
                return deffered.promise;
            });

            ctrl = $controller(dashboardController, {
                $scope: scope
            });

            templateElement = angular.element(templateHtml);
            templateDom = compile(templateElement)(scope);
            scope.$digest();
        }));

        afterEach(function () {
            scope.$destroy();
            compile = null;
            q = null;
            angular.element(templateDom).remove();
        });

    });
});