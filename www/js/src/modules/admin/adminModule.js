/**
 * Created by Ramesh on 04/10/2015.
 */
define(['angular',
        'src/modules/admin/adminController',
        'src/modules/admin/adminService'
],
    function (angular, adminController, adminService) {

        return angular.module('adp.mobile.adminModule', [])
            .service('adp.mobile.services.adminService', ['$q', 'adp.mobile.services.adminApiProxy', adminService])
            .controller('adp.mobile.controllers.adminController', ['$scope', '$state','adp.mobile.services.adminService', adminController]);
    });