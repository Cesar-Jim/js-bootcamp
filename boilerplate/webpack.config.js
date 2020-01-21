const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/scripts/',
  },
  devtool: 'source-map',
};

// __dirname = C:/Users/c.jimenez/Documents/personal/programas/js-bootcamp/boilerplate --> it is a node.js global variable that provides the absolute path
// absolute path to bundle.js --> C:/Users/c.jimenez/Documents/personal/programas/js-bootcamp/boilerplate/public/scripts/bundle.js
