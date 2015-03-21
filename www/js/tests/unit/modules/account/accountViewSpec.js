/// <reference path="../../src/views/error.js" />
'use  strict';

define(['angular',
        'angular-mocks',
        'modules/search/searchResultsController',
        'constants/serviceConstants',
        'constants/controllerConstants',
        'services/apiUtilityService',
        '/base/scripts/tests/unit/testHelper.js'
], function (angular, mocks, searchResultsController,
    serviceConstants, controllerConstants, apiUtilityService, testHelper) {

    xdescribe('Search Result View', function () {
        var app, compile, scope, location, ctrl, response,
                 q,
                 rootScope, _window,
                 readApiProxyGetcartsSpy, batchSaveAndReloadSpy,
                 bookApiProxySvc, cartApiUtilitySvc,
                 userContext, windowSpy;

        var templateHtml, // raw markup
            templateElement, // dom element created from markup
            templateDom; //

        //load all modules, including the html template, needed to support the test
        beforeEach(function () {
            app = angular.module("testModule", []);
            app.controller('searchResultsController', searchResultsController);
        });

        beforeEach(module('testModule', 'scripts/src/modules/search/search-results.html'));

        beforeEach(module(function ($provide) {
            $provide.provider('adp.services.userContext', testHelper.mockUserContextProvider);
            $provide.service('adp.services.bookApiProxy', function () { });
            $provide.constant('adp.constants.serviceConstants', serviceConstants);
            $provide.constant('adp.constants.controllerConstants', controllerConstants);
            $provide.service('adp.services.apiUtilityService', apiUtilityService);
        }));

        beforeEach(inject(function ($injector, $rootScope, $compile, $q, $controller, $sniffer, $templateCache, $timeout) {
            q = $q;
            templateHtml = $templateCache.get('scripts/src/views/search-results.html');
            rootScope = $rootScope;
            scope = $rootScope.$new();
            compile = $compile;

            bookApiProxySvc = $injector.get('adp.services.bookApiProxy');
            userContext = $injector.get('adp.services.userContext');
            serviceConstants = $injector.get('adp.constants.serviceConstants');
            controllerConstants = $injector.get('adp.constants.controllerConstants');

            userContext.getUserName = q.defer();
            userContext.getUserName = jasmine.createSpy('getUserNameSpy').andCallFake(function () {
                var deffered = q.defer();
                deffered.resolve({});
                return deffered.promise;
            });

            bookApiProxySvc.getBookSearchPromiseQ = q.defer();
            bookApiProxySvc.getBookSearchPromise = jasmine.createSpy('getBookSearchPromiseSpy').andCallFake(
               function () {
                   return bookApiProxySvc.getBookSearchPromiseQ.promise;
               });

            ctrl = $controller(searchResultsController, {
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

        it('should have right panel', function () {
            var rightPanel = templateDom.find('.right-panel');

            expect(rightPanel).toBeDefined();
        });

        describe('Search Filter', function () {
            it('should be defined', function () {
                expect(templateDom.find('search-filters')).toBeDefined();
            });

            it('should have filters attribute', function () {
                expect(templateDom.find('search-filters').attr('filters')).toBeDefined();
            });
        });


        describe('Sort By', function () {
            it('should be defined', function () {
                expect(templateDom.find('select')).toBeDefined();
            });

            it('should have ng-model specified', function () {
                expect(templateDom.find('select').attr('ng-model')).toBe('sortKey');
                expect(scope.sortKey).toBeDefined();
            });

            it('should have ng-options specified', function () {
                expect(templateDom.find('select').attr('ng-options')).toBe('key.Name for key in sortKeys track by key.Value');
                expect(scope.sortKeys).toBeDefined();
            });

            it('should have ng-change specified', function () {
                expect(templateDom.find('select').attr('ng-change')).toBe('refreshSortKey()');
                expect(scope.refreshSortKey).toBeDefined();
            });
        });

        describe('result grid', function () {
            it('should be defined', function () {
                expect(templateDom.find('results-grid')).toBeDefined();
            });

            it('should have books specified', function () {
                expect(templateDom.find('results-grid').attr('books')).toBe('books');
                //expect(scope.books).toBeDefined();
            });

            it('should have params specified', function () {
                expect(templateDom.find('results-grid').attr('params')).toBe('params');
                // expect(scope.params).toBeDefined();
            });

            it('should have updatedFilters specified', function () {
                expect(templateDom.find('results-grid').attr('updatedFilters')).toBe('updatedFilters');
                // expect(scope.updatedFilters).toBeDefined();
            });
        });
    });
});