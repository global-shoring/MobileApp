"use strict";
/**
 * Created by Ramesh on 04-22-2015.
 */

var logger = require('winston');

var UserService = require('../services/users'),
    AdminService = require('../services/admin'),
    AssociateService = require('../services/associate');

module.exports = function (db) {
    var userService = new UserService(db),
        adminService = new AdminService(db),
        associateService = new AssociateService(db);

    this.verifyData = function (callback) {
        logger.log('debug', 'verifying data from database..');

        userService.verifyData('rwalker', function (err, user) {
            logger.log('debug', 'verifying user data from database..');

            if (err) { callback(err); }

            if (!user) {
                userService.initUsers(function (error, res) {
                    if (!error) {
                        callback(null,'Initial data - USERS Inserting..');
                    }
                });
            } else {
                callback(null, 'Initial data - USERS OK');
            }
        });

        adminService.getAdminDetails('rwalker', function (err, admin) {
            logger.log('debug', 'verifying user admin from database..');
            if (err) {callback('ERROR: ' + err);}
            
            if (!admin) {
                adminService.initAdmins(function (err, res) {
                    if (!err) {
                        callback(null, 'Initial data - ADMIN Inserting..');
                    }
                });
            } else {
                callback(null, 'Initial data - ADMIN OK');
            }
        });

        associateService.getAssociate('rwalker', function (err, admin) {
            logger.log('debug', 'verifying associate data from database..');

            if (err) { callback('ERROR: ' + err); }

            if (!admin) {
                associateService.initAssociates(function (err, res) {
                    if (!err) {
                        callback(null, 'Initial data - Associate Inserting..');
                    }
                });
            } else {
                callback(null, 'Initial data - Associate OK');
            }
        });
    };

    return this;
};



