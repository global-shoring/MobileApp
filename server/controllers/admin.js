"use strict";
/**
 * Created by Ramesh on 04-22-2015.
 */

var AdminService = require('../../server/services/admin'),
    logger = require('winston');

module.exports = function (db) {

    var adminSvc = new AdminService(db);

    this.getAdminDetails = function (req, res, next) {

        logger.log('debug','get admin.....');

        var username = 'rwalker',
            currentUser = [],
            queryFilter = {};

        //if (!username) {
        //    return res.redirect("/login");
        //}

        currentUser.push(username);
        queryFilter = {
            username: { $nin: currentUser }
        };

        adminSvc.getAdminDetails('rwalker', function (err, adminDetails) {
            res.json(adminDetails);
        });
    };

    this.updateAdminDetails = function (req, res, next) {

        logger.log('debug', 'udpate admin.....');
        var data = req.admin;
        adminSvc.updateAdminDetails(data, function (err, adminDetails) {
            res.json(adminDetails);
        });
    };

    return this;
};