const path = require('path')

const webpack = require('webpack');

const PUBLIC = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(PUBLIC, 'js', 'app.js'),
  output: {
    path: path.join(PUBLIC, 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    hot: true,
    publicPath: '/public/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
