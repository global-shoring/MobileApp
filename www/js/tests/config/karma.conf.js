// Karma configuration
// Generated on Tue Oct 28 2014 15:26:08 GMT+0530 (India Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
           'scripts/tests/config/test-main.js',
           'scripts/lib/jquery-1.8.2.min.js',
           'scripts/lib/angular.js',
           'scripts/lib/toaster.js',

          { pattern: 'scripts/lib/*.js', included: false },

          { pattern: 'scripts/src/**/*.js', included: false, watched: true },
          { pattern: 'scripts/tests/lib/*.js', included: false, watched: false },
          { pattern: 'scripts/tests/unit/**/*.js', included: false, watched: true },
          { pattern: 'scripts/tests/unit/**/**/*.js', included: false, watched: true },
          { pattern: 'scripts/tests/unit/*.js', included: false, watched: true },         

           //path of all html files        
         'scripts/src/**/**/*.html'
        ],

        // list of files to exclude
        exclude: ['karma.conf.js'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'scripts/src/**/**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            //prependPrefix: '/'
            //stripPrefix: 'js/'
           // moduleName: 'views'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 8100,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false

    });
};
