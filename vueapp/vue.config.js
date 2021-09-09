const path = require('path')

const pages = {
  app: {
    entry: './src/app.js',
    template: 'public/index.html',
    chunks: ['chunk-vendors', 'chunk-common', 'app']
  }
}

module.exports = {
  css: {
    // Always inline CSS instead of extracting into separate file
    extract: false
  },
  // Don't add hashed to filename, for example foo.88e9679e.js
  filenameHashing: false,
  // Source maps allow dev tools to show JS and CSS
  // You may want to disable in production
  configureWebpack: (config) => {
    config.devtool = 'source-map'
  },
  // Building to another dir
  outputDir: path.resolve(__dirname, '../web/webpack-dist'),
  chainWebpack: config => {
    // Inline all files into the js, by increasing the limit to 1000,000 bytes
    // Or you need to mess with __webpack_public_path__ to configure path resolution
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1000000 }))
  },
  pages: pages
}
