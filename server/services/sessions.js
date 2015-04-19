"use strict";

var crypto = require('crypto'),
    logger = require('winston');

module.exports = function(db){

    var sessions = db.collection("sessions");

    var generateSessionId = function() {
        // Generate session id
        var currentDate = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var sessionId = crypto.createHash('sha1').update(currentDate + random).digest('hex');

        return sessionId;
    };


    this.startSession = function(username, callback) {

        // Create session document
        var sessionId = generateSessionId();
        var session = {
            'username': username,
            '_id': sessionId,
            'lastModified': (new Date()).valueOf().toString()
        };

        // Insert session document
        sessions.insert(session, function (err, result) {
            callback(err, sessionId);
        });
    };

    this.updateSession = function (sessionId, callback) {
        
        sessions.findOne({ '_id': sessionId }, function (err, session) {
            if (err) { return callback(err, null);}

            if (!session) {
                callback(new Error("Session: " + session + " does not exist"), null);
                return;
            }

            session.lastModified = (new Date()).valueOf().toString();

            // Update session document
            sessions.update(session, function (error) {
                callback(error, sessionId);
            });
        });
    };

    this.endSession = function(sessionId, callback) {
        // Remove session document
        sessions.remove({ '_id': sessionId }, function (err) {
            callback(err);
        });
    };

    this.getUsername = function(sessionId, callback) {

        if (!sessionId) {
            callback(Error("Session not set"), null);
            return;
        }

        sessions.findOne({ '_id': sessionId }, function (err, session) {
            if (err) {return callback(err, null);}

            if (!session) {
                callback(new Error("Session: " + session + " does not exist"), null);
                return;
            }

            callback(null, session.username);
        });
    };

    return this;
};
