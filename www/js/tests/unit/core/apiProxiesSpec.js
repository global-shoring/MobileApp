'use  strict';

define(['angular',
        'angular-mocks',
        'core/services'
],
    function (angular, mocks, services) {

        xdescribe('services.js tests', function () {

            describe('services object', function () {
                
                it('should have bookApiProxy defined', function () {                    
                    expect(services["cart.services.bookApiProxy"]).toBeDefined();
                });
                
                it('should have cartApiProxy defined', function () {
                    expect(services["cart.services.cartApiProxy"]).toBeDefined();
                });
                
                it('should have ordersApiProxy defined', function () {
                    expect(services["cart.services.ordersApiProxy"]).toBeDefined();
                });

                it('should have customerApiProxy defined', function () {
                    expect(services["cart.services.customerApiProxy"]).toBeDefined();
                });

                it('should have commonApiProxy defined', function () {
                    expect(services["cart.services.commonApiProxy"]).toBeDefined();
                });              
            });
        });

    });