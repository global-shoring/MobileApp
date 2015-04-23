/**
 * Created by Ramesh on 3/22/2015.
 */

require(["app.config"], function (config) {
    require(["src/appModule"], function (app) {
        app.bootstrap(app);
    });
});
