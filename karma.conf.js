// Karma configuration
// Generated on Mon Aug 17 2020 13:42:13 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({
    // trying to help chrome work.
    browserNoActivityTimeout: 400000,
    browserDisconnectTimeout: 10000,
    captureTimeout: 210000,
    browserDisconnectTolerance: 5,
    processKillTimeout: 100000,
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    plugins: [
      // load plugin
      require.resolve('@open-wc/karma-esm'),
      // fallback: resolve any karma- plugins
      'karma-*'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'src/*.js',  type: 'module', included: true },
      { pattern: 'test/*.js', type: 'module' }
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'ChromeExperiment'],
    //browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    esm: {
      // if you are using 'bare module imports' you will need this option
      nodeResolve: true
    },

    customLaunchers: {
      ChromeExperiment: {
        base: 'Chrome',
        flags: [
          '--no-sandbox', //default karma-esm configuration
          '--disable-setuid-sandbox', //default karma-esm configuration
          '--enable-experimental-web-platform-features', // necessary when using importMap option
          '--disable-web-security', '--disable-site-isolation-trials' //trying these we saw mentioned.
        ]
      },
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox', //default karma-esm configuration
          '--disable-setuid-sandbox', //default karma-esm configuration
          '--enable-experimental-web-platform-features' // necessary when using importMap option
        ]
      },
    }
  })
}
