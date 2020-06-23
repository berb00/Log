const path = require('path');

module.exports = {
  mode: 'production', // production/development
  
  
  entry: './path/to/my/entry/file.js',
  entry: {
    main: './path/to/my/entry/file.js'
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
