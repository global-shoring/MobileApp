/**
 * Created by Ramesh on 04-22-2015.
 */

"use strict";

var ContentController = require('../../server/controllers/content'),
    UserController = require('../../server/controllers/user'),
    AdminController = require('../../server/controllers/admin'),
    AssociateController = require('../../server/controllers/associate'),
    AccountController = require('../../server/controllers/account'),
    ErrorController = require('../../server/controllers/error');

module.exports = function (app, db) {
    
    var userController = new UserController(db),
        adminController = new AdminController(db),
        associateController = new AssociateController(db),
        accountController = new AccountController(db),
        contentController = new ContentController(db);

    console.log('resolving routes....');

    // The main page of the app
    app.get('/', contentController.displayMainPage);

    // API Routes
    app.get('/api/user', userController.getUser);
    app.get('/api/admin', adminController.getAdminDetails);
    app.put('/api/admin', adminController.updateAdminDetails);

    app.get('/api/associates', associateController.getAssociates);
    app.get('/api/associates/:id', associateController.getAssociateDetails);

    app.post('/api/account/login', accountController.login);
    app.get('/api/account/logout', accountController.logout);
    
    // Api test
    app.get('/api/ping', function (req, res, next) {
        var data = [{ name: 'Hello', value: 12 },
            { name: 'There!!', value: 16 }];

        res.json(data);
    });

    // Error handling Pacientare
    // Error handling middleware
    //app.use(ErrorController);

    return this;
};

