"use strict";
/**
 * Created by Ramesh on 04-22-2015.
 */

var logger = require('winston');

module.exports = function (db) {

    logger.log('debug', 'initializing associate data.');

    this.validFields = [
        'firstname',
        'lastname',
        'username',
        'email',
        'associateId'
    ];

    this.initData = [
    {
        "_id": "1",
        "firstname": "Richard",
        "lastname": "Walker",
        "email": "rwalker@clinicaltrials.com",
        "associateId": "2342423",
        "location": "T3 6F"
    }, {
        "_id": "2",
        "firstname": "Richard",
        "lastname": "Walker",
        "email": "rwalker@clinicaltrials.com",
        "associateId": "2342423",
        "location": "T3 6F"
    }, {
        "_id": "1",
        "firstname": "Richard",
        "lastname": "Walker",
        "email": "rwalker@clinicaltrials.com",
        "associateId": "2345423",
        "location": "T3 6F"
    }, {
        "_id": "3",
        "firstname": "Richard",
        "lastname": "Walker",
        "email": "rwalker@clinicaltrials.com",
        "associateId": "2327423",
        "location": "T3 6F"
    }, {
        "_id": "4",
        "firstname": "Richard",
        "lastname": "Walker",
        "email": "rwalker@clinicaltrials.com",
        "associateId": "2342423",
        "location": "T3 6F"
    }, {
        "_id": "5",
        "firstname": "Richard",
        "lastname": "Walker",
        "email": "rwalker@clinicaltrials.com",
        "associateId": "2282423",
        "location": "T3 6F"
    }];

    var associates = db.collection("associates");

    this.initAssociates = function (callback) {
        associates.insert(this.initData, function (err, res) {
            logger.log('debug', 'inserting intial data..associates');
            callback(err, res);
        });
    };

    this.getAssociates = function (callback) {
        associates.find().toArray(function (err, items) {
            callback(err, items);
        });
    };

    this.getAssociate = function (associateId, callback) {
        associates.findOne({ 'associateId': associateId }, function (err, associate) {
            logger.log('debug', 'error while getting associate data' + err);
            logger.log('debug', ' getting associate data' + associate);
            callback(err, associate);
        });
    };

    return this;
};
