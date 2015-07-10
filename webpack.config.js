module.exports = {
  target: 'node-webkit',
  devtool: '#source-map',
  output: {
    filename: '[name].js',
    sourcemapFilename: '[name].map'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    flowdock: 'flowdock',
    react: 'React'
  }
};
