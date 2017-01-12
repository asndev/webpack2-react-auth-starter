let context = require.context('./src', true, /(\.spec|\.test)\.js$/);
context.keys().forEach(context);
