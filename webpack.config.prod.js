const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack');


'use strict';
var path = require("path");

module.exports = {
  context: __dirname + "/src",
  devtool: "source-map",
  entry: {
    app: "./index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "./",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    // watchContentBase: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Hesse Poems',
      template: 'template.html',
      inject: 'body',
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel",
      },
      {
        test: /\.md$/,
        loader: "html!markdown",
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ]
      },
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve('./node_modules'),
      path.resolve(__dirname, "src"),
    ],
    extensions: [".js", ".json", ".jsx", ".css", ".html"],
  },
};
