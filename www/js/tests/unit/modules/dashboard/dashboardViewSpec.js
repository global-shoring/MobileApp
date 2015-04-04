'use  strict';

define(['angular',
        'angular-mocks',
        'modules/home/dashboardController',
        'constants/serviceConstants',
        'constants/controllerConstants',
        '/base/js/tests/unit/testHelper.js'
], function (angular, mocks, dashboardController,
    serviceConstants, controllerConstants, testHelper) {

    describe('dashboard', function () {
        var app, compile, scope, location, ctrl, response,
                 q, originalTimeout,
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
            $provide.provider('adp.mobile.context.appContext', testHelper.mockAppContextProvider);
            $provide.provider('adp.mobile.services.userContext', testHelper.mockUserContextProvider);
            $provide.constant('adp.mobile.constants.serviceConstants', serviceConstants);
            $provide.constant('adp.mobile.constants.controllerConstants', controllerConstants);
        }));

        beforeEach(inject(function ($injector, $rootScope, $compile, $q, $controller, $templateCache, $location) {
            q = $q;
            templateHtml = $templateCache.get('js/src/modules/home/dashboard.html');
            rootScope = $rootScope;
            scope = $rootScope.$new();
            compile = $compile;
            location = $location;
            
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

            userContext = $injector.get('adp.mobile.services.userContext');
            serviceConstants = $injector.get('adp.mobile.constants.serviceConstants');
            controllerConstants = $injector.get('adp.mobile.constants.controllerConstants');

            userContext.getUserInfoQ = q.defer();
            userContext.getUserInfo = jasmine.createSpy('getUserNameSpy').and.callFake(function () {
                return userContext.getUserInfoQ.promise;
            });
            
            ctrl = $controller(dashboardController, {
                $rootScope: rootScope,
                $scope: scope,
                $q:q,
                $location : location
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
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

        describe('view ', function() {
                it('should be defined ion view', function () {
                    expect(templateDom.find('ion-view')).toBeDefined();
                });
        });
    });
});