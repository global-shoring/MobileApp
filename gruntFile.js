module.exports = function (grunt) {
    "use strict";

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Default task.
    grunt.registerTask('default', ['jshint', 'karma']);

    var testConfig = function (configFile, customOptions) {
        var options = { configFile: configFile, keepalive: true };
        var travisOptions = process.env.TRAVIS && { browsers: ['chrome'], reporters: 'dots' };
        return grunt.util._.extend(options, customOptions, travisOptions);
    };

    // Project configuration.
    grunt.initConfig({
        karma: {
            unit: {
                options: testConfig('./www/js/tests/config/karma.conf.js')
            }
        },
        jshint: {
            files: ['www/js/src/**/*.js', 'www/js/test/**/*.js'],
            options: {
                "curly": true,
                "eqeqeq": true,
                "immed": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "sub": true,
                "undef": true,
                "boss": true,
                "eqnull": true,
                "node": true,
                "globals": {
                    "angular": true,
                    "_": true,
                    "$": true,
                    "requirejs": true,
                    "document": true,
                    "define": true,
                    "window": true,
                    "host": true,
                    "describe": false,
                    "it": false,
                    "expect": false,
                    "beforeEach": false,
                    "afterEach": false,
                    "spyOn": false,
                    "inject": false,
                    "url": false,
                    "jasmine": false,
                    "Globalize": false,
                    "FormData": true,
                    "XMLHttpRequest": true,
                    "sinon": false
                }
            }
        },
        watch: {
            jshint: {
                files: ['www/js/src/**/*.js', 'www/js/test/**/*.js'],
                tasks: ['jshint'],
                options: {
                    interrupt: true
                }
            }
        }
    });
};
