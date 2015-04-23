module.exports = function (grunt) {
    "use strict";

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    
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
            files: ['www/js/src/**/*.js',
                'server/**/*.js',
                'www/js/test/**/*.js'],
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
            scripts: {
                files: ['www/js/src/**/*.js',
                'server/**/*.js',
                'www/js/test/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
            options: {
                livereload: true
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:3000/'
            }
        },
    });

    // Default task.
    grunt.registerTask('default', ['express:dev', 'open:dev', "express-keepalive"]);
    grunt.registerTask('dev', ['jshint', 'karma']);
    grunt.registerTask('watch', ['watch']);

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
