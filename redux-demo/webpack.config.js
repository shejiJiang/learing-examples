const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

  devtool: 'inline-source-map',

  entry: './src/index.tsx',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack react demo',
      filename: 'index.html',
      template: './index.html'
    })
  ],

  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
};
