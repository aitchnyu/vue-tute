const path = require('path')

const pages = {
  app: {
    entry: './src/app.js',
    template: 'public/index.html'
  },
  dates: {
    entry: './src/dates.js',
    template: 'public/index.html'
  }
}

module.exports = {
  css: {
    // Always inline CSS instead of extracting into separate file
    extract: false
  },
  // Don't add hashed to filename, for example foo.88e9679e.js
  filenameHashing: false,
  // Building to another dir
  outputDir: path.resolve(__dirname, '../web/webpack-dist'),
  chainWebpack: config => {
    // Source maps allow dev tools to show JS and CSS
    // You may want to disable in production
    config.devtool = 'source-map'
    // Inline all files into the js, by increasing the limit to 1000,000 bytes
    // Or you need to mess with __webpack_public_path__ to configure path resolution
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1000000 }))
    // Give each page a "vendors-pagename" js bundle to code split vendor code
    // Derived from https://stackoverflow.com/a/61089300/604511
    // In turn derived from https://github.com/vuejs/vue-cli/issues/2381#issuecomment-425038367
    const options = module.exports
    const pages = options.pages
    const pageKeys = Object.keys(pages)
    // Long-term caching
    const IS_VENDOR = /[\\/]node_modules[\\/]/
    config.optimization
      .splitChunks({
        cacheGroups: {
          ...pageKeys.map(key => ({
            name: `vendors-${key}`,
            priority: -11,
            chunks: chunk => chunk.name === key,
            test: IS_VENDOR,
            enforce: true
          })),
          common: {
            name: 'chunk-common',
            priority: -20,
            chunks: 'initial',
            minChunks: 2,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      })
  },
  pages: pages
}
