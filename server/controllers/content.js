"use strict";
/**
 * Created by Ramesh on 04-22-2015.
 */

module.exports = function (db) {
    this.displayMainPage = function (req, res) {
        return res.render('index.html');
    };

    return this;
};
