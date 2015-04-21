"use strict";

var AssociateService = require('../../server/services/associate'),
    logger = require('winston');

module.exports = function (db) {

    var associateService = new AssociateService(db);

    this.getAssociateDetails = function (req, res, next) {

        logger.log('debug', 'get associate.....');

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

        associateService.getAssociateDetails('rwalker', function (err, associateDetails) {
            res.json(associateDetails);
        });
    };

    this.getAssociates = function (req, res, next) {

        logger.log('debug', 'get associate.....');

        associateService.getAssociates(function (err, associates) {
            res.json(associates);
        });
    };
    
    return this;
};