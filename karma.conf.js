module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: ['karma.entry.js'],
    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },
    autoWatch: true,
    reporters: ['dots'],
    logLevel: config.LOG_INFO,
    singleRun: false,
    browsers: ['Chrome'],
    webpack: require('./webpack.config'),
    webpackServer: {
      noInfo: true
    }
  });
};
