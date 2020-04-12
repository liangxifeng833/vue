'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths liangxifeng 2020-04-12 修改
    //assetsSubDirectory: 'static',
    //npm run dev 时把所有的静态资源模拟加载到 dist/lxftest/static文件夹下
    assetsSubDirectory: '../dist',
    assetsPublicPath: '/lxftest/static',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Paths liangxifeng 2020-04-12
    // Template for index.html 模板文件打包到 dist/lxftest目录中
    index: path.resolve(__dirname, '../dist/lxftest/index.html'),

    assetsRoot: path.resolve(__dirname, '../dist'),
    // Paths liangxifeng 2020-04-12 
    //把所有的静态资源打包到 dist/lxftest/static文件夹下
    assetsSubDirectory: 'lxftest/static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
