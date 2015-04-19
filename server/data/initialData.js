"use strict";

module.exports = function (db) {
    var UserService = require('../services/users'),
	    	userService = new UserService(db),
            AdminService = require('../services/admin'),
            adminService = new AdminService(db);

   this.verifyData = function (callback) {
        userService.verifyData('rwalker', function (err, user) {
            if (err) {console.log('ERROR: ' + err);}

            if (!user) {
                userService.initUsers(function (err, res) {
                    if (!err) {
                        console.log('Initial data - USERS Inserting..');
                    }
                });
            } else {
                console.log('Initial data - USERS OK');
            }
        });

        adminService.getAdminDetails('rwalker', function (err, admin) {
            if (err) {console.log('ERROR: ' + err);}
            
            if (!admin) {
                adminService.initAdmins(function (err, res) {
                    if (!err) {
                        console.log('Initial data - ADMIN Inserting..');
                    }
                });
            } else {
                console.log('Initial data - ADMIN OK');
            }
        });
    };

    return this;
};



