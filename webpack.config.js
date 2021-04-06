export default {
  mode: "production", 

  output: {
      filename: "js-button.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        resolve: {
          fullySpecified: false
        },
        exclude: /(node_modules|test|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
