// webpack.config.js
const path = require("path");
// const webpack = require("./node_modules/webpack");
const VueLoaderPlugin = require("./node_modules/vue-loader/lib/plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    site: "./site.js",
  },
  output: {
    path: path.resolve(__dirname, "./js"),
    filename: "[name].bundle.js"
  },
  mode: 'production',
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  externals: {
    jquery: 'jQuery',
    Drupal: 'Drupal',
    drupalSettings: 'drupalSettings',
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter'
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  }
};
