'use strict';
var path = require("path");

module.exports = {
  context: __dirname + "/src",
  devtool: "cheap-eval-source-map",
  entry: {
    app: "./index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "/dist",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000,
    // watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-airbnb"],
        }
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
      path.resolve(__dirname, "src")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
};
