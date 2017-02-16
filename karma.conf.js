module.exports = config => {
  config.set({
    frameworks: ['jasmine'],
    files: [{ pattern: './src/**/*.spec.js' }],
    preprocessors: {
      './src/**/*.spec.js': ['webpack', 'sourcemap'],
      'src/**/*.js': ['coverage']
    },
    autoWatch: true,
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' }
      ]
    },
    logLevel: config.LOG_INFO,
    singleRun: false,
    browsers: ['PhantomJS'],
    customLaunchers: {
      // tell TravisCI to use chromium when testing
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    webpack: require('./webpack.config'),
    webpackServer: {
      noInfo: true
    }
  });
  // In case we do not want to use phantom, but real chrome
  // Detect if this is TravisCI running the tests and tell it to use chromium
  // if (process.env.TRAVIS) {
  //   config.browsers = ['Chrome_travis_ci'];
  // }
};
