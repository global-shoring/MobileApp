"use strict";

module.exports = function (db) {
    this.displayMainPage = function (req, res) {
        return res.render('index.html');
    };

    return this;
};
