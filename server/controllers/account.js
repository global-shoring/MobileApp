"use strict";
/**
 * Created by Ramesh on 04-22-2015.
 */

var AccountService = require('../../server/services/account'),
    logger = require('winston');

module.exports  = function (db) {
   
    var accountSvc = new AccountService(db);

    this.login = function(req, res, next) {
        accountSvc.handleLoginRequest(req, res, next);
    };

    this.logout = function(req, res, next) {
        accountSvc.handleLogoutRequest(req, res, next);
    };

    this.displayWelcomePage = function (req, res, next) {
        if (!req.username) {
            logger.log("/: can't identify user...redirecting to signup");
            return res.redirect("/");
        }
        return res.render("/", { 'username': req.username });
    };
};