"use strict";
/**
 * Created by Ramesh on 04-22-2015.
 */

module.exports = function () {
    
    this.errorHandler = function (err, req, res, next) {
        console.error(err.message);
        console.error(err.stack);
        res.status(500);
        res.render('error', { error: err });
    };

    return this;
};