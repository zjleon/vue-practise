const path = require('path')
const webpack = require('webpack')
const {InjectManifest} = require('workbox-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs')
const WebpackOnBuildPlugin = require('on-build-webpack');

function exportServiceWorkerENV(webpackConfig) {
  fs.writeFile(`${webpackConfig.output.path}/env.js`,
  `
  const process = {
    env: {
      NODE_ENV: '${process.env.NODE_ENV}'
    }
  }
  `,
  () => {});
}

module.exports = {
  devServer: {
    https: true,
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
    // writeToDisk: true,
  },
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch')
    config.plugins.delete('Preload')
    config.plugins.delete('preload')
  },
  configureWebpack: config => {
    console.log(111, config)
    config.plugins.push(new WebpackOnBuildPlugin(function(stats) {
      exportServiceWorkerENV(config)
    }))
    config.plugins.push(new CleanWebpackPlugin({
      // keep the env file
      cleanOnceBeforeBuildPatterns: ['**/*', '!env.js'],
    }))
    if (process.env.NODE_ENV === 'production') {
      // mutate for production...
    } else {
      // mutate for development...
    }
    config.plugins.push(new InjectManifest({
      swSrc: path.resolve(__dirname, './src/worker.js'),
      importWorkboxFrom: 'local',
      test: [/\.html$/, /\.js$/],
    }))
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }))
  }
}