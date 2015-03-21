require(["app.config"], function (config) {
    require(["src/adp.app.module"], function (app) {
        app.bootstrap(app);
    });
});
