module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-coverage'),
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
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      type: 'text-summary',
      dir: '../../coverage/web-components',
      subdir: '.',
      check: {
        emitWarning: false,
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
      watermarks: {
        statements: [50, 75],
        functions: [50, 75],
        branches: [50, 75],
        lines: [50, 75],
      },
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
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
