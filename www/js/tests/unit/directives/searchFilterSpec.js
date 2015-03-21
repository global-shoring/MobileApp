'use  strict';

define(['angular',
        'angular-mocks',
        'directives/searchFiltersDirective'
], function (angular, mocks, searchFilters) {
    var app, element;

    xdescribe('searchFiltersDirective', function () {
        var scope, compile, ctlr, dsElement, window, autoSize;

        beforeEach(function () {
            app = angular.module("testModule", []);
            app.directive('search-Filters', searchFilters);
        });

        beforeEach(module('testModule', 'scripts/src/templates/directive/search-filters.html'));

        beforeEach(inject(function ($rootScope, $compile, $injector, $window) {
            scope = $rootScope.$new();
            compile = $compile;
            window = $window;

            element = angular.element('<textarea ng-model="someDesc" foev-auto-size min-rows="1"></textarea>');
            dsElement = compile(element)(scope);

            scope.$digest();
            ctlr = dsElement.controller('ngModel');

        }));

        afterEach(function () {
            element = null;
            scope = null;
        });

        it('should have rows set to min-rows', function () {
            var minRows = 5;
            element = angular.element('<textarea ng-model="someDesc" foev-auto-size min-rows="' + minRows + '"></textarea>');
            dsElement = compile(element)(scope);
            scope.$digest();

            // test
            expect(dsElement[0].rows).toEqual(minRows);
        });
            
    });
});