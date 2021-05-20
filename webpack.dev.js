const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // This options is very important it needs for html reload in Hot Module Replase.
    // But be woory it may be only for static sites // for non static may be use dist folder or not using
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,

    port: 3030,
    compress: true,
    overlay: true,
    stats: 'normal',
    clientLogLevel: 'info',
    hot: true
  }
/*   module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, modules: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  } */
});
