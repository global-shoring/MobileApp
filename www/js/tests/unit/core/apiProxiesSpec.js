'use  strict';

define(['angular',
        'angular-mocks',
        'core/services'
],
    function (angular, mocks, services) {

        describe('services.js tests', function () {

            describe('services object', function () {
                it('should have apiUtilityService defined', function () {
                   expect(services["adp.mobile.services.apiUtilityService"]).toBeDefined();
                });

                it('should have userContext defined', function () {
                    expect(services['adp.mobile.services.userContext']).toBeDefined();
                });
            });
        });

    });