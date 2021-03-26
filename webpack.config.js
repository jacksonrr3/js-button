// const path = require('path');
// import path from 'path';

// module.exports = {
export default {
    mode: "production", 

    output: {
        filename: "js-button.js"
    },
     
    resolve: {
        extensions: ['.js', '.json'],
        enforceExtension: true,
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|test)/,
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
