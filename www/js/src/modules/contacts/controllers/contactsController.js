
'use strict';
define([], function() {

    var contactsController = function($scope, $state, $stateParams) {//, contactsService) {
        $scope.contacts = [
            {
                locationId: 1,
                line1: 'ADP India Private Limited',
                line2: 'Office No.8. Apeejay Business Centre',
                line3: 'Tresorie, The Park, 22 Rajbhavan Road',
                line4: 'Somajiguda',
                city: 'Hyderabad',
                state: 'Telangana',
                country: 'India',
                pinCode: '500082',
                phone: '040-5213456',
                mobilePhone: '9090909090',
                email: 'adp.hyd@adp.com'
            },
            {
                line1: 'ADP India Private Limited',
                line2: 'Suite 11, Apeejay Business Centre',
                line3: '1st Floor, Pride House,S.No. 108/7 Shivaji Nagar',
                line4: 'University Road',
                city: 'Pune',
                state: 'maharashtra',
                country: 'India',
                pinCode: '411016',
                phone: '040-5213456',
                mobilePhone: '9090909090',
                email: 'adp.hyd@adp.com'
            }

        ];

        //contactsService.findById($stateParams.locationId).then(function(contact) {
        //    $scope.contact = contact;
        //});

    };

    contactsController.inject = ['$scope', '$state', '$stateParams']//, 'adp.mobile.services.contactsService'];
    return contactsController;
});