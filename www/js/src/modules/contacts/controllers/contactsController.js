
'use strict';
define([], function() {

    var contactsController = function($scope, $state) {
        $scope.contacts = [
            {
                line1: 'ADP India Private Limited',
                line2: 'Office No.8. Apeejay Business Centre',
                line3: 'Tresorie, The Park, 22 Rajbhavan Road',
                line4: 'Somajiguda',
                city: 'Hyderabad',
                state: 'Telangana',
                country: 'India',
                pinCode: '500082'
            },
            {
                line1: 'ADP India Private Limited',
                line2: 'Suite 11, Apeejay Business Centre',
                line3: '1st Floor, Pride House,S.No. 108/7 Shivaji Nagar',
                line4: 'University Road',
                city: 'Pune',
                state: 'maharashtra',
                country: 'India',
                pinCode: '411016'
            }

        ];

    };

    contactsController.inject = ['$scope', '$state'];
    return contactsController;
});