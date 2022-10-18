module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-summary-reporter'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false,
      captureConsole: false,
      jasmine: {
        random: false,
      },
    },
    reporters: ['dots', 'summary'],
    summaryReporter: {
      show: 'failed',
      specLength: 50,
      overviewColumn: true,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    singleRun: true,
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        headless: true,
        args: ['--headless'],
      },
    },
  });
};
