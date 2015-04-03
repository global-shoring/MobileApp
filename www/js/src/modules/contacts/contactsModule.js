
define(['angular', 'src/modules/contacts/controllers/contactsController'],
    function(angular, contactsController) {

        return angular.module('adp.mobile.contactsModule', [])
            .controller('adp.mobile.controllers.contactsController', contactsController);
    });