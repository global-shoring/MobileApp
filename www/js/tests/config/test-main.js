require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/scripts/src',
    paths: {
        "jquery": "../lib/jquery-1.8.2.min",
        'angular': '../lib/angular',
        'angular-mocks': '../tests/lib/angular-mocks',
        'mock-ajax': '../tests/lib/mock-ajax',
        'sinon': '../tests/lib/sinon'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-mocks': {
            deps: ["angular"],
            exports: 'mocks'
        },
        'jquery': {
            exports: 'jquery'
        }
    }
});

var requireModules = [];

(function () {
    for (file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {

            if (file.substring(file.length - 7, file.length) === 'Spec.js') {
                requireModules.push(file);
            }
        }
    }

})(window);

require(requireModules,
    function () {
        window.__karma__.start();
    });


