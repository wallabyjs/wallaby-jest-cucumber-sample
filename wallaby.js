module.exports = function (wallaby) {

  return {
    files: ['src/**/*.js', 'specs/**/*.feature', '!specs/**/*steps.js'],

    tests: ['specs/**/*steps.js'],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};