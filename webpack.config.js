const path = require('path');
const webpack = require('webpack');




module.exports = {
  mode: 'development',
  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }]
  },

  output: {
    filename: "button.js"
  },

  devServer: {
    open: true,
    host: 'localhost'
  }

}