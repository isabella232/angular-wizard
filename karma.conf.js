// Karma configuration
// Generated on Fri Aug 09 2013 14:14:35 GMT-0500 (CDT)

module.exports = function(config) {
  var configuration = {

    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      'https://code.jquery.com/jquery-2.1.1.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular-mocks.js',
      'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js',
      'dist/*.js',
      'test/*.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    browserNoActivityTimeout: 60000

  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Firefox', 'PhantomJS'];
  }

  config.set(configuration);
};
