
define(['angular', 'src/modules/contacts/controllers/contactsController'], //,'src/modules/contacts/services/contactsService'],
    function(angular, contactsController, contactsService) {

        return angular.module('adp.mobile.contactsModule', [])
            .service('adp.mobile.services.contactsService')//, contactsService)
            .controller('adp.mobile.controllers.contactsController', ['$scope', '$state', '$stateParams', contactsController]);//'adp.mobile.services.contactsService', contactsController]);
    });