/**
 * Created by Ramesh on 3/22/2015.
 */

require.config({
    baseUrl: "js",
    urlArgs: "bust=" + new Date().getTime(),
    paths: {
        "angular": "lib/angular/angular",
        "angular-animate": "lib/angular/angular-animate.min",
        "ui-router": "lib/angular-ui/angular-ui-router.min",
        "angular-sanitize":"lib/angular/angular-sanitize.min",
        "Q": "lib/q",
        "jquery": "lib/jquery-1.8.2.min",
        "bootstrap": "lib/ui-bootstrap-tpls-0.11.0",
        "underscore": "lib/underscore-min"
    },

    shim: {        
        'underscore': { exports: '_' },
        'angular': { exports: 'angular' },
        'jquery': { exports: '$' },
        'bootstrap': { deps: ["angular"], exports: 'bootstrap' },       
        'angular-animate': { deps: ["angular"], exports: 'angular_animate' },      
        'ui-router': { deps: ["angular"], exports: 'ui-router' },
        'angular-sanitize': { deps: ["angular"], exports: 'angular-sanitize' }
    },
    deps: []
});

console.log("Config is complete");
