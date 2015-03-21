'use strict'

define(['angular',
        'angular-mocks',
        'mock-ajax',
        '/base/scripts/tests/unit/testHelper.js',
        'modules/account/accountController',
        'constants/serviceConstants',
        'constants/controllerConstants',
        'services/authenticationService',
        'sinon'
],
function (angular, angularMocks, mockAjax, testHelper,
    accountController, serviceConstants, controllerConstants, authenticationService) {

    xdescribe('accountController', function () {
        var compile, scope, location, ctrl, response,
                 q,
                 rootScope, _window,
                 bookApiProxySvc, authenticationSvc,
                 userContext, windowSpy;

        beforeEach(module(function ($provide) {
            $provide.provider('adp.services.userContext', testHelper.mockUserContextProvider);
            $provide.constant('adp.constants.serviceConstants', serviceConstants);
            $provide.constant('adp.constants.controllerConstants', controllerConstants);
            $provide.service('adp.services.authenticationService', authenticationService);
            $provide.provider('adp.context.appContext', testHelper.mockAppContextProvider);
        }));

        beforeEach(inject(function ($rootScope, $http, $q, $location,
            $controller, $compile, $injector, $window) {
            q = $q;
            compile = $compile;
            authenticationSvc = $injector.get('adp.services.authenticationService');
            userContext = $injector.get('adp.services.userContext');
            serviceConstants = $injector.get('adp.constants.serviceConstants');
            controllerConstants = $injector.get('adp.constants.controllerConstants');

            _window = $injector.get('$window');
            windowSpy = spyOn(_window, 'open');
            location = $location;
            scope = $rootScope.$new();
            rootScope = $rootScope;

            userContext.getUserName = q.defer();
            userContext.getUserName = jasmine.createSpy('getUserNameSpy').and.callFake(function () {
                var deffered = q.defer();
                deffered.resolve({});
                return deffered.promise;
            });

            authenticationSvc.processLogout = q.defer();
            authenticationSvc.processLogout = jasmine.createSpy('getFiltersPromiseSpy').and.callFake(
               function () {
                   return authenticationSvc.processLogout.promise;
               });
            
            ctrl = $controller(accountController, {
                $rootScope: rootScope,
                $scope: scope,
                $location: location,
                $q: q,
                $window: _window
            });
        }));
        
        describe('on user click', function () {
            var params = {};
            
            it('should process login', function () {

            });

            it('should process logout', function () {

            });

        });

    });
});

