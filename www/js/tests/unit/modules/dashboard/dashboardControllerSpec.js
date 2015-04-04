'use strict';

define(['angular',
        'angular-mocks',
        'mock-ajax',
        '/base/js/tests/unit/testHelper.js',
        'modules/home/dashboardController',
        'constants/serviceConstants',
        'constants/controllerConstants',
        'sinon'
],
function (angular, angularMocks, mockAjax, testHelper,
    dashboardController, serviceConstants, controllerConstants) {


    describe('dashboardController', function () {
        var compile,
            scope,
            location,
            ctrl,
            q, originalTimeout,
            rootScope, userContext;

        beforeEach(module(function ($provide) {
            $provide.provider('adp.mobile.context.appContext', testHelper.mockAppContextProvider);
            $provide.provider('adp.mobile.services.userContext', testHelper.mockUserContextProvider);
            $provide.constant('adp.mobile.constants.serviceConstants', serviceConstants);
            $provide.constant('adp.mobile.constants.controllerConstants', controllerConstants);
        }));

        beforeEach(inject(function ($rootScope, $q, $location, $controller, $injector) {
            q = $q;
            location = $location;
            scope = $rootScope.$new();
            rootScope = $rootScope;

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
                $q: q,
                $location: location
            });

            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

            scope.$digest();
        }));


        afterEach(function () {
            scope.$destroy();
            compile = null;
            q = null;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
       
        describe('Initialize controller', function () {
            it('should initialize tiles', function (parameters) {
                expect(scope.tiles).toBeDefined();
            });

        });
    });
});

