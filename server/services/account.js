"use strict";
var UserService = require('../../server/services/users'),
    SessionService = require('../services/sessions'),
    logger = require('winston');

module.exports = function (db) {
    var userSvc = new UserService(db);
    var sessionSvc = new SessionService(db);

    this.isUserLoggedIn = function (req, res, next) {
        var session_id = req.cookies.session;

        sessionSvc.getUsername(session_id, function (err, username) {
            if (!err && username) {
                req.username = username;
            }
            return next();
        });
    };

    this.handleLoginRequest = function (req, res, next) {

        var username = req.body.username;
        var password = req.body.password;
        
        logger.log('debug',"user submitted username: " + username + " pass: " + password);

        userSvc.validateLogin(username, password, function (err, user) {

            if (err) {
                return res.json(err);
            }

            sessionSvc.startSession(user['username'], function (err, session_id) {

                if (err){ return next(err);}

                res.cookie('session', session_id);
                
                return res.json({result: { success: true, msg: 'logged in Successfully' } });
            });
        });
    };

    this.handleLogoutRequest = function (req, res, next) {

        var session_id = req.cookies.session;
        sessionSvc.endSession(session_id, function (err) {
            logger.log('debug', 'session logout..');
            // Even if the user wasn't logged in, redirect to home
            res.cookie('session', '');
            return res.json({ result: { success: true, msg: 'logout Successfully' } });
        });
    };

    return this;
};
