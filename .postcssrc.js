module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: (module) => (/want/gi.test(module.file) ? 37.5 : 75),
      propList: ['*']
    }
  }
}
