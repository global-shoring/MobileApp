"use strict";
/**
 * Created by Ramesh on 04-22-2015.
 */

var _ = require('lodash'),
    bcrypt = require('bcrypt-nodejs'),
    http = require('http'),
    logger = require('winston');


module.exports = function(db){

    this.validFields = ['firstname',
        'lastname', 'username',
        'password', 'email'
    ];
    this.initData = [
            {
                "firstname": "Richard",
                "lastname": "Walker",
                "email": "rwalker@gmail.com",
                "username": "rwalker",
                "password": "abc",
                "status": 'active'
            },
            {
                "firstname": "Michael",
                "lastname": "Hart",
                "email": "mhart@email.com",
                "username": "mhart",
                "password": "abc",
                "status": 'active'
            },
            {
                "firstname": "Marcos",
                "lastname": "Levia",
                "email": "mleiva@gmail.com",
                "username": "mleiva",
                "password": "asdf",
                "status": 'inactive'
            },
            {
                "firstname": "Sara",
                "lastname": "Morgan",
                "email": "smorgan@mail.com",
                "username": "smorgan",
                "password": "asdfas",
                "status": 'inactive'
            }
    ];

    var users = db.collection("users");

    this.initUsers = function (callback) {
        users.insert(this.initData, function (err, res) {
            callback(err, res);
        });
    };

    this.getUser = function(username, callback) {
        users.findOne({'username': username}, function(err, user){
            callback(err,user);
        });
    };

    this.getUsers = function(condition,callback) {
        users.find(condition).toArray(function(err, users){
            callback(err,users);
        });
    };

    this.getUsersFields = function(condition,fields,callback) {
        users.find(condition,fields).toArray(function(err, users){
            callback(err,users);
        });
    };

    this.verifyData = function (username, callback) {
        users.findOne({'username': username}, function(err, user){
            callback(err,user);
        });
    };


    this.validateLogin = function(username, password, callback) {
        // Callback to pass to MongoDB that validates a user document
        function validateUserDoc(err, user) {
            
            if (err) { return callback(err, null);}
            
            if (user) {
                if ((password, user.password)) {
                    callback(null, user);
                }
                else {
                    var invalid_password_error = new Error("Invalid password");
                    // Set an extra field so we can distinguish this from a db error
                    invalid_password_error.invalid_password = true;
                    callback(invalid_password_error, null);
                }
            }
            else {
                var no_such_user_error = new Error("User: " + user + " does not exist");
                // Set an extra field so we can distinguish this from a db error
                no_such_user_error.no_such_user = true;
                callback(no_such_user_error, null);
            }
        }

        users.findOne({ 'username' : username }, validateUserDoc);
    };

    return this;
};
