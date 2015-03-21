'use  strict';

define(['angular',
        'angular-mocks',
        'core/services'
],
    function (angular, mocks, services) {

        xdescribe('services.js tests', function () {

            describe('services object', function () {
               it('should have accountApiProxy defined', function () {
                   expect(services["adp.services.accountApiProxy"]).toBeDefined();
                });              
            });
        });

    });