// different babel config for mocha, need to transpile modules
require('@babel/register')({
  presets: ['@babel/preset-env'],
});
