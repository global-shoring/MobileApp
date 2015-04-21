"use strict";
/**
 * Created by Ramesh on 04-22-2015.
 */

var UserService = require('../../server/services/users'),
    logger = require('winston');

module.exports = function (db) {

    var userSvc = new UserService(db);

    this.getUser = function (req, res, next) {

        logger.log('debug','get user.....');

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

        userSvc.getUsers(queryFilter, function (err, usersList) {
            res.json(usersList);
        });

    };

    return this;
};