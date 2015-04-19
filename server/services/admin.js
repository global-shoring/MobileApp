"use strict";

var logger = require('winston');

module.exports = function (db) {

    this.validFields = [
        'firstname',
        'lastname',
        'username',
        'email'
    ];

    this.initData = [
            {
                "_id":"1",
                "firstname": "Richard",
                "lastname": "Walker",
                "email": "rwalker@clinicaltrials.com",
                "username": "rwalker",
                "events": [
                    {
                        "_id": "1",
                        from_date: new Date('Fri Jan 24 2014'),
                        to_date: new Date('Fri Jan 24 2014'),
                        title: 'Company Day',
                        location: 'mhart'
                    },
                    {
                        "_id": "2",
                        from_date: new Date('Fri Jan 22 2014'),
                        to_date: new Date('Fri Jan 22 2014'),
                        title: 'Family Day',
                        location: 'mwalsh'
                    },
                    {
                        "_id": "3",
                        from_date: new Date('Fri Jan 22 2014'),
                        to_date: new Date('Fri Jan 22 2014'),
                        title: 'Womens Day celebration',
                        location: 'smorgan'
                    }
                ],
                "news": [
                    {
                        "_id": "1",
                        date: new Date('Fri Jan 24 2014'),
                        headline: 'Today ADP launched new portal',
                        location: 'mhart'
                    },
                    {
                        "_id": "2",
                        date: new Date('Fri Jan 22 2014'),
                        headline: 'This quarter result are out and indicate good growth',
                        location: 'mwalsh'
                    },
                    {
                        "_id": "3",
                        date: new Date('Fri Jan 22 2014'),
                        headline: 'ADP has accquired new company',
                        location: 'smorgan'
                    }
                ]
            }
    ];

    var admins = db.collection("admins");

    this.initAdmins = function (callback) {
        admins.insert(this.initData, function (err, res) {
            logger.log('debug', 'inserting intial data..');
            callback(err, res);
        });
    };

    this.getAdminDetails = function (username, callback) {
        admins.findOne({ 'username': username }, function (err, admin) {
            logger.log('debug', 'error while getting admin data' + err);
            logger.log('debug', ' getting admin data' + admin);
            callback(err, admin);
        });
    };

    this.updateAdminDetails = function (details, callback) {
        admins.update(details, function (err, detail) {
            logger.log('debug', 'error while saving admin data' + err);
            logger.log('debug', ' updated admin data' + detail);
            callback(err, detail);
        });
    };

    return this;
};
